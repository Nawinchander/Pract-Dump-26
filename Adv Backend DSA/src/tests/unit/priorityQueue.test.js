const PriorityQueue =
    require("../../src/dsa/graph/PriorityQueue");

describe("PriorityQueue", () => {

    test("should return smallest priority first", () => {

        const queue =
            new PriorityQueue();

        queue.enqueue("A", 10);
        queue.enqueue("B", 2);
        queue.enqueue("C", 5);

        expect(
            queue.dequeue().item
        ).toBe("B");

        expect(
            queue.dequeue().item
        ).toBe("C");

        expect(
            queue.dequeue().item
        ).toBe("A");
    });

});



