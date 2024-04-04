const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8040;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDb connection success!");
});

const UserRouter = require("./routes/user.js");
app.use("/user",UserRouter);

const TaskRouter = require("./routes/task.js");
app.use("/task",UserRouter);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`);
})