const EmailSend = require("../utility/EmailHelper");
const UserModel = require("../models/UserModel");
const ProfileModel=require("../models/ProfileModel")
const { EncodeToken } = require("../utility/TokenHelper");




const VerifyLoginService = async (req) => {
    try{
        let email=req.params.email;
    let password=req.params.password;
    let total= await UserModel.find({email:email,password:password}).count('total')
    if(total===1){
        let user_id= await UserModel.find({email:email,password:password}).select('_id')
        let token=EncodeToken(email,user_id[0]['_id'].toString())
        return { status:"success",message:"Login successful",token:token}
    }
    else{
        return { status:"fail",message:"Something Went Wrong"}
    }

    }catch(e){
        return { status:"fail",message:"not working"}
    }
        


};


const SaveProfileService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
        return {status:"success", message:"Profile Save Success"}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
 }
 



const ReadProfileService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let result= await ProfileModel.find({userID:user_id})
        return {status:"success", data:result}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
};


module.exports={VerifyLoginService,
    SaveProfileService,
    ReadProfileService}
