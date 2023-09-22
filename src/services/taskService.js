const Task = require('../models/TaskModel');

const create = data => Task.create(data);
const update = (task, data) => task.edit(data);
const getById = id => Task.findById(id);
const get = ({ filter, sort, limit, page }) => Task.find(filter).sort(sort).limit(limit).skip(page);
const remove = id => Task.findOneAndDelete({ _id: id });

module.exports = {
	create, update, getById, get, remove
};