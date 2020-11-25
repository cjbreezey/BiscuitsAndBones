const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  host_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number, 
  },
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'users',
  }],
}, {
  timestamps: true,
})

module.exports = Event = mongoose.model('Event', EventSchema);