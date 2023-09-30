const Task = require("../model/task.model");

const create = async (req,res)=>{
    try{
        const { task_name, task_decription, uid, assign_on } = req.body;
        await Task.create({
            task_name,
            task_description,
            uid,
            assign_on
        });
        return res.status(200).json({
            message: "Task added!",
            status: "ok"
        });
    }catch(err){
        return res.status(501).json({
            message: err,
            status: "failed"
        })
    }
}

const fetch = async (req,res)=>{
    try{
        const taskData = await Task.find();
        return res.status(200).json({
            message: "Task list",
            status: "ok",
            data: taskData
        });
    }catch(err){
        return res.status(501).json({
            message: err,
            status: "failed"
        })
    }
}

const update = async (req,res)=>{
    try{
        const task_id = req.params.id;
        const {task_decription,assign_on} = req.body;
        await Task.findByIdAndUpdate(task_id,{
            task_decription,
            assign_on
        });
        return res.status(200).json({
            message: "Task updated!",
            status: "ok"
        });
    }catch(err){
        return res.status(501).json({
            message: err,
            status: "failed"
        })
    }
}

const trash = async (req,res)=>{
    try{
        const task_id = req.params.id;
        await Task.findByIdAndDelete(task_id);
        return res.status(200).json({
            message: "Task Deleted!",
            status: "ok"
        });
    }catch(err){
        return res.status(501).json({
            message: err,
            status: "failed"
        })
    }
}

module.exports = {
    create,
    fetch,
    update,
    trash
}