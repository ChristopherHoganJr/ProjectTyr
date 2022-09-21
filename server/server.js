const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "projecttyr";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config")(DB);
require("./routes/carclub.routes")(app);
require("./routes/smallevent.routes")(app);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
