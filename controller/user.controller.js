const User = require("../model/user.model");
const AysncHandler = require("express-async-handler");

const signup = AysncHandler((req,res)=>{
    const {first_name,last_name,image_url,email,password} = req.body;
    console.log(req.body,"KKKKKK")
});

const signin = AysncHandler((req,res)=>{

});

module.exports = {
    signin,
    signup
}