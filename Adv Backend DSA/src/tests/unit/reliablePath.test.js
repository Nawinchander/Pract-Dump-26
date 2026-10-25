
const {
  findReliablePath
} = require("../../src/dsa/route-optimizer/reliablePath");

describe("Reliable path", () => {
  const nodes = ["A", "B", "C", "D"];

  test("finds the route with highest reliability", () => {
    const result = findReliablePath(nodes, [
      { source: "A", destination: "B", probability: 0.9 },
      { source: "B", destination: "D", probability: 0.9 },
      { source: "A", destination: "C", probability: 0.95 },
      { source: "C", destination: "D", probability: 0.8 }
    ], "A", "D");

    expect(result.path).toEqual(["A", "B", "D"]);
    expect(result.reliability).toBeCloseTo(0.81);
    expect(result.reachable).toBe(true);
  });

  test("reports unreachable destinations", () => {
    const result = findReliablePath(
      ["A", "B", "C"],
      [{ source: "A", destination: "B", probability: 0.8 }],
      "A",
      "C"
    );

    expect(result.reachable).toBe(false);
    expect(result.path).toEqual([]);
  });

  test("rejects invalid probabilities", () => {
    expect(() => findReliablePath(
      ["A", "B"],
      [{ source: "A", destination: "B", probability: 1.5 }],
      "A",
      "B"
    )).toThrow("Probability");
  });
});





