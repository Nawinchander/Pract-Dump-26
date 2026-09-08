const {
  shortestPath
} = require("../services/path.service");

function findShortestPath(req, res) {
  try {
    const {
      graph,
      source,
      target
    } = req.body;

    // Validate input
    if (!graph || !source || !target) {
      return res.status(400).json({
        error: "graph, source and target are required"
      });
    }

    // Validate nodes
    if (!graph[source] || !graph[target]) {
      return res.status(400).json({
        error: "Source or target node does not exist"
      });
    }

    const result = shortestPath(
      graph,
      source,
      target
    );

    return res.json(result);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}

module.exports = {
  findShortestPath
};


