import React from 'react';
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react'
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import './map.css'


export class EventMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: 37.773972,
                lng: -122.431297
            }
        }
    }

    // onMarkerClick = (props, marker, e) =>
    //     this.setState({
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWindow: true
    //     });

    // onMapClicked = (props) => {
    //     if (this.state.showingInfoWindow) {
    //         this.setState({
    //             showingInfoWindow: false,
    //             activeMarker: null
    //         })
    //     }
    // };

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        // debugger
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.setState({ address });
                this.setState({ mapCenter: latLng });
            })
            .catch(error => console.error('Error', error));
            // debugger
    };

    render() {
        // console.log(this.state)
        return (
            <div className="google-map">
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
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

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyABA0_u_zijxcgEcTIcZ8RkuhoslfSN_sE')
})(EventMap)


// import React from 'react'
// import MapMarker from './mapmarker'

// const google = window.google

// class EventMap extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         const mapOptions = {
//             center: { lat: 37.798887, lng: -122.401373 },
//             zoom: 11
//         }
//         const map = this.refs.map;
//         this.map = new google.maps.Map(map, mapOptions)

//         this.mapMarker = new MapMarker(this.map);
//         // this.mapMarker.updateMarkers(this.props.events);

//         // this.registerListeners();
//     }

//     componentDidUpdate() {
//         // this.mapMarker.updateMarkers(this.props.events)
//     }

//     // registerListeners() {
//     //     google.maps.event.addListener(this.map, 'idle', () => {
//     //         const {north, south, east, west} = this.map.getBounds().toJSON();
//     //         const bounds = {
//     //             northEast: {lat: north, lng: east},
//     //             southWest: {lat: south, lng: west}
//     //         }
//     //     })

//     //     const p1 = new Promise((res, rej) => {
//     //         this.props.updateFilter('bounds', bounds)
//     //     })

//     //     const p2 = new Promise((res, rej) => {
//     //         this.props.fetchEventsFiltered()
//     //     })

//     //     p1.then(() => p2)

//     // }

//     render() {
//         return (
//             <div id='map-container'>
//                 <div className='this-map' ref="map">
//                     Map
//                 </div>
//             </div>
//         )
//     }

// }

// export default EventMap

// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

// class EventMap extends React.Component {
//     render() {

//         // const WrappedMap = withScriptjs(withGoogleMap(EventMap));

//         return (
//             <div>
//                 <GoogleMap 
//                     defaultZoom={12} 
//                     defaultCenter={{ lat: 49.2827291, lng: -123.1207375}}
//                 />
//             </div>
//         )
//     }
// }

// export default EventMap