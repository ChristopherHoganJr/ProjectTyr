const mongoose = require("mongoose");

const SmallEventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: [true, "You must enter an event name"],
    },
    hostedBy: {
      type: String,
      required: [true, "Must have a host"],
    },
    aboutMeet: {
      type: String,
      required: [true, "Must have a summary about the event"],
      minlength: [12, "About must be at least 24 characters."],
    },
    meetAddress: {
      type: String,
      required: [true, "Meet must have an address"],
    },
    meetDate: {
      type: Date,
      required: [true, "Meet must have a date"],
    },
  },
  { timestamps: true }
);

const SmallEvent = mongoose.model("SmallEvent", SmallEventSchema);
module.exports = SmallEvent;
