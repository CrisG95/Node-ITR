const { StatusCodes } = require('http-status-codes');

const getTask = async (req, res) => res.status(StatusCodes.OK).json(req.task);

module.exports = getTask;