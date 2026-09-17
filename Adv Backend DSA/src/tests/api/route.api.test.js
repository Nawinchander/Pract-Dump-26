
const request =
    require("supertest");

const app =
    require("../../src/app");

describe("Route API", () => {

    test(
        "POST /api/routes/shortest",
        async () => {

            const response =
                await request(app)
                    .post(
                        "/api/routes/shortest"
                    )
                    .send({
                        source: "A",
                        destination: "D",

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
                                weight: 1
                            },
                            {
                                source: "B",
                                destination: "D",
                                weight: 5
                            }
                        ]
                    });

            expect(response.statusCode)
                .toBe(200);

            expect(
                response.body.success
            ).toBe(true);

            expect(
                response.body.data.distance
            ).toBe(8);
        }
    );

});




//  npm run test:api

//  35 api error testing

/* 

fuckk off you alll 

*/



test("should reject invalid request", async () => {

    const response =
        await request(app)
            .post("/api/routes/shortest")
            .send({});

    expect(
        response.statusCode
    ).toBe(500);
});



// Later, after adding Zod validation, this should become:

// 400 Bad Request

// rather than:

// 500 Internal Server Error

// That's an important backend improvement.






