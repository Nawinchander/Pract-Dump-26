const request = require("supertest");
const app = require("../../src/app");

describe("POST /api/routes/reliable-path", () => {
  test("returns the most reliable path", async () => {
    const response = await request(app)
      .post("/api/routes/reliable-path")
      .send({
        nodes: ["A", "B", "C", "D"],
        source: "A",
        destination: "D",
        edges: [
          { source: "A", destination: "B", probability: 0.9 },
          { source: "B", destination: "D", probability: 0.9 },
          { source: "A", destination: "C", probability: 0.95 },
          { source: "C", destination: "D", probability: 0.8 }
        ]
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.path).toEqual(["A", "B", "D"]);
    expect(response.body.data.reliability).toBeCloseTo(0.81);
  });

  test("rejects probabilities above one", async () => {
    const response = await request(app)
      .post("/api/routes/reliable-path")
      .send({
        nodes: ["A", "B"],
        source: "A",
        destination: "B",
        edges: [
          { source: "A", destination: "B", probability: 1.5 }
        ]
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});



