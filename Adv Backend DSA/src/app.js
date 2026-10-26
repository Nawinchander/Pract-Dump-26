const express = require("express");

const routeRoutes =
    require("./routes/route.routes");

const schedulerRoutes =
    require("./routes/scheduler.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

app.use(
    "/api/routes",
    routeRoutes
);

app.use(
    "/api/scheduler",
    schedulerRoutes
);

app.use((error, req, res, next) => {

    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message
    });
});

module.exports = app;


const express = require("express");

const routeRoutes = require("./routes/route.routes");
const schedulerRoutes = require("./routes/scheduler.routes");
const errorMiddleware = require("./middleware/error.middleware");

// const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Advanced DSA Backend is running"
  });
});

app.use("/api/routes", routeRoutes);
app.use("/api/scheduler", schedulerRoutes);

// Error middleware must be registered after all routes.
app.use(errorMiddleware);

module.exports = app;



// Your src/server.js should start the server and initialize the database connections using your existing setup. Keep app.js separate from server.js so Supertest can import the app without opening a network port.



