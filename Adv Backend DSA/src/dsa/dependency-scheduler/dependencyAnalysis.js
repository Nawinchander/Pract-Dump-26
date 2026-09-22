function findDependencyImpact(
    tasks,
    dependencies,
    taskId
) {
    const graph = new Map();

    for (const task of tasks) {
        graph.set(task.id, []);
    }

    for (const dependency of dependencies) {

        if (!graph.has(dependency.from)) {
            graph.set(
                dependency.from,
                []
            );
        }

        graph
            .get(dependency.from)
            .push(dependency.to);
    }

    if (!graph.has(taskId)) {
        throw new Error(
            "Task not found"
        );
    }

    const visited = new Set();

    const queue = [taskId];

    visited.add(taskId);

    const affectedTasks = [];

    while (queue.length > 0) {

        const current =
            queue.shift();

        const children =
            graph.get(current) || [];

        for (const child of children) {

            if (visited.has(child)) {
                continue;
            }

            visited.add(child);

            affectedTasks.push(child);

            queue.push(child);
        }
    }

    return {
        taskId,
        affectedTasks,
        affectedCount:
            affectedTasks.length
    };
}

module.exports =
    findDependencyImpact;



//     This is essentially a BFS traversal over a directed graph.

// Complexity:

// Time:  O(V + E)

// Space: O(V)



