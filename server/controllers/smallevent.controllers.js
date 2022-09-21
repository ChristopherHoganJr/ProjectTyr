const SmallEvent = require("../models/smallevent.models");

module.exports = {
  findAll: (req, res) => {
    SmallEvent.find()
      .then((allSmallEvents) => res.json(allSmallEvents))
      .catch((err) => res.status(400).json(err));
  },
  create: (req, res) => {
    SmallEvent.create(req.body)
      .then((newSmallEvent) =>
        res.json({
          message: "Created new small event",
          newSmallEvent,
          status: 200,
        })
      )
      .catch((err) => res.status(400).json(err));
  },
  findOne: (req, res) => {
    SmallEvent.findById(req.params.id)
      .then((oneSmallEvent) => res.json(oneSmallEvent))
      .catch((err) => res.status(400).json(err));
  },
  update: (req, res) => {
    SmallEvent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedSmallEvent) => res.json(updatedSmallEvent))
      .catch((err) => res.status(400).json(err));
  },
  delete: (req, res) => {
    SmallEvent.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
