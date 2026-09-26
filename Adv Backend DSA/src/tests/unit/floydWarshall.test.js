const floydWarshall =
    require(
        "../../src/dsa/route-optimizer/floydWarshall"
    );

describe(
    "Floyd-Warshall",
    () => {

        test(
            "should calculate all-pairs shortest paths",
            () => {

                const nodes = [
                    "A",
                    "B",
                    "C",
                    "D"
                ];

                const edges = [
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
                ];

                const result =
                    floydWarshall(
                        nodes,
                        edges
                    );

                expect(
                    result
                        .get("A")
                        .get("C")
                ).toBe(8);

                expect(
                    result
                        .get("A")
                        .get("D")
                ).toBe(10);
            }
        );

        test(
            "should detect negative cycle",
            () => {

                const nodes = [
                    "A",
                    "B"
                ];

                const edges = [
                    {
                        source: "A",
                        destination: "B",
                        weight: -5
                    },
                    {
                        source: "B",
                        destination: "A",
                        weight: -5
                    }
                ];

                expect(() => {

                    floydWarshall(
                        nodes,
                        edges
                    );

                }).toThrow(
                    "Negative cycle detected"
                );
            }
        );
    }
);



