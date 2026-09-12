class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(item, priority) {
        this.heap.push({
            item,
            priority
        });

        this.bubbleUp();
    }

    dequeue() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (
                this.heap[parent].priority <=
                this.heap[index].priority
            ) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left].priority <
                this.heap[smallest].priority
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].priority <
                this.heap[smallest].priority
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

module.exports = PriorityQueue;



