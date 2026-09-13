const mongoose = require("mongoose");

const trafficSnapshotSchema =
    new mongoose.Schema({
        source: {
            type: String,
            required: true
        },

        destination: {
            type: String,
            required: true
        },

        trafficMultiplier: {
            type: Number,
            required: true,
            min: 0.1
        },

        capturedAt: {
            type: Date,
            default: Date.now
        }
    });

module.exports =
    mongoose.model(
        "TrafficSnapshot",
        trafficSnapshotSchema
    );



const mongoose = require("mongoose");

const trafficSnapshotSchema =
    new mongoose.Schema({
        source: {
            type: String,
            required: true
        },

        destination: {
            type: String,
            required: true
        },

        trafficMultiplier: {
            type: Number,
            required: true,
            min: 0.1
        },

        capturedAt: {
            type: Date,
            default: Date.now
        }
    });

module.exports =
    mongoose.model(
        "TrafficSnapshot",
        trafficSnapshotSchema
    );




// Example MongoDB document:

// {
//     "source": "A",
//     "destination": "B",
//     "trafficMultiplier": 1.4,
//     "capturedAt": "2026-09-11T07:00:00Z"
// }
 





