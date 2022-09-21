const CarClub = require("../models/carclub.models");

module.exports = {
  findAll: (req, res) => {
    CarClub.find()
      .then((allCarClubs) => res.json(allCarClubs))
      .catch((err) => res.status(400).json(err));
  },
  create: (req, res) => {
    CarClub.create(req.body)
      .then((newCarClub) =>
        res.json({ message: "Created new car club", newCarClub, status: 200 })
      )
      .catch((err) => res.status(400).json(err));
  },
  findOne: (req, res) => {
    CarClub.findById(req.params.id)
      .then((oneCarClub) => res.json(oneCarClub))
      .catch((err) => res.status(400).json(err));
  },
  update: (req, res) => {
    CarClub.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedCarClub) => res.json(updatedCarClub))
      .catch((err) => res.status(400).json(err));
  },
  delete: (req, res) => {
    CarClub.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
