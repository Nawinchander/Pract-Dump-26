// Network Delay Time

// Given weighted directed edges:

// u → v

// Find the time required for a signal from node k to reach every node.

// This is classic:

// Shortest Path
// +
// Positive weights
// =
// Dijkstra



function networkDelayTime(times, n, k) {
    const graph = Array.from(
        { length: n + 1 },
        () => []
    );

    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    const dist = new Array(n + 1)
        .fill(Infinity);

    dist[k] = 0;

    const heap = new Heap(
        (a, b) => a[0] <= b[0]
    );

    heap.push([0, k]);

    while (heap.size) {
        const [distance, node] = heap.pop();

        if (distance > dist[node]) {
            continue;
        }

        for (const [next, weight] of graph[node]) {
            const newDistance =
                distance + weight;

            if (newDistance < dist[next]) {
                dist[next] = newDistance;

                heap.push([
                    newDistance,
                    next
                ]);
            }
        }
    }

    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) {
            return -1;
        }

        answer = Math.max(
            answer,
            dist[i]
        );
    }

    return answer;
}








