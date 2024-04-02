const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskShema = new Schema({
    name : {
        type : String,
        require : true
    },
    type : {
        type : String,
        require : true
    },
    text : {
        type : String,
        require : true
    },
    startTime : {
        type : String,
        require : true
    },
    endTime : {
        type : String,
        require : true
    },
    status : {
        type : String,
        require : true
    }
})

const Task = mongoose.model("Task", TaskShema);
module.exports = Task;