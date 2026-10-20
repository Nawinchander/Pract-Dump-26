const request = require("supertest");
const app = require("../../src/app");

describe("POST /api/scheduler/execution-order", () => {
  test("returns a valid task order", async () => {
    const response = await request(app)
      .post("/api/scheduler/execution-order")
      .send({
        tasks: [{ id: "A" }, { id: "B" }, { id: "C" }],
        dependencies: [
          { from: "A", to: "B" },
          { from: "B", to: "C" }
        ]
      });

    expect(response.status).toBe(200);
    expect(response.body.data.executionOrder)
      .toEqual(["A", "B", "C"]);
  });

  test("returns an error for a dependency cycle", async () => {
    const response = await request(app)
      .post("/api/scheduler/execution-order")
      .send({
        tasks: [{ id: "A" }, { id: "B" }],
        dependencies: [
          { from: "A", to: "B" },
          { from: "B", to: "A" }
        ]
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});




// This second test assumes your shared error middleware maps algorithm/input errors to HTTP 400 and responds with { "success": false, "message": "..." }. If your middleware uses a different error format, adjust the assertions accordingly.





