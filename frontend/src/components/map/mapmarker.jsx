// const google = window.google

// class MapMarker {
//     constructor(map, handleClick) {
//         this.map = map;
//         this.handleClick = handleClick;
//         this.markers = {};
//     }

//     // updateMarkers(events) {
//     //     const markerTracker = {};
//     //     events.forEach(event => markerTracker[event._id] = event);

//     //     events.filter(event => !this.markers[event._id])
//     //         .forEach(newEvent => this.createMarker(newEvent))

//     //     Object.keys(this.markers).filter(eventId => !markerTracker[eventId])
//     //         .forEach(eventId => this.removeMarker(this.markers[eventId]))
//     // }

//     createMarker(event) {
//         const position = new google.maps.LatLng(event.lat, event.lng);

//         const marker = new google.maps.Marker({
//             position,
//             map: this.map,
//             eventId: event._id
//         });

//         this.markers[event._id] = marker
//     }

//     removeMarker(marker) {
//         marker.setMap(null);
//         delete this.markers[marker.eventId]
//     }

// }

// export default MapMarker