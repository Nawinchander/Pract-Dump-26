

const topologicalSort =
    require("../../src/dsa/scheduler/topologicalSort");

describe("Topological Sort", () => {

    test("should generate valid order", () => {

        const tasks = [
            { id: "A" },
            { id: "B" },
            { id: "C" }
        ];

        const dependencies = [
            {
                from: "A",
                to: "B"
            },
            {
                from: "B",
                to: "C"
            }
        ];

        const result =
            topologicalSort(
                tasks,
                dependencies
            );

        expect(result)
            .toEqual([
                "A",
                "B",
                "C"
            ]);
    });

    test("should detect cycle", () => {

        const tasks = [
            { id: "A" },
            { id: "B" }
        ];

        const dependencies = [
            {
                from: "A",
                to: "B"
            },
            {
                from: "B",
                to: "A"
            }
        ];

        expect(() => {
            topologicalSort(
                tasks,
                dependencies
            );
        }).toThrow(
            "Dependency cycle detected"
        );
    });

});



