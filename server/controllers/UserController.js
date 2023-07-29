const userModel = require("../models/usermodel");
const S3 = require("aws-sdk/clients/s3");
const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const multer = require("multer");
require("dotenv").config();



const Register = async (req, res)=>{
    // res.send("Hello Register")
    const user = await userModel.findOne({email: req.body.email});
    if(user){
        res.send({status: false, message: "Email already taken ", data: null});
    }
    var data = new userModel({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        image_url: '',
        password: req.body.password
    });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    data.password = hashed;
    if(typeof(req.file) === 'undefined'){
        JWT.sign({data}, process.env.SecretJwtKey, {expiresIn: '31536000'}, (err, token)=>{
            if (err){
                res.send({status: false, message: "Error Token " + err, data: null});
            }
            else{
                const saved = data.save().then( async (userSaved)=>{
                    console.log(userSaved);
                    const user = await userModel.findOne(userSaved._id);
                    res.send({status: true, message: "User registered", data: {user: user, token: token}})
                });
            }
        }) 
    }
    else{
        const s3 = new S3({
            accessKeyId:  process.env.AccessKeyId,
            secretAccessKey: process.env.SecretAccessKey,
            region: process.env.Region
        })
        const fileContent = req.file.buffer;
        const params = {
            Bucket: process.env.Bucket,
            Key: req.file.fieldname + Date.now(),
            Body: fileContent
        }
        const result = s3.upload(params, async(err, d)=> {
            if(err){
                res.send({status: false, message: "Image not uploaded " + err, data: null});
            }
            else{
                
                
                data.image_url = d.Location;
                JWT.sign({data}, process.env.SecretJwtKey, {expiresIn: '31536000'}, (err, token)=>{
                    if (err){
                        res.send({status: false, message: "Error Token " + err, data: null});
                    }
                    else{
                        const saved = data.save().then( async (userSaved)=>{
                            console.log(userSaved);
                            const user = await userModel.findOne(userSaved._id);
                            res.send({status: true, message: "User registered", data: {user: user, token: token}})
                        });
                    }
                }) 
            }
        });
    }
    
}

const Login = async (req, res)=>{
    // res.send("Hello Login")
    console.log("Login " + req.body.email);
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModel.findOne({email: email});
    if(!user){
        res.send({status: false, message: "Invalid email", data: null});
    }
    // console.log(user);
    bcrypt.compare(password, user.password, function(err, result) {
        // result == true
        if(result){
            JWT.sign({user}, process.env.SecretJwtKey, {expiresIn: "365 d"}, (error, token)=>{
                if(error){

                }
                else{
                    res.send({data: {user: user, token: token}, status: true, message: "Logged in"});
                }
            })
        }
        else{
            res.send({status: false, message: "Invalid password", data: null});
        }
    });

}

const Profile = (req, res)=> {
    // verifyJwtToken(req, res);
    JWT.verify(req.token, process.env.SecretJwtKey, (err, authData)=>{
        if(err){
            res.send({status: false, message: "Invalid token", data: null});
        }
        else{
            res.send({data: authData.user, status: true, message: "My profile obtained"});
        }
    })
}
//users
const Users = async (req, res)=>{
    JWT.verify(req.token, process.env.SecretJwtKey, async (err, authData)=>{
        if(authData){
            const users = await userModel.find({_id: {$ne: authData._id}})
            res.send({data: users, status: true, message: "Users"});
        }
    })
    
}


module.exports = {Register, Login, Profile, Users}