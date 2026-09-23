const findDependencyImpact =
    require(
        "../../src/dsa/dependency-scheduler/dependencyAnalysis"
    );

describe(
    "Dependency Impact Analysis",
    () => {

        test(
            "should find all affected tasks",
            () => {

                const tasks = [
                    { id: "A" },
                    { id: "B" },
                    { id: "C" },
                    { id: "D" },
                    { id: "E" }
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
                    },
                    {
                        from: "D",
                        to: "E"
                    }
                ];

                const result =
                    findDependencyImpact(
                        tasks,
                        dependencies,
                        "A"
                    );

                expect(
                    result.affectedCount
                ).toBe(4);

                expect(
                    result.affectedTasks
                ).toEqual(
                    expect.arrayContaining([
                        "B",
                        "C",
                        "D",
                        "E"
                    ])
                );
            }
        );

        test(
            "should return no affected tasks",
            () => {

                const tasks = [
                    { id: "A" },
                    { id: "B" }
                ];

                const dependencies = [
                    {
                        from: "A",
                        to: "B"
                    }
                ];

                const result =
                    findDependencyImpact(
                        tasks,
                        dependencies,
                        "B"
                    );

                expect(
                    result.affectedCount
                ).toBe(0);
            }
        );

        test(
            "should throw for unknown task",
            () => {

                expect(() => {

                    findDependencyImpact(
                        [],
                        [],
                        "UNKNOWN"
                    );

                }).toThrow(
                    "Task not found"
                );
            }
        );
    }
);





