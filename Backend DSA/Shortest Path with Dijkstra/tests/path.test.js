const request = require("supertest");

const app = require("../app");

describe("Dijkstra API", () => {

  test("should find shortest path", async () => {

    const graph = {
      A: {
        B: 4,
        C: 2
      },

      B: {
        A: 4,
        C: 1,
        D: 5
      },

      C: {
        A: 2,
        B: 1,
        D: 8
      },

      D: {
        B: 5,
        C: 8
      }
    };

    const response = await request(app)
      .post("/api/dsa/shortest-path")
      .send({
        graph,
        source: "A",
        target: "D"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body.distance)
      .toBe(8);

    expect(response.body.path)
      .toEqual(["A", "C", "B", "D"]);
  });

  test("should return empty path when no route exists", async () => {

    const graph = {
      A: {
        B: 2
      },

      B: {
        A: 2
      },

      C: {}
    };

    const response = await request(app)
      .post("/api/dsa/shortest-path")
      .send({
        graph,
        source: "A",
        target: "C"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body.distance)
      .toBeNull();

    expect(response.body.path)
      .toEqual([]);
  });

  test("should reject missing input", async () => {

    const response = await request(app)
      .post("/api/dsa/shortest-path")
      .send({});

    expect(response.statusCode).toBe(400);
  });

});






// Run:

// npm test

// You should get something similar to:

// PASS tests/path.test.js

// ✓ should find shortest path
// ✓ should return empty path when no route exists
// ✓ should reject missing input





