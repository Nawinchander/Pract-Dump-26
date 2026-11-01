const {
  minimumSpanningNetwork
} = require("../../src/dsa/route-optimizer/minimumSpanningNetwork");

describe("Minimum Spanning Network", () => {
  test("finds the minimum-cost network", () => {
    const result = minimumSpanningNetwork(
      ["A", "B", "C", "D"],
      [
        { source: "A", destination: "B", weight: 4 },
        { source: "A", destination: "C", weight: 3 },
        { source: "B", destination: "C", weight: 1 },
        { source: "B", destination: "D", weight: 2 },
        { source: "C", destination: "D", weight: 5 }
      ]
    );

    expect(result.totalCost).toBe(6);
    expect(result.edges).toHaveLength(3);
    expect(result.connected).toBe(true);
  });

  test("reports disconnected networks", () => {
    const result = minimumSpanningNetwork(
      ["A", "B", "C"],
      [{ source: "A", destination: "B", weight: 2 }]
    );

    expect(result.connected).toBe(false);
    expect(result.totalCost).toBe(2);
    expect(result.edges).toHaveLength(1);
  });

  test("rejects negative edge weights", () => {
    expect(() => minimumSpanningNetwork(
      ["A", "B"],
      [{ source: "A", destination: "B", weight: -1 }]
    )).toThrow("non-negative");
  });
});




