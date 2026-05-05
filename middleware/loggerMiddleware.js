const Log = require("../logger");

const loggerMiddleware = async (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    Log(
      "backend",
      "info",
      "http",
      `${req.method} ${req.url} ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};

module.exports = loggerMiddleware;