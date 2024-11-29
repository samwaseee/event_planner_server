const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  date: { type: Date },
  location: { type: String},
  organizer: { type: String},
  attendees: { type: Number, default: 0 },
});

module.exports = mongoose.model("Event", eventSchema);
