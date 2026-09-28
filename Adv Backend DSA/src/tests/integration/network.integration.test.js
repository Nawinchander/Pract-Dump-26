const {
    analyzeNetwork
} = require(
    "../../src/services/route.service"
);

describe(
    "Network Analysis Integration",
    () => {

        test(
            "should calculate network matrix",
            async () => {

                const result =
                    await analyzeNetwork({

                        nodes: [
                            "A",
                            "B",
                            "C"
                        ],

                        edges: [
                            {
                                source: "A",
                                destination: "B",
                                weight: 4
                            },
                            {
                                source: "B",
                                destination: "C",
                                weight: 3
                            }
                        ]
                    });

                expect(
                    result.matrix.A.C
                ).toBe(7);
            }
        );
    }
);



