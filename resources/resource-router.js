const express = require("express")
const db = require("../data/db-config")
const Resources = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Resources.find())
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const resource = await Resources.findById(id)

        if (resource) {
            return res.status(200).json(resource)
        } else {
            return res.status(404).json({ 
                errorMsg: `Could not find ${id} resource.` 
            })
        }

    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const id = await Resources.add(req.body) 

        const resource = await Resources.findById(id)

        return res.status(201).json(resource)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params 
        const resource = await Resources.update(req.body, id)

        if (resource) {
            res.json(resource)
        } else {
            return res.status(404).json({
                errorMsg: `Could not find ${id} resource.` 
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("resources")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router