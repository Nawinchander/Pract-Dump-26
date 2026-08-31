// N-Queens

// For:

// n = 4

// Solutions:

// .Q..
// ...Q
// Q...
// ..Q.
// Critical optimization

// Don't check every previous queen.

// Use sets:

// columns
// row + col
// row - col

// Because:

// same column
// same diagonal


function solveNQueens(n) {
    const result = [];

    const board = Array.from(
        { length: n },
        () => new Array(n).fill(".")
    );

    const columns = new Set();
    const diagonals1 = new Set();
    const diagonals2 = new Set();

    function backtrack(row) {
        if (row === n) {
            result.push(
                board.map(row => row.join(""))
            );

            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col;
            const d2 = row + col;

            if (
                columns.has(col) ||
                diagonals1.has(d1) ||
                diagonals2.has(d2)
            ) {
                continue;
            }

            board[row][col] = "Q";

            columns.add(col);
            diagonals1.add(d1);
            diagonals2.add(d2);

            backtrack(row + 1);

            board[row][col] = ".";

            columns.delete(col);
            diagonals1.delete(d1);
            diagonals2.delete(d2);
        }
    }

    backtrack(0);

    return result;
}










