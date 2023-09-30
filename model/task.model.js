const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    uid: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    task_name: {
      type: String,
      required: true,
    },
    task_description: {
        type: String,
        required: true
    },
    assign_on:[{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }],
    status: {
        type: String,
        default: "created",
        enum: ["created,inprogrss,pending,completed,rejected"]
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
