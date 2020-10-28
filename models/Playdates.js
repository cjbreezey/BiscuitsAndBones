const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    requestor: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    status: {
        type: String,
        default: "Not confirmed",
    },
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
    lat: {
        type: Number,
    // required: true,
    },
    lng: {
        type: Number, 
    // required: true,
    },
    timestamps: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Request = mongoose.model("Request", RequestSchema);