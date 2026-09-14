const criticalPath =
    require("../dsa/scheduler/criticalPath");

async function calculateSchedule(data) {

    const result = criticalPath(
        data.tasks,
        data.dependencies
    );

    return result;
}

module.exports = {
    calculateSchedule
};



