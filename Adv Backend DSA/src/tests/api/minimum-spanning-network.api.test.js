const request = require("supertest");
const app = require("../../src/app");

describe("POST /api/routes/minimum-spanning-network", () => {
  test("returns the minimum spanning network", async () => {
    const response = await request(app)
      .post("/api/routes/minimum-spanning-network")
      .send({
        nodes: ["A", "B", "C"],
        edges: [
          { source: "A", destination: "B", weight: 4 },
          { source: "A", destination: "C", weight: 3 },
          { source: "B", destination: "C", weight: 1 }
        ]
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.totalCost).toBe(4);
    expect(response.body.data.connected).toBe(true);
  });

  test("returns an error for invalid weights", async () => {
    const response = await request(app)
      .post("/api/routes/minimum-spanning-network")
      .send({
        nodes: ["A", "B"],
        edges: [
          { source: "A", destination: "B", weight: -5 }
        ]
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});





