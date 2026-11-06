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
app.use("/api/routes", routeRoutes);
app.use("/api/scheduler", schedulerRoutes);


// Error middleware must be registered after all routes.
app.use(errorMiddleware);

module.exports = app;



// Your src/server.js should start the server and initialize the database connections using your existing setup. Keep app.js separate from server.js so Supertest can import the app without opening a network port.



// Also confirm that your existing route.controller.js, scheduler.controller.js, route.service.js, and scheduler.service.js export all their previous functions along with the newly added functions.

// Important: Do not create multiple module.exports assignments in the same file. Add each new function to the existing export object.


// Run the new tests
// Make sure you have Jest and Supertest installed:

// npm install --save-dev jest supertest

// Run the two new unit tests:

// npx jest tests/unit/minimumSpanningNetwork.test.js tests/unit/deadlineAnalyzer.test.js --runInBand

// Run the two API tests:

// npx jest tests/api/minimum-spanning-network.api.test.js tests/api/deadline-analyzer.api.test.js --runInBand

// Run the complete existing test suite:

// npm test

// Generate test coverage:

// npm run test:coverage








