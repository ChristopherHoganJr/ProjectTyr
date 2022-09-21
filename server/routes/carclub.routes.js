const CarClub = require("../controllers/carclub.controllers");

module.exports = (app) => {
  app.get("/api/carclub", CarClub.findAll);
  app.post("/api/carclub", CarClub.create);
  app.get("/api/carclub/:id", CarClub.findOne);
  app.put("/api/carclub/:id", CarClub.update);
  app.delete("/api/carclub/:id", CarClub.delete);
};
