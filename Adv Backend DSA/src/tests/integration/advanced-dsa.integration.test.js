
const {
  analyzeConnectivity
} = require("../../src/dsa/route-optimizer/unionFind");

const {
  findReliablePath
} = require("../../src/dsa/route-optimizer/reliablePath");

const {
  getExecutionOrder
} = require("../../src/dsa/dependency-scheduler/taskExecutionOrder");

const {
  allocateResources
} = require("../../src/dsa/dependency-scheduler/resourceAllocator");

describe("Advanced DSA integration", () => {
  test("connectivity and reliable route work on the same network", () => {
    const nodes = ["A", "B", "C", "D"];

    const edges = [
      { source: "A", destination: "B", probability: 0.9 },
      { source: "B", destination: "D", probability: 0.9 },
      { source: "A", destination: "C", probability: 0.8 },
      { source: "C", destination: "D", probability: 0.8 }
    ];

    const connectivity = analyzeConnectivity(
      nodes,
      edges,
      "A",
      "D"
    );

    const route = findReliablePath(
      nodes,
      edges,
      "A",
      "D"
    );

    expect(connectivity.connected).toBe(true);
    expect(route.path).toEqual(["A", "B", "D"]);
    expect(route.reliability).toBeCloseTo(0.81);
  });

  test("execution order and resource allocation work together", () => {
    const tasks = [
      { id: "A", duration: 2 },
      { id: "B", duration: 3 },
      { id: "C", duration: 1 }
    ];

    const order = getExecutionOrder(
      tasks,
      [
        { from: "A", to: "B" },
        { from: "B", to: "C" }
      ]
    );

    expect(order).toEqual(["A", "B", "C"]);

    const schedule = allocateResources(
      order.map(id => tasks.find(task => task.id === id)),
      2
    );

    expect(schedule.assignments).toHaveLength(3);
    expect(schedule.totalCompletionTime).toBe(4);
  });
});



// These are algorithm-level integration tests; they do not yet exercise real MySQL or MongoDB connections. Your existing database tests and end-to-end workflow should continue to test those separately.z





