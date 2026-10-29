const { minimumSpanningNetwork } = require("../dsa/route-optimizer/minimumSpanningNetwork");


async function buildMinimumSpanningNetwork(data) {
  return minimumSpanningNetwork(data.nodes, data.edges);
}


// Append buildMinimumSpanningNetwork to your existing module.exports object. Do not replace your other service exports.



