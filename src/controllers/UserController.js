
const UserModel = require("../models/UserModel");



exports.registration=(req,res)=>{
    let reqBody=req.body
        UserModel.create(reqBody)
        .then(data => {
            res.status(200).json({ status: "success", data: data });
        })
        .catch(err => {
            res.status(404).json({ status: "fail", data: err });
        });
    }
    

exports.VerifyLogin=async(req,res)=>{
    
}

exports.UserLogout=async(req,res)=>{
    
}


exports.CreateProfile=async(req,res)=>{
    
}

exports.UpdateProfile=async(req,res)=>{
    
}

exports.ReadProfile=async(req,res)=>{
    
}



