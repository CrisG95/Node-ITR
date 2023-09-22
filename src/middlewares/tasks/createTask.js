const { StatusCodes } = require('http-status-codes');

const taskService = require('../../services/taskService');

const createTask = async (req, res) => {

	const createdTask = await taskService.create(req.body);

	return res.status(StatusCodes.OK).json({
        message: 'Successfully created',
        response: {
            name: createdTask.name,
            id: createdTask.id
        }
    });
};

module.exports = createTask;
