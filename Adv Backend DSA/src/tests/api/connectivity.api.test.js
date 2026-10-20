const request = require("supertest");
const app = require("../../src/app");

describe("POST /api/routes/connectivity", () => {
  test("returns connectivity information", async () => {
    const response = await request(app)
      .post("/api/routes/connectivity")
      .send({
        nodes: ["A", "B", "C"],
        edges: [
          { source: "A", destination: "B" }
        ],
        source: "A",
        destination: "B"
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.connected).toBe(true);
  });
});




// 4. API 8 — Task Execution Order using Kahn’s Algorithm
// Endpoint: POST /api/scheduler/execution-order

// This API determines a valid order in which tasks can execute based on their dependencies. If tasks contain a dependency cycle, the API reports the cycle rather than returning an invalid order.