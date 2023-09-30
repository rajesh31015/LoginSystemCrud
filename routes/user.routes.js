const express = require("express");
const userRouter = express.Router();
const userControlller = require("../controller/user.controller");
// academicTermRouter
//   .route("/")
//   .post(isLogin, isAdmin, createAcademicTerm)
//   .get(isLogin, isAdmin, getAcademicTerms);

userRouter.post("/signup",(req,res)=>{
    userControlller.signup(req,res);
});

userRouter.post("/signin",(req,res)=>{
    userControlller.signin(req,res);
});

module.exports = userRouter;