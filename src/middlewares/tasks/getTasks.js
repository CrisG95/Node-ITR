const { StatusCodes } = require('http-status-codes');

const taskService = require('../../services/taskService');

const getTasks = async (req, res) => {

	const {
		status, name, description, completed, limit, page
	} = req.query;

    const size = limit ? Number(limit) : 10;
    const from = page ? (Number((page -1) * size)) : 0;

	const query = {
		...status && { filter: { completed: status } },
		...description && { sort: { description } },
		...completed && { sort: { completed } },
		...name && { sort: { name } },
		...limit && { limit: size },
		...page && { page: from }
	};

	const tasks = await taskService.get(query);

	return res.status(StatusCodes.OK).json(tasks);
};

module.exports = getTasks;