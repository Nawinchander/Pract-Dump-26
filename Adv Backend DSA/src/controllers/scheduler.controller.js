/// 24


const {
    calculateSchedule
} = require("../services/scheduler.service");

async function schedule(req, res, next) {

    try {

        const result =
            await calculateSchedule(req.body);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    schedule
};



