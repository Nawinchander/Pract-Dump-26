// Endpoint: POST /api/scheduler/resource-allocation

// This API assigns jobs to a fixed number of workers. Each worker becomes available when their current job finishes. The algorithm always assigns the next job to the worker who becomes available first.

// This is a useful greedy scheduling problem for logistics operations, background jobs, and distributed task processing.


class MinHeap {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    let index = this.items.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.items[parent].availableAt <=
          this.items[index].availableAt) break;

      [this.items[parent], this.items[index]] =
        [this.items[index], this.items[parent]];

      index = parent;
    }
  }

  pop() {
    if (this.items.length === 0) return null;

    const root = this.items[0];
    const last = this.items.pop();

    if (this.items.length > 0) {
      this.items[0] = last;
      let index = 0;

      while (true) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let smallest = index;

        if (
          left < this.items.length &&
          this.items[left].availableAt <
            this.items[smallest].availableAt
        ) {
          smallest = left;
        }

        if (
          right < this.items.length &&
          this.items[right].availableAt <
            this.items[smallest].availableAt
        ) {
          smallest = right;
        }

        if (smallest === index) break;

        [this.items[index], this.items[smallest]] =
          [this.items[smallest], this.items[index]];

        index = smallest;
      }
    }

    return root;
  }

  get size() {
    return this.items.length;
  }
}

function allocateResources(tasks, workerCount) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    throw new Error("tasks must be a non-empty array");
  }

  if (!Number.isInteger(workerCount) || workerCount < 1) {
    throw new Error("workerCount must be a positive integer");
  }

  const ids = tasks.map(task => task.id);

  if (ids.some(id => typeof id !== "string" || !id.trim())) {
    throw new Error("Every task must have a valid string id");
  }

  if (new Set(ids).size !== ids.length) {
    throw new Error("Task IDs must be unique");
  }

  for (const task of tasks) {
    if (!Number.isFinite(task.duration) || task.duration < 0) {
      throw new Error("Task duration must be a non-negative number");
    }
  }

  const workers = new MinHeap();

  for (let i = 1; i <= workerCount; i++) {
    workers.push({
      workerId: `W${i}`,
      availableAt: 0
    });
  }

  const assignments = [];

  for (const task of tasks) {
    const worker = workers.pop();
    const start = worker.availableAt;
    const finish = start + task.duration;

    assignments.push({
      taskId: task.id,
      workerId: worker.workerId,
      start,
      finish
    });

    workers.push({
      workerId: worker.workerId,
      availableAt: finish
    });
  }

  return {
    assignments,
    totalCompletionTime: Math.max(
      ...assignments.map(item => item.finish)
    )
  };
}

module.exports = { MinHeap, allocateResources };


/// - next part

Service: src/services/scheduler.service.js
Add this function to your existing service:









