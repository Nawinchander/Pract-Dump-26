//// Topological sorting


function topologicalSort(tasks, dependencies) {

    const graph = new Map();
    const indegree = new Map();

    for (const task of tasks) {
        graph.set(task.id, []);
        indegree.set(task.id, 0);
    }

    for (const dependency of dependencies) {

        graph
            .get(dependency.from)
            .push(dependency.to);

        indegree.set(
            dependency.to,
            indegree.get(dependency.to) + 1
        );
    }

    const queue = [];

    for (const [task, degree] of indegree) {
        if (degree === 0) {
            queue.push(task);
        }
    }

    const order = [];

    while (queue.length > 0) {

        const current = queue.shift();

        order.push(current);

        for (
            const next of graph.get(current)
        ) {

            indegree.set(
                next,
                indegree.get(next) - 1
            );

            if (indegree.get(next) === 0) {
                queue.push(next);
            }
        }
    }

    if (order.length !== tasks.length) {
        throw new Error(
            "Dependency cycle detected"
        );
    }

    return order;
}

module.exports = topologicalSort;






