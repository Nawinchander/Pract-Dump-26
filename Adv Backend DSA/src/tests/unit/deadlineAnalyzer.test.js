const {
  analyzeDeadlines
} = require("../../src/dsa/dependency-scheduler/deadlineAnalyzer");

describe("Task Deadline Analyzer", () => {
  test("maximizes the number of tasks completed on time", () => {
    const result = analyzeDeadlines([
      { id: "A", duration: 4, deadline: 5 },
      { id: "B", duration: 2, deadline: 3 },
      { id: "C", duration: 3, deadline: 6 },
      { id: "D", duration: 1, deadline: 2 }
    ]);

    expect(result.completedTasks).toBe(3);
    expect(result.skippedTasks).toBe(1);
    expect(result.totalDuration).toBe(6);

    expect(result.schedule.every(
      task => task.meetsDeadline
    )).toBe(true);
  });

  test("handles an empty task list", () => {
    const result = analyzeDeadlines([]);

    expect(result.completedTasks).toBe(0);
    expect(result.skippedTasks).toBe(0);
    expect(result.schedule).toEqual([]);
  });

  test("rejects duplicate task IDs", () => {
    expect(() => analyzeDeadlines([
      { id: "A", duration: 2, deadline: 3 },
      { id: "A", duration: 1, deadline: 4 }
    ])).toThrow("unique");
  });

  test("rejects invalid durations", () => {
    expect(() => analyzeDeadlines([
      { id: "A", duration: -1, deadline: 3 }
    ])).toThrow("positive");
  });
});





