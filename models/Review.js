const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  reviewer_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  reviewee_id: {
    type: Schema.Types.ObjectId,
    required: "users",
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

module.exports = Review = mongoose.model('Review', ReviewSchema);