class TaskPriorityQueue {

    constructor() {
        this.heap = [];
    }

    enqueue(task) {

        this.heap.push(task);

        this.bubbleUp();
    }

    dequeue() {

        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const highestPriority =
            this.heap[0];

        this.heap[0] =
            this.heap.pop();

        this.bubbleDown();

        return highestPriority;
    }

    bubbleUp() {

        let index =
            this.heap.length - 1;

        while (index > 0) {

            const parent =
                Math.floor(
                    (index - 1) / 2
                );

            if (
                this.heap[parent].priority >=
                this.heap[index].priority
            ) {
                break;
            }

            [
                this.heap[parent],
                this.heap[index]
            ] = [
                this.heap[index],
                this.heap[parent]
            ];

            index = parent;
        }
    }

    bubbleDown() {

        let index = 0;

        while (true) {

            const left =
                index * 2 + 1;

            const right =
                index * 2 + 2;

            let largest = index;

            if (
                left < this.heap.length &&
                this.heap[left].priority >
                this.heap[largest].priority
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].priority >
                this.heap[largest].priority
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }

            [
                this.heap[index],
                this.heap[largest]
            ] = [
                this.heap[largest],
                this.heap[index]
            ];

            index = largest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

module.exports =
    TaskPriorityQueue;



    