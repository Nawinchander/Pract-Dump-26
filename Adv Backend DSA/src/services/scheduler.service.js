// const criticalPath =
//     require("../dsa/scheduler/criticalPath");

// async function calculateSchedule(data) {

//     const result = criticalPath(
//         data.tasks,
//         data.dependencies
//     );

//     return result;
// }

// module.exports = {
//     calculateSchedule
// };




const findDependencyImpact =
    require(
        "../dsa/dependency-scheduler/dependencyAnalysis"
    );

async function analyzeDependencyImpact(data) {

    return findDependencyImpact(
        data.tasks,
        data.dependencies,
        data.taskId
    );
}

module.exports = {
    calculateSchedule,
    analyzeDependencyImpact
};



