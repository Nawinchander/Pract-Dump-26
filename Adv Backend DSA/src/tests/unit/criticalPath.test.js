


const criticalPath =
    require("../../src/dsa/scheduler/criticalPath");

describe("Critical Path", () => {

    test("should calculate critical path", () => {

        const tasks = [
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
        ];

        const dependencies = [
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
        ];

        const result =
            criticalPath(
                tasks,
                dependencies
            );

        expect(
            result.completionTime
        ).toBe(12);

        expect(
            result.criticalPath
        ).toEqual([
            "A",
            "B",
            "D"
        ]);
    });

});



