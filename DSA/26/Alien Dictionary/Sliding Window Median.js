// Sliding Window Median

// Given:

// nums = [1,3,-1,-3,5,3,6,7]
// k = 3

// Return:

// [1,-1,-1,3,5,6]

// This is a very strong heap problem.

// The idea:

//                     Window
//                        |
//              ┌─────────┴─────────┐
//              ↓                   ↓
//         Max Heap              Min Heap
//         left half             right half

// Maintain:

// size(left) ≈ size(right)


// Median:

// odd:
//     top(left)

// even:
//     (top(left) + top(right)) / 2


class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    push(value) {
        this.data.push(value);
        this.up(this.data.length - 1);
    }

    pop() {
        if (this.data.length === 1) {
            return this.data.pop();
        }

        const root = this.data[0];

        this.data[0] =
            this.data.pop();

        this.down(0);

        return root;
    }

    peek() {
        return this.data[0];
    }

    get size() {
        return this.data.length;
    }

    up(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (
                this.compare(
                    this.data[parent],
                    this.data[index]
                )
            ) break;

            [this.data[parent], this.data[index]] =
                [this.data[index], this.data[parent]];

            index = parent;
        }
    }

    down(index) {
        while (true) {
            let best = index;

            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (
                left < this.data.length &&
                !this.compare(
                    this.data[best],
                    this.data[left]
                )
            ) {
                best = left;
            }

            if (
                right < this.data.length &&
                !this.compare(
                    this.data[best],
                    this.data[right]
                )
            ) {
                best = right;
            }

            if (best === index) break;

            [this.data[index], this.data[best]] =
                [this.data[best], this.data[index]];

            index = best;
        }
    }
}









