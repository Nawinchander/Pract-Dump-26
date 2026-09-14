const mongoose = require("mongoose");

const dependencyGraphSchema =
    new mongoose.Schema({
        projectId: {
            type: Number,
            required: true
        },

        tasks: [
            {
                id: String,
                name: String,
                duration: Number
            }
        ],

        dependencies: [
            {
                from: String,
                to: String
            }
        ],

        createdAt: {
            type: Date,
            default: Date.now
        }
    });

module.exports =
    mongoose.model(
        "DependencyGraph",
        dependencyGraphSchema
    );



    