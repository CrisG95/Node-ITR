const express = require('express');
const createTask = require('../middlewares/tasks/createTask');
const updateTask = require('../middlewares/tasks/updateTask');
const getByIdTask = require('../middlewares/tasks/getByIdTask');
const getTasks = require('../middlewares/tasks/getTasks');
const deleteTask = require('../middlewares/tasks/deleteTask');

const {
	validateString, validateBoolean, validateId, validateNumber
} = require('../middlewares/common/validations');
const {
	NAME_FIELD, DESCRIPTION_FIELD, COMPLETED_FIELD, LIMIT_FIELD, PAGE_FIELD
} = require('../constants/task');
const checkError = require('../middlewares/common/checkError');

const taskRouter = express.Router();

taskRouter.post('/',
    validateString(NAME_FIELD, true),
    validateString(DESCRIPTION_FIELD, true),
    validateBoolean(COMPLETED_FIELD, false),
    checkError,
	createTask
);

taskRouter.put('/:id',
    validateString(NAME_FIELD, false),
    validateString(DESCRIPTION_FIELD, false),
    validateBoolean(COMPLETED_FIELD, false),
    validateId,
    checkError,
	updateTask
);

taskRouter.get('/:id',
    validateId,
    checkError,
	getByIdTask
);

taskRouter.get('/',
    validateBoolean('status', false),
    validateNumber(LIMIT_FIELD, false),
    validateNumber(PAGE_FIELD, false),
    checkError,
	getTasks
);

taskRouter.delete('/:id',
    validateId,
    checkError,
	deleteTask
);

module.exports = taskRouter;