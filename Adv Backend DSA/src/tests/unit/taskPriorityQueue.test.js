
// Unit test — Max Heap

// Create:

// tests/unit/taskPriorityQueue.test.js


const TaskPriorityQueue =
    require(
        "../../src/dsa/dependency-scheduler/taskPriorityQueue"
    );

describe(
    "Task Priority Queue",
    () => {

        test(
            "should return highest priority first",
            () => {

                const queue =
                    new TaskPriorityQueue();

                queue.enqueue({
                    id: "A",
                    priority: 5
                });

                queue.enqueue({
                    id: "B",
                    priority: 10
                });

                queue.enqueue({
                    id: "C",
                    priority: 2
                });

                expect(
                    queue.dequeue().id
                ).toBe("B");

                expect(
                    queue.dequeue().id
                ).toBe("A");

                expect(
                    queue.dequeue().id
                ).toBe("C");
            }
        );

        test(
            "should return null when empty",
            () => {

                const queue =
                    new TaskPriorityQueue();

                expect(
                    queue.dequeue()
                ).toBeNull();
            }
        );
    }
);






