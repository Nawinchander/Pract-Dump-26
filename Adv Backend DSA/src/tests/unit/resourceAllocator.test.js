const {
  allocateResources
} = require("../../src/dsa/dependency-scheduler/resourceAllocator");

describe("Resource allocation", () => {
  test("assigns jobs to available workers", () => {
    const result = allocateResources([
      { id: "A", duration: 4 },
      { id: "B", duration: 3 },
      { id: "C", duration: 2 }
    ], 2);

    expect(result.assignments).toHaveLength(3);
    expect(result.assignments[0].workerId).toBe("W1");
    expect(result.assignments[1].workerId).toBe("W2");
    expect(result.totalCompletionTime).toBe(6);
  });

  test("rejects zero workers", () => {
    expect(() => allocateResources([
      { id: "A", duration: 2 }
    ], 0)).toThrow("workerCount");
  });

  test("rejects negative durations", () => {
    expect(() => allocateResources([
      { id: "A", duration: -2 }
    ], 1)).toThrow("duration");
  });
});


