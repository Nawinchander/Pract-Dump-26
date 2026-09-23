const request =
    require("supertest");

const app =
    require("../../src/app");

describe(
    "Alternative Routes API",
    () => {

        test(
            "should return alternative routes",
            async () => {

                const response =
                    await request(app)
                        .post(
                            "/api/routes/alternatives"
                        )
                        .send({

                            source: "A",

                            destination: "D",

                            k: 3,

                            edges: [
                                {
                                    source: "A",
                                    destination: "B",
                                    weight: 4
                                },
                                {
                                    source: "A",
                                    destination: "C",
                                    weight: 2
                                },
                                {
                                    source: "C",
                                    destination: "B",
                                    weight: 3
                                },
                                {
                                    source: "B",
                                    destination: "D",
                                    weight: 4
                                },
                                {
                                    source: "C",
                                    destination: "D",
                                    weight: 8
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
                    response.body.data.routes
                ).toBeDefined();

                expect(
                    Array.isArray(
                        response.body.data.routes
                    )
                ).toBe(true);
            }
        );
    }
); 



