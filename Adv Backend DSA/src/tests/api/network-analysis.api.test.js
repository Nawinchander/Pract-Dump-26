const request =
    require("supertest");

const app =
    require("../../src/app");

describe(
    "Network Analysis API",
    () => {

        test(
            "should return shortest distances",
            async () => {

                const response =
                    await request(app)
                        .post(
                            "/api/routes/network-analysis"
                        )
                        .send({

                            nodes: [
                                "A",
                                "B",
                                "C",
                                "D"
                            ],

                            edges: [
                                {
                                    source: "A",
                                    destination: "B",
                                    weight: 5
                                },
                                {
                                    source: "A",
                                    destination: "C",
                                    weight: 10
                                },
                                {
                                    source: "B",
                                    destination: "C",
                                    weight: 3
                                },
                                {
                                    source: "C",
                                    destination: "D",
                                    weight: 2
                                }
                            ]
                        });

                expect(
                    response.statusCode
                ).toBe(200);

                expect(
                    response.body.success
                ).toBe(true);

                expect(
                    response.body.data.matrix
                        .A.C
                ).toBe(8);

                expect(
                    response.body.data.matrix
                        .A.D
                ).toBe(10);
            }
        );
    }
);



// 9 api test - 6 Task Priority Planner


// API 6 — Task Priority Planner

// Now let's improve the Dependency Scheduler.

// Suppose your system has 10 tasks.

// Each task has:

// priority
// duration
// deadline
// dependency count

// The API determines which task should be handled first.

// We'll use a Max Heap.

// The highest priority task is returned first.





