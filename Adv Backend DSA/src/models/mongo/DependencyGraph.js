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





//     MongoDB stores the flexible dependency graph.

// MySQL stores relational entities:

// projects
// tasks
// task_execution_history

// This gives you a legitimate reason for using both databases, rather than simply adding two databases for the sake of it.

