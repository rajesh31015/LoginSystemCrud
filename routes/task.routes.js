const express = require("express");
const taskRouter = express.Router();

taskRouter.post("/",(req,res)=>{
    console.log("Test");
});

module.exports = taskRouter;