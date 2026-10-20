// /// 24

const schedulerService =
  require("../services/scheduler.service");

async function executionOrder(req, res, next) {
  try {
    const data =
      await schedulerService.calculateExecutionOrder(req.body);

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    next(error);
  }
}

// Add executionOrder to your existing controller exports.
module.exports = {
  // Preserve existing exports here.
  executionOrder
};

const {
    prioritizeTasks
} = require("../services/scheduler.service");

async function taskPriority(
    req,
    res,
    next
) {
    try {

        const result =
            await prioritizeTasks(
                req.body.tasks
            );

        res.status(200).json({
            success: true,
            data: {
                tasks: result
            }
        });

    } catch (error) {
        next(error);
    }
}

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



