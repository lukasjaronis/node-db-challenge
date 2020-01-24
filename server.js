const express = require('express');
const server = express();
server.use(express.json());

const projectRouter = require('./projects/project-router');
const taskRouter = require('./tasks/task-router');
const resourceRouter = require('./resources/resource-router');
const projectResourceRouter = require('./project-resources/project-resources-router');

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects-resources', projectResourceRouter);

server.get('/', (request, response) => {
    response.status(200).send(`<h1>ONLINE</h1>`)
})

module.exports = server;