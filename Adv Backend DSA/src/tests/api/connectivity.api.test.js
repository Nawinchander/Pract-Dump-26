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

