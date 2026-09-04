// Binary Trie

// Each node has:

{
    zero: null,
    one: null
}

// Numbers are inserted bit by bit.

// For example:

// 25 = 11001

// becomes:

// root
//  |
//  1
//  |
//  1
//  |
//  0
//  |
//  0
//  |
//  1


class TrieNode {
    constructor() {
        this.zero = null;
        this.one = null;
    }
}

class BinaryTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(num) {
        let node = this.root;

        for (let bit = 30; bit >= 0; bit--) {
            const currentBit = (num >> bit) & 1;

            if (currentBit === 0) {
                if (!node.zero) {
                    node.zero = new TrieNode();
                }

                node = node.zero;
            } else {
                if (!node.one) {
                    node.one = new TrieNode();
                }

                node = node.one;
            }
        }
    }

    getMaxXor(num) {
        let node = this.root;
        let result = 0;

        for (let bit = 30; bit >= 0; bit--) {
            const currentBit = (num >> bit) & 1;

            const oppositeBit =
                currentBit ^ 1;

            if (
                oppositeBit === 0 &&
                node.zero
            ) {
                result |= (1 << bit);
                node = node.zero;
            } else if (
                oppositeBit === 1 &&
                node.one
            ) {
                result |= (1 << bit);
                node = node.one;
            } else {
                node =
                    currentBit === 0
                        ? node.zero
                        : node.one;
            }
        }

        return result;
    }
}

function findMaximumXOR(nums) {
    const trie = new BinaryTrie();

    for (const num of nums) {
        trie.insert(num);
    }

    let answer = 0;

    for (const num of nums) {
        answer = Math.max(
            answer,
            trie.getMaxXor(num)
        );
    }

    return answer;
}






