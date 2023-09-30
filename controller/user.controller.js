const User = require("../model/user.model");
const AysncHandler = require("express-async-handler");
const Joi = require('joi');
const tokenServices = require("../services/token.services");
const bcryptServices = require("../services/bcrypt.services");

const signup = AysncHandler(async (req,res)=>{
    const {first_name,last_name,image_url,email,password} = req.body;

    const schema = Joi.object({
        first_name: Joi.string().alphanum().min(3).max(30).required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).message("min 8 char").max(30).regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/).message("Test").required(),
        // image_url: Joi.string()
    });
    const { error, value } = schema.validate(req.body);
    if(error){
        throw new Error(error);
    }
    // const endpoint = request.get("origin") || "http://"+request.get("host");
    // const tokenData = {
    //     body: req.body,
    //     endpoint: endpoint,
    //     api: req.originalUrl,
    //     iss: endpoint+req.originalUrl
    // }

    const token = await tokenServices.createToken(req,"1d");
    await User.create({
        first_name,
        last_name,
        password,
        image_url,
        email
    });
    return res.status(200).json({
        message: "User created!",
        status: "ok",
        token: token
    });
});

const signin = AysncHandler(async (req,res)=>{
    try{
        const { email, password } = req.body;
        // Find the user in the database
        const userExist =  await User.findOne({email:email});
        if(!userExist){
            return res.status(401).json({
                message: "Email and Password is not valid!",
                status: "failed"
            });
        }
        const passwordMatch = await bcryptServices.decrypt(password,userExist.password);
        if(!passwordMatch){
            return res.status(401).json({
                message: "Email and Password is not valid!",
                status: "failed"
            });
        }
        delete userExist.password;
        const endpoint = req.get("origin") || "http://"+req.get("host");
        const tokenData = {
            body: userExist,
            endpoint: endpoint,
            api: req.originalUrl,
            iss: endpoint+req.originalUrl
        }
        const token = await tokenServices.createCustomToken(tokenData,"1d");
        return res.status(200).json({
            message: "Login!",
            status: "ok",
            token: token
        });
    }catch(error){
        // throw new Error("error");
        return res.status(501).json({
            error: error
        });
    }
});

module.exports = {
    signin,
    signup
}