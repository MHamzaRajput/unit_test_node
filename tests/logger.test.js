

const logger = require("../logger");

describe("addToInventory", () => {

	test("logging new items single", () => {

		jest.spyOn(logger, "emerg");
		const logPayload = { name: "mhamzarajput", occupation: "programmer" };
		const logMessage = "this is an emergency log";
		logger.emerg(logPayload, logMessage);

		expect(logger.emerg.mock.calls).toHaveLength(1);
		const [payload, message] = logger.emerg.mock.calls[0];

		expect(payload).toEqual(logPayload);
		expect(message).toEqual(logMessage);

	});
});