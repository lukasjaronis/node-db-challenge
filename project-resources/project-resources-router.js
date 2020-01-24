const express = require("express");
const db = require("../data/db-config");
const Project_resources = require("./model");
const router = express.Router()

// get

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Project_resources.find())
    }
    catch (err) {
        next(err)
    }
})

// get by id

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const project_resource = await Project_resources.findById(id)

        if (project_resource) {
            return res.status(200).json(project_resource)
        } else {
            return res.status(404).json({ 
                errorMsg: `Could not find ${id} project_resource.`
             })
        }

    }
    catch (err) {
        next(err)
    }
})

// post

router.post("/", async (req, res, next) => {
    try {
        const id = await Project_resources.add(req.body) 

        const projectResource = await Project_resources.findById(id)

        return res.status(201).json(projectResource)
    }
    catch (err) {
        next(err)
    }
})

// put

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params 
        const projectResource = await Project_resource.update(req.body, id)

        if (projectResource) {
            res.json(projectResource)
        } else {
            return res.status(404).json({
                errorMsg: `Could not find ${id} project_resource.`
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("project_resources")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router