import React from 'react';
import EventBox from './event_box';
import './events.css'
import EventMap from '../map/event_map'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'

class EventCreate extends React.Component {
  constructor(props) {
      super(props);
      debugger
      this.state = {
          title: "",
          description: "",
          location: "",
          time: "",
          newEvent: "",
          date: "",
          lat: "",
          lng: "",
          address: "",

          mapCenter: {
            lat: 37.773972,
            lng: -122.431297
          }
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newEvent: nextProps.newEvent.description});
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.address,
      time: this.state.time,
      date: this.state.date,
      lat: this.state.mapCenter.lat,
      lng: this.state.mapCenter.lng
    };
    debugger
    this.props.createEvent(event)
    this.setState({title: ''})
    this.setState({description: ''})
    this.setState({location: ''})
    this.setState({time: ''})
    this.setState({date: ''})
    this.props.history.push("/events")
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        debugger
        console.log('Success', latLng);
        this.setState({ address });
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
        <div className="create-event-container">
            <form className="create-form" onSubmit={this.handleSubmit}>
                <div>
                    <input className="create-event-input" type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder="Title..."
                    />
                    <br />
                    <textarea className="create-event-input"
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder="Description..."
                    />
                    <br />
                    <input type="date"
                        value={this.state.date}
                        onChange={this.update('date')}
                    />
                    <br />
              <input type="time"
                  value={this.state.time}
                  onChange={this.update('time')}
              />
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Location...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
                    <input type="submit" value="Submit" />
                    <div className="google-map">
                      <Map google={this.props.google}
                        initialCenter={{
                          lat: this.state.mapCenter.lat,
                          lng: this.state.mapCenter.lng
                        }}
                        center={{
                          lat: this.state.mapCenter.lat,
                          lng: this.state.mapCenter.lng
                        }}
                      >
                        <Marker
                          position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                          }}
                        />
                        </Map>
                    </div>
                </div>
            </form>
            <br />
            <EventBox description={this.state.newEvent} />
            {/* <EventMap /> */}
        </div>
    )
  }
}

// export default EventCreate;
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_SECRET_KEY)
})(EventCreate)