const { StatusCodes } = require('http-status-codes');

const taskService = require('../../services/taskService');

const updateTask = async (req, res) => {

	const updatedTask = await taskService.update(req.task, req.body);

	return res.status(StatusCodes.OK).json({
        message: 'Task updated successfully'
    });
};

module.exports = updateTask;