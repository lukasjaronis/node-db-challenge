const express = require("express")
const db = require("../data/db-config")
const Tasks = require("./model")
const router = express.Router()

// get

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Tasks.find())
    }
    catch (err) {
        next(err)
    }
})

// get by id

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Tasks.findById(id)

        if (task) {
            return res.status(200).json(task)
        } else {
            return res.status(404).json({ errorMsg: `Could not find task by id ${id}` })
        }

    }
    catch (err) {
        next(err)
    }
})

// post

router.post("/", async (req, res, next) => {
    try {
        const id = await Tasks.add(req.body) 

        const task = await Tasks.findById(id)

        return res.status(201).json(task)
    }
    catch (err) {
        next(err)
    }
})

// put

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params 
        const task = await Tasks.update(req.body, id)

        if (task) {
            res.json(task)
        } else {
            return res.status(404).json({
                errorMsg: `Could not find task by id ${id}`,
            })
        }
    } catch (err) {
        next(err)
    }
})

// delete

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("tasks")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router