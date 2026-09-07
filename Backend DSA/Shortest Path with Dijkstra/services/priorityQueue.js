class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minimum = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.bubbleDown();

    return minimum;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][0] <= this.heap[index][0]) {
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
      let smallest = index;

      const left = index * 2 + 1;
      const right = index * 2 + 2;

      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
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

module.exports = MinHeap;


