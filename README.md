# Biscuits And Bones

## Overview

Biscuits and Bones, or B&B for short, is a web application which lets pet owners and pet lovers host, attend, and socialize at playdate events tailored for all animals. The goal of B&B is to provide a platform for animal enthusiasts to gather and let their animals let loose and feel more irrelephant (pun intended)!

[B&B Live](https://biscuitsnbones.herokuapp.com/#/)

## Engineer Team

* [Christopher Lee](https://www.linkedin.com/in/christopher-j-lee/)
* [Taylor Lee](https://www.linkedin.com/in/taylorlee117/)
* [Peter Min](https://www.linkedin.com/in/peter-min-02a62a13a/)
* [Jonathan Siu](https://www.linkedin.com/in/jonathansiu826/)

## Technologies

### Frontend

  * `React/Redux`
  * `Javascript`
  * `HTML/CSS`

### Backend

  * `MongoDB`
  * `Express.js`
  * `Node.js`
  
### Extras

  * AWS S3 (Cloud object storage service to host all images in order to increase page load speed, server reliability, and data availability while ensuring security with AWS IAM)
  * Google Maps API and Places Autocomplete API (Used google maps and autocomplete to geocode and accurately display real time map location and store user input to our database)
  
## Features

### Login/Signup

  * Demo-login for users who want to test site before signing up
  * Secure User Authentication using BCrypt hashing
  
(Gif of login)

### Google Maps/Places Autocomplete

 * User's can type out a location and Autocomplete API will give suggestions based on text input
 * Inputted location will automatically move map and place a marker at given location
 
(Gif of Map working)

### Dropdown Event Bulletin Board

 * User's can click an event to trigger a dropdown for more information about the event
 
(Gif of dropping down events)

## Code Snippets

Utilizing Google Maps API and Places Autocomplete API, we were able to create a search box into our form that would directly correlate to the map and move the screen marker to the location specified by the user. Places Autocomplete would provide suggestions to autocomplete the location.

```js
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
 <input className="create-event-input" type="submit" value="Submit" />
 </div>
 <Map className="google-map" style={{width:'500px', height: '300px', left: '25vw'}} google={this.props.google}
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
```

AWS Code Snippet

```js
const s3 = new aws.S3(); 
aws.config.update({
    // secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
    // accessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-west-1"
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};
const upload = multer({
    fileFilter,
    storage: multerS3({      
        acl: "public-read",
        s3,
        bucket: "biscuitsandbones-profilepics",
        metadata: function (req, file, cb) {
            cb(null, { fieldname: "TESTING_METADATA"});
        },
        content: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `${Date.now().toString()}` + "-" + file.originalname);
        },
    }),
});
```
