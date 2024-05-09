const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // Write all logs error (and below) to `error.log`.
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        // Write to all logs with level `info` and below to `combined.log`
        new winston.transports.File({filename: 'combined.log'}),
    ],
});

// If we're not in production then also log to the `console`
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;