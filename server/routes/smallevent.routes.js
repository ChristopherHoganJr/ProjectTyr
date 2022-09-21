const SmallEvent = require("../controllers/smallevent.controllers");

module.exports = (app) => {
  app.get("/api/smallevent", SmallEvent.findAll);
  app.post("/api/smallevent", SmallEvent.create);
  app.get("/api/smallevent/:id", SmallEvent.findOne);
  app.put("/api/smallevent/:id", SmallEvent.update);
  app.delete("/api/smallevent/:id", SmallEvent.delete);
};
