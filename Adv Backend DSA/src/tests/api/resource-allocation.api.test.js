const request = require("supertest");
const app = require("../../src/app");

describe("POST /api/scheduler/resource-allocation", () => {
  test("returns a schedule for multiple workers", async () => {
    const response = await request(app)
      .post("/api/scheduler/resource-allocation")
      .send({
        workerCount: 2,
        tasks: [
          { id: "A", duration: 4 },
          { id: "B", duration: 3 },
          { id: "C", duration: 2 }
        ]
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.assignments).toHaveLength(3);
    expect(response.body.data.totalCompletionTime).toBe(6);
  });


  test("rejects invalid worker count", async () => {
    const response = await request(app)
      .post("/api/scheduler/resource-allocation")
      .send({
        workerCount: 0,
        tasks: [{ id: "A", duration: 2 }]
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});


// As with the previous API, the invalid-input test expects the shared error middleware to return HTTP 400.



