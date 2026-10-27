// If you do not already have shared error handling, use this starter version:


function errorMiddleware(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  const clientError =
    err.message.includes("Unknown") ||
    err.message.includes("unknown") ||
    err.message.includes("unique") ||
    err.message.includes("cycle") ||
    err.message.includes("must be") ||
    err.message.includes("Probability") ||
    err.message.includes("duration") ||
    err.message.includes("workerCount") ||
    err.message.includes("non-empty") ||
    err.message.includes("Dependency");

  const statusCode = clientError ? 400 : 500;

  if (statusCode === 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode === 400
      ? err.message
      : "Internal server error"
  });
}

module.exports = errorMiddleware;


// This is a simple development-oriented example. For production, use explicit validation errors or custom error classes instead of classifying errors by their message text.




