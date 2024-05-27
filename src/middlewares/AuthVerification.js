const {DecodeToken}=require("../utility/TokenHelper")


module.exports=(req,res,next)=>{
    let token=req.header['token']
    if(!token){
        token=req.cookies['token']
    }

    let decoded=DecodedToken(token)
    if(decoded===null){
        return res.status(404).json({
            status:"fail",
            message:"Unauthorized"
        })
    
    }else{
        let email=decoded['email'];
        let user_id=decoded['user_id'];
        req.headers.email=email;
        req.headers.user_id=user_id;
        next();
    }
}