const express = require("express");

const pathRoutes =
  require("./routes/path.routes");

const app = express();

app.use(express.json());

app.use("/api/dsa", pathRoutes);

module.exports = app;


//// POST /api/dsa/shortest-path



