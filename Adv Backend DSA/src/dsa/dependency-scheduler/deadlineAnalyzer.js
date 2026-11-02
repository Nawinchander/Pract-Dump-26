function analyzeDeadlines(tasks) {
  if (!Array.isArray(tasks)) {
    throw new Error("tasks must be an array");
  }

  const ids = new Set();

  for (const task of tasks) {
    if (
      typeof task.id !== "string" ||
      !task.id.trim()
    ) {
      throw new Error("Every task must have a valid ID");
    }

    if (ids.has(task.id)) {
      throw new Error("Task IDs must be unique");
    }

    ids.add(task.id);

    if (
      !Number.isFinite(task.duration) ||
      task.duration <= 0
    ) {
      throw new Error("Duration must be a positive number");
    }

    if (
      !Number.isFinite(task.deadline) ||
      task.deadline < 0
    ) {
      throw new Error("Deadline must be non-negative");
    }
  }

  // Max heap: longest selected task is at the root.
  const maxHeap = [];

  function push(task) {
    maxHeap.push(task);

    let index = maxHeap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (maxHeap[parent].duration >= maxHeap[index].duration) {
        break;
      }

      [maxHeap[parent], maxHeap[index]] =
        [maxHeap[index], maxHeap[parent]];

      index = parent;
    }
  }

  function pop() {
    if (maxHeap.length === 0) return null;

    const longest = maxHeap[0];
    const last = maxHeap.pop();

    if (maxHeap.length > 0) {
      maxHeap[0] = last;
      let index = 0;

      while (true) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let largest = index;

        if (
          left < maxHeap.length &&
          maxHeap[left].duration > maxHeap[largest].duration
        ) {
          largest = left;
        }

        if (
          right < maxHeap.length &&
          maxHeap[right].duration > maxHeap[largest].duration
        ) {
          largest = right;
        }

        if (largest === index) break;

        [maxHeap[index], maxHeap[largest]] =
          [maxHeap[largest], maxHeap[index]];

        index = largest;
      }
    }

    return longest;
  }

  const sortedTasks = [...tasks].sort(
    (a, b) => a.deadline - b.deadline
g  );

  let totalDuration = 0;

  for (const task of sortedTasks) {
    push(task);
    totalDuration += task.duration;

    if (totalDuration > task.deadline) {
      const removed = pop();
      totalDuration -= removed.duration;
    }
  }

  // Selected tasks are those remaining in the heap.
  const selectedIds = new Set(maxHeap.map(task => task.id));

  // Return the chosen tasks in deadline order.
  const scheduledTasks = sortedTasks
    .filter(task => selectedIds.has(task.id))
    .map(task => ({
      id: task.id,
      duration: task.duration,
      deadline: task.deadline
    }));

  let elapsedTime = 0;

  const schedule = scheduledTasks.map(task => {
    const start = elapsedTime;
    elapsedTime += task.duration;

    return {
      ...task,
      start,
      finish: elapsedTime,
      meetsDeadline: elapsedTime <= task.deadline
    };
  });

  return {
    totalTasks: tasks.length,
    completedTasks: schedule.length,
    skippedTasks: tasks.length - schedule.length,
    totalDuration: elapsedTime,
    schedule,
    skippedTaskIds: tasks
      .filter(task => !selectedIds.has(task.id))
      .map(task => task.id)
  };
}

module.exports = { analyzeDeadlines };





