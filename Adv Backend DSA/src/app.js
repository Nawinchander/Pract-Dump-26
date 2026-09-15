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




