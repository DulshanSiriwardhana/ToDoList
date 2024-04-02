const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/user");

router.get('/',async(req,res)=>{
    try {
        const user = await User.find();
        res.status(200).finaljson(user);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;