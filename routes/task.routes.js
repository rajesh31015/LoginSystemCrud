const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controller/task.controller");
const isLogin = require("../middlware/isLogin");

taskRouter
    .route("/")
    .get(isLogin,taskController.fetch)
    .post(isLogin,taskController.create)
taskRouter
    .route("/:id")
    .delete(isLogin,taskController.trash)
    .put(isLogin,taskController.update)


module.exports = taskRouter;