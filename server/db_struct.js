const sequelize = require('./db_connect');
const {DataTypes} = require('sequelize');

// Создание сущностей

const Employee = sequelize.define('employee', {
    employeeid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false},
});

const Task = sequelize.define('task', {
    taskid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: false},
    description: {type: DataTypes.STRING, unique: false},
    title: {type: DataTypes.STRING, unique: false}
});

const Status = sequelize.define('status', {
    statusid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false}
});

const Project = sequelize.define('project', {
    projectid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false}
});
// Описание связей сущностей

// Связь сотрудник - задачи

Task.belongsTo(Employee);
Employee.hasMany(Task);

// Связь начальник - сотрудники

Status.hasMany(Task);
Task.belongsTo(Status);

Project.hasMany(Task);
Task.belongsTo(Project);

module.exports = {
    Employee,
    Task,
    Project,
    Status
}