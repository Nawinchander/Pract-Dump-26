// /// 24

const {
    analyzeDependencyImpact
} = require("../services/scheduler.service");

async function dependencyImpact(
    req,
    res,
    next
) {
    try {

        const result =
            await analyzeDependencyImpact(
                req.body
            );

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    schedule,
    dependencyImpact
};


// const {
//     calculateSchedule
// } = require("../services/scheduler.service");

// async function schedule(req, res, next) {

//     try {

//         const result =
//             await calculateSchedule(req.body);

//         res.status(200).json({
//             success: true,
//             data: result
//         });

//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = {
//     schedule
// };



