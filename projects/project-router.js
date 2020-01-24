const express = require('express')
const db = require('../data/db-config');

const Projects = require('./model');
const router = express.Router();

// get
router.get('/', async (req, res, next) => {
    try {
        return res.json(await Projects.find())
    }
    catch(error) {
        next(error)
    }
})

// get by id

router.get('/:id', async (req, res, next) => {
    try {
        const project = await Projects.findById(req.params.id)

        if (project) {
            return res.status(200).json(project)
        } else {
            return res.status(404).json({
                errorMsg: `Could not find project with ID: ${req.params.id}`
            })
        }
    }
    catch (error) {
        next(error)
    }
})

// post

router.post('/', async (req, res, next) => {
    try {
        const id = await Projects.add(req.body)
        const project = await Projects.findById(id)
        return res.status(201).json(project)
    }
    catch(error) {
        next(error)
    }
})

// put

router.put('/:id', async (req, res, next) => {
    try {
        const project = await Projects.update(req.body, req.params.id)

        if (project) {
            res.json(project)
        } else {
            return res.status(404).json({
                errorMsg: `Could not find project with ID: ${req.params.id}`
            })
        }
    }
    catch (error) {
        next(error)
    }
})

// delete

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("projects")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router