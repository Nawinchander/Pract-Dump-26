function getExecutionOrder(tasks, dependencies) {
  if (!Array.isArray(tasks) || !Array.isArray(dependencies)) {
    throw new Error("tasks and dependencies must be arrays");
  }

  const ids = tasks.map(task => task.id);

  if (new Set(ids).size !== ids.length) {
    throw new Error("Task IDs must be unique");
  }

  const taskSet = new Set(ids);
  const indegree = new Map(ids.map(id => [id, 0]));
  const adjacency = new Map(ids.map(id => [id, []]));

  for (const { from, to } of dependencies) {
    if (!taskSet.has(from) || !taskSet.has(to)) {
      throw new Error("Dependency references an unknown task");
    }

    adjacency.get(from).push(to);
    indegree.set(to, indegree.get(to) + 1);
  }

  const queue = ids.filter(id => indegree.get(id) === 0);
  const order = [];

  for (let index = 0; index < queue.length; index++) {
    const current = queue[index];
    order.push(current);

    for (const next of adjacency.get(current)) {
      indegree.set(next, indegree.get(next) - 1);

      if (indegree.get(next) === 0) {
        queue.push(next);
      }
    }
  }

  if (order.length !== ids.length) {
    throw new Error("Dependency cycle detected");
  }

  return order;
}

module.exports = { getExecutionOrder };



