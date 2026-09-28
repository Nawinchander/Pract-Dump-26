const {
    prioritizeTasks
} = require(
    "../../src/services/scheduler.service"
);

describe(
    "Task Priority Integration",
    () => {

        test(
            "should prioritize tasks",
            async () => {

                const result =
                    await prioritizeTasks([
                        {
                            id: "A",
                            priority: 3
                        },
                        {
                            id: "B",
                            priority: 9
                        },
                        {
                            id: "C",
                            priority: 5
                        }
                    ]);

                expect(
                    result.map(
                        task => task.id
                    )
                ).toEqual([
                    "B",
                    "C",
                    "A"
                ]);
            }
        );
    }
);




