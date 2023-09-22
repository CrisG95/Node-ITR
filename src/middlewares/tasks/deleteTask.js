const { StatusCodes } = require('http-status-codes');

const taskService = require('../../services/taskService');

const deleteTask = async (req, res) => {

	const deletedTask = await taskService.remove(req.task._id);

	return res.status(StatusCodes.OK).json({
        message: 'Task deleted successfully'
    });
};

module.exports = deleteTask;