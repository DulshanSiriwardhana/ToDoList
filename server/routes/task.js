const express = require("express");
const router = express.Router();
const path = require("path");
const Task = require("../models/task");

router.get('/',async(req,res)=>{
    try {
        const task = await Task.find();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;