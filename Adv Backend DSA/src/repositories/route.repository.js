const pool = require("../config/mysql");

async function saveRouteSearch(data) {
    const [result] = await pool.execute(
        `
        INSERT INTO route_searches
        (user_id, source, destination, distance, duration)
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.userId,
            data.source,
            data.destination,
            data.distance,
            data.duration
        ]
    );

    return result.insertId;
}

module.exports = {
    saveRouteSearch
};



