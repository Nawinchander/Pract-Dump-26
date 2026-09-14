


function criticalPath(tasks, dependencies) {

    const graph = new Map();

    const duration = new Map();

    for (const task of tasks) {
        graph.set(task.id, []);
        duration.set(task.id, task.duration);
    }

    const indegree = new Map();

    for (const task of tasks) {
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

    const earliest = new Map();
    const previous = new Map();

    for (const task of tasks) {
        earliest.set(task.id, duration.get(task.id));
        previous.set(task.id, null);
    }

    let processed = 0;

    while (queue.length) {

        const current = queue.shift();

        processed++;

        for (const next of graph.get(current)) {

            const candidate =
                earliest.get(current) +
                duration.get(next);

            if (
                candidate >
                earliest.get(next)
            ) {

                earliest.set(
                    next,
                    candidate
                );

                previous.set(
                    next,
                    current
                );
            }

            indegree.set(
                next,
                indegree.get(next) - 1
            );

            if (indegree.get(next) === 0) {
                queue.push(next);
            }
        }
    }

    if (processed !== tasks.length) {
        throw new Error(
            "Circular dependency detected"
        );
    }

    let lastTask = null;
    let maxDuration = 0;

    for (const [task, time] of earliest) {

        if (time > maxDuration) {
            maxDuration = time;
            lastTask = task;
        }
    }

    const path = [];

    while (lastTask !== null) {

        path.unshift(lastTask);

        lastTask = previous.get(lastTask);
    }

    return {
        completionTime: maxDuration,
        criticalPath: path
    };
}

module.exports = criticalPath;



