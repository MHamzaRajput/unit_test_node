const levels = {
	emerg: 80,
	alert: 70,
	crit: 60,
	error: 50,
	warn: 40,
	notice: 30,
	info: 20,
	debug: 10,
};

module.exports = {
	level: process.env.PINO_LOG_LEVEL || 'warn',
	customLevels: levels,
	useOnlyCustomLevels: true,
	logFileName: "combined.log"
};