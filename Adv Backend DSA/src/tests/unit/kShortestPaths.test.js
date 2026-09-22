const Graph =
    require(
        "../../src/dsa/route-optimizer/Graph"
    );

const findKShortestPaths =
    require(
        "../../src/dsa/route-optimizer/kShortestPaths"
    );

describe(
    "K Shortest Paths",
    () => {

        test(
            "should return alternative routes",
            () => {

                const graph =
                    new Graph();

                graph.addEdge(
                    "A",
                    "B",
                    4
                );

                graph.addEdge(
                    "A",
                    "C",
                    2
                );

                graph.addEdge(
                    "C",
                    "B",
                    3
                );

                graph.addEdge(
                    "B",
                    "D",
                    4
                );

                graph.addEdge(
                    "C",
                    "D",
                    8
                );

                const result =
                    findKShortestPaths(
                        graph,
                        "A",
                        "D",
                        3
                    );

                expect(
                    result.length
                ).toBeGreaterThan(0);

                expect(
                    result[0].distance
                ).toBe(8);
            }
        );

        test(
            "should return empty array when no route exists",
            () => {

                const graph =
                    new Graph();

                graph.addEdge(
                    "A",
                    "B",
                    5
                );

                const result =
                    findKShortestPaths(
                        graph,
                        "A",
                        "Z",
                        3
                    );

                expect(result)
                    .toEqual([]);
            }
        );
    }
);