const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  host_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
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
  latitude: {
    type: Number,
    // required: true,
  },
  longitude: {
    type: Number, 
    // required: true,
  },
}, {
  timestamps: true,
})

module.exports = Event = mongoose.model('Event', EventSchema);