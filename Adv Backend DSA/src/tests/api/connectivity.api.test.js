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




/// outer.post("/execution-order", executionOrder);


// The route assumes the scheduler router is mounted at /api/scheduler.

// Request and response

// {
//   "tasks": [
//     { "id": "A" },
//     { "id": "B" },
//     { "id": "C" },
//     { "id": "D" }
//   ],
//   "dependencies": [
//     { "from": "A", "to": "B" },
//     { "from": "A", "to": "C" },
//     { "from": "B", "to": "D" },
//     { "from": "C", "to": "D" }
//   ]
// }



// Possible response:
// {
//   "success": true,
//   "data": {
//     "executionOrder": ["A", "B", "C", "D"]
//   }
// }


// The order of B and C can vary. Both must execute before D.

// Complexity: \(O(V+E)\) time and \(O(V+E)\) space.



