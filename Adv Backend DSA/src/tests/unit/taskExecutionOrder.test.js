
const {
  getExecutionOrder
} = require("../../src/dsa/dependency-scheduler/taskExecutionOrder");

describe("Task execution order", () => {
  const tasks = [{ id: "A" }, { id: "B" }, { id: "C" }];

  test("respects dependency order", () => {
    const order = getExecutionOrder(tasks, [
      { from: "A", to: "B" },
      { from: "B", to: "C" }
    ]);

    expect(order).toEqual(["A", "B", "C"]);
  });

  test("detects dependency cycles", () => {
    expect(() => getExecutionOrder(tasks, [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "A" }
    ])).toThrow("Dependency cycle detected");
  });

  test("rejects unknown task references", () => {
    expect(() => getExecutionOrder(tasks, [
      { from: "A", to: "Z" }
    ])).toThrow("unknown task");
  });
});







