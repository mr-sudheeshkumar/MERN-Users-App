const { json } = require("express");
const express = require('express');
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require('./models/user');

mongoose.connect("mongodb://localhost:27017/dcs").then(() => console.log("Mongo DB Connected."));

app.get("/api/", (req,res) => res.send("Hello Fullstack"));

//Get List of all users
app.get("/api/list", async (req,res) =>{
    const userList = await userModel.find();

    if(userList.length === 0){
        return res.json({data : "No users in fullstack"});
    }
    return res.json({data: userList});
    
});

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
        return res.json({data: user.name});
    }else{
        return res.json({data: "failed"});
    }
});

app.listen(port, () => console.log(`Listening on port ${port}.`));

