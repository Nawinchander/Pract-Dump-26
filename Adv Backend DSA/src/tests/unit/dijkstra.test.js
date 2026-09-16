const Graph =
    require("../../src/dsa/graph/Graph");

const dijkstra =
    require("../../src/dsa/graph/dijkstra");

describe("Dijkstra", () => {

    test("should find shortest path", () => {

        const graph = new Graph();

        graph.addEdge("A", "B", 4);
        graph.addEdge("A", "C", 2);
        graph.addEdge("C", "B", 1);
        graph.addEdge("B", "D", 5);

        const result =
            dijkstra(
                graph,
                "A",
                "D"
            );

        expect(result.distance)
            .toBe(8);

        expect(result.path)
            .toEqual([
                "A",
                "C",
                "B",
                "D"
            ]);
    });

    test("should return null when destination unreachable", () => {

        const graph = new Graph();

        graph.addEdge("A", "B", 2);

        const result =
            dijkstra(
                graph,
                "A",
                "Z"
            );

        expect(result)
            .toBeNull();
    });

});



