const winston = require("winston");
require("winston-mongodb");
const { LOGDB_URI } = require("./server.config");

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} ${log.level}: ${log.message}`
      )
    ),
  })
);

allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOGDB_URI,
    collection: "logs",
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) =>
        `Problem.Repository: ${log.timestamp} ${log.level.toUpperCase()}: ${
          log.message
        }`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
