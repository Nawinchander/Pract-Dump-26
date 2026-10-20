const {
  UnionFind,
  analyzeConnectivity
} = require("../../src/dsa/route-optimizer/unionFind");

describe("UnionFind", () => {
  test("merges connected nodes", () => {
    const dsu = new UnionFind(["A", "B", "C"]);
    dsu.union("A", "B");

    expect(dsu.find("A")).toBe(dsu.find("B"));
    expect(dsu.find("A")).not.toBe(dsu.find("C"));
  });

  test("identifies disconnected components", () => {
    const result = analyzeConnectivity(
      ["A", "B", "C", "D"],
      [{ source: "A", destination: "B" }],
      "A",
      "C"
    );

    expect(result.connected).toBe(false);
    expect(result.components).toHaveLength(3);
  });

  test("rejects an unknown node", () => {
    const dsu = new UnionFind(["A"]);

    expect(() => dsu.find("Z")).toThrow("Unknown node");
  });
});


