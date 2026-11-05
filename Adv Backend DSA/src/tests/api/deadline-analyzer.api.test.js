/// As with the other APIs, the invalid-input test assumes your error middleware returns HTTP 400 for validation errors.


const request = require("supertest");
const app = require("../../src/app");

describe("POST /api/scheduler/deadline-analysis", () => {
  test("returns the deadline-optimized schedule", async () => {
    const response = await request(app)
      .post("/api/scheduler/deadline-analysis")
      .send({
        tasks: [
          { id: "A", duration: 4, deadline: 5 },
          { id: "B", duration: 2, deadline: 3 },
          { id: "C", duration: 3, deadline: 6 },
          { id: "D", duration: 1, deadline: 2 }
        ]
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.completedTasks).toBe(3);
    expect(response.body.data.skippedTasks).toBe(1);

    expect(response.body.data.schedule.every(
      task => task.meetsDeadline
    )).toBe(true);
  });

  test("rejects invalid task durations", async () => {
    const response = await request(app)
      .post("/api/scheduler/deadline-analysis")
      .send({
        tasks: [
          { id: "A", duration: -2, deadline: 5 }
        ]
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});






