/// tests/api/dependency-impact.api.test.js


const request =
    require("supertest");

const app =
    require("../../src/app");

describe(
    "Dependency Impact API",
    () => {

        test(
            "should return affected tasks",
            async () => {

                const response =
                    await request(app)
                        .post(
                            "/api/scheduler/dependency-impact"
                        )
                        .send({

                            taskId: "A",

                            tasks: [
                                {
                                    id: "A",
                                    duration: 3
                                },
                                {
                                    id: "B",
                                    duration: 5
                                },
                                {
                                    id: "C",
                                    duration: 2
                                },
                                {
                                    id: "D",
                                    duration: 4
                                }
                            ],

                            dependencies: [
                                {
                                    from: "A",
                                    to: "B"
                                },
                                {
                                    from: "A",
                                    to: "C"
                                },
                                {
                                    from: "B",
                                    to: "D"
                                },
                                {
                                    from: "C",
                                    to: "D"
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
                    response.body.data
                        .affectedCount
                ).toBe(3);
            }
        );
    }
);




