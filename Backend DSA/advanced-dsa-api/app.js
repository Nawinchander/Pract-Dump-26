const express = require("express");

const windowRoutes = require("./routes/window.routes");

const app = express();

app.use(express.json());

app.use("/api/dsa", windowRoutes);

module.exports = app;



