const pino = require('pino').default;
const fs = require('fs');
const rootPath = process.cwd();
const { logFileName, ...config } = require('./config');
const absolutePath = `${rootPath}/logs/${logFileName}`;

if (!fs.existsSync(`${rootPath}/logs`)) {
	fs.mkdirSync(`${rootPath}/logs`);
}

const streams = pino.multistream([
	{ stream: process.stdout },
	{ stream: pino.destination(absolutePath) },
]);

const logger = pino(config, streams);

logger.emerg = logger.emerg.bind(logger);
logger.alert = logger.alert.bind(logger);
logger.crit = logger.crit.bind(logger);
logger.error = logger.error.bind(logger);
logger.warn = logger.warn.bind(logger);
logger.notice = logger.notice.bind(logger);
logger.info = logger.info.bind(logger);
logger.debug = logger.debug.bind(logger);

module.exports = logger;





