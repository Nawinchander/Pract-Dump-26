const TaskPriorityQueue =
    require(
        "../dsa/dependency-scheduler/taskPriorityQueue"
    );

async function prioritizeTasks(tasks) {

    const queue =
        new TaskPriorityQueue();

    for (const task of tasks) {

        queue.enqueue(task);
    }

    const orderedTasks = [];

    while (!queue.isEmpty()) {

        orderedTasks.push(
            queue.dequeue()
        );
    }

    return orderedTasks;
}


// // const criticalPath =
// //     require("../dsa/scheduler/criticalPath");

// // async function calculateSchedule(data) {

// //     const result = criticalPath(
// //         data.tasks,
// //         data.dependencies
// //     );

// //     return result;
// // }

// // module.exports = {
// //     calculateSchedule
// // };




// const findDependencyImpact =
//     require(
//         "../dsa/dependency-scheduler/dependencyAnalysis"
//     );

// async function analyzeDependencyImpact(data) {

//     return findDependencyImpact(
//         data.tasks,
//         data.dependencies,
//         data.taskId
//     );
// }

// module.exports = {
//     calculateSchedule,
//     analyzeDependencyImpact
// };



