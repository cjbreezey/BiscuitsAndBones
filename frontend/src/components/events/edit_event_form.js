import React from 'react';
import './events.css'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
          location: "",
          date: "",
          time: "",
          lat: "",
          lng: "",
          address: "",
          host_id: "",
          attendees: "",
          _id: "",
          mapCenter: {
            lat: "",
            lng: "",
          },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {


            this.props.fetchEvent(this.props.match.params.event_id).then(() => {
                this.setState({
                    title: this.props.event.title,
                    description: this.props.event.description,
                    location: this.props.event.location,
                    date: this.props.event.date,
                    time: this.props.event.time,
                    lat: this.props.event.lat,
                    lng: this.props.event.lng,
                    address: this.props.event.location,
                    host_id: this.props.event.host_id,
                    attendees: this.props.event.attendees,
                    _id: this.props.event._id,
                    mapCenter: {
                        lat: this.props.event.lat,
                        lng: this.props.event.lng,
                 } })
            
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        let event = {
            title: this.state.title,
            description: this.state.description,
            location: this.state.address,
            date: this.state.date,
            time: this.state.time,
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
            host_id: this.state.host_id,
            _id: this.state._id,
            attendees: this.state.attendees
        };
        this.props.updateEvent(event)
        this.props.history.push(`/events/${this.props.event._id}`)
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
                console.log('Success', latLng);
                this.setState({ address });
                this.setState({ mapCenter: latLng });
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        let showEdit;
        this.props.event ? showEdit = 
        (
            <div className="create-event-container">
                <div className="create-center-box">
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        <div className="create-inputs">
                            <input autofocus className="create-event-input" type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                                placeholder="Title..."
                            />
                            <br />
                            <textarea wrap="hard" className="description-input"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Description..."
                            />
                            <br />
                            <input
                                className="create-event-input"
                                type="date"
                                id="event-date"
                                value={this.state.date}
                                onChange={this.update('date')}
                            />
                            <br />
                            <input className="create-event-input"
                                type="time"
                                value={this.state.time}
                                onChange={this.update('time')}
                            />
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div className="create-event-input">
                                        <input
                                            className="create-event-input"
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
                            <input className="create-event-input" type="submit" value="Submit" />
                        </div>
                        <Map className="google-map" style={{ width: '500px', height: '300px', left: '25vw' }} google={this.props.google}
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
                    </form>
                </div>
            </div>
        ) : showEdit = null;
        return (
            <>{showEdit}</>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_SECRET_KEY)
})(EditEventForm)