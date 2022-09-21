const mongoose = require("mongoose");

const CarClubSchema = new mongoose.Schema(
  {
    clubType: {
      type: String,
      required: [true, "You must enter a club type"],
    },
    clubName: {
      type: String,
      required: [true, "You must enter a club name"],
      minlength: [1, "The club must at least be 1 character long"],
    },
    clubLogo: {
      type: String,
      required: [true, "You must have a club logo"],
    },
    clubPresident: {
      type: String,
      required: [true, "Must have a club president"],
    },
    yearFounded: {
      type: Number,
      required: [true, "You must have a founded year"],
    },
    carMake: {
      type: String,
      required: [true, "You must select a car make for club"],
    },
    carModel: {
      type: String,
      required: [true, "You must enter a car model"],
    },
    yearRange: {
      type: String,
      required: [true, "You must have a year range for club"],
    },
    engineType: {
      type: String,
      required: [true, "You must have an engine type for club"],
    },
    transmissionType: {
      type: String,
      required: [true, "You must have a transmission type"],
    },
    aboutClub: {
      type: String,
      required: [true, "You must have an about summary"],
      minlength: [14, "Your summary must be at least 14 characters long."],
    },
  },
  { timestamps: true }
);

const CarClub = mongoose.model("CarClub", CarClubSchema);
module.exports = CarClub;
