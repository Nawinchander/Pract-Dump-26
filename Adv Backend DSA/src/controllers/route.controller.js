const {
    findShortestRoute
} = require("../services/route.service");

async function shortestRoute(req, res, next) {
    try {

        const result =
            await findShortestRoute(req.body);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    shortestRoute
};




