const { json } = require("express");
const express = require('express');
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require('./models/user');

mongoose.connect("mongodb://localhost:27017/dcs").then(() => console.log("Mongo DB Connected."));

app.get("/api/", (req,res) => res.send("Hello Fullstack"));


//Register User
app.post("/api/registration",(req,res) =>{
    const newUser = req.body;
    userModel.create(newUser);
    return res.json({data: "User Registered successfully."});
});

// Login user
app.post("/api/login", async (req,res) =>{
    const {username,password} = req.body;
    const user = await userModel.findOne({username: username,password: password});
    if(user){
        return res.json({data: user});
    }else{
        return res.json({data: "failed"});
    }
});

//Search User
app.post("/api/searchuser", async (req,res) =>{
    const {username} = req.body;
    const userList = await userModel.findOne({username: username});
    if(userList){
        return res.json({data: userList});
    }else{
        return res.json({data : "not found"});
    }
});

//Update User
app.post("/api/updateuser",async(req,res) =>{
    const {username,password,name,age} = req.body;
    const user = await userModel.findOneAndUpdate({username:username},{password:password,name:name,age:age});
    if(user){
        return res.json({data: "success"});
    }else{
        return res.json({data: "failed"});
    }
});

//Delete User
app.post("/api/deleteuser",async (req,res) =>{
    const {username} = req.body;
    const user = await userModel.findOneAndDelete({username:username});
    if(user){
        return res.json({data : "success"});
    }else{
        return res.json({data : "failed"});
    }
});

app.listen(port, () => console.log(`Listening on port ${port}.`));

