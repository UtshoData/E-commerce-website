
const UserModel = require("../models/UserModel");
const {VerifyLoginService,SaveProfileService,ReadProfileService}=require('../services/UserServices')



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
    let result=await VerifyLoginService(req)

    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }
}

exports.UserLogout=async(req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}


exports.CreateProfile=async(req,res)=>{
    let result=await SaveProfileService(req)
    return res.status(200).json(result)
    
}

exports.UpdateProfile=async(req,res)=>{
    let result=await SaveProfileService(req)
    return res.status(200).json(result)
}

exports.ReadProfile=async(req,res)=>{
    let result=await ReadProfileService(req)
    return res.status(200).json(result)
}



