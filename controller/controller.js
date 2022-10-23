const signupdata = require('../models/models')
const users = require("../users")
exports.static = (req,res)=>{
    res.json(users)
}
exports.apiinfo=(req,res)=>{
 res.json({status:200,information:"Developed by SD husain 2022 API is working"})
}
exports.alluser=(req,res)=>{
    signupdata.find().then((result)=>{
        res.json(result)
       }).catch((error)=>{
           res.json({message:error})
       })
}
exports.login=async(req,res)=>{
    const {email,password}=req.body
    const getuser = await  signupdata.findOne({email:email,password:password})
    if(getuser){
        return res.json({status:200,login:true,message:"You are successfully logged in",user:getuser});
    }
    else{
        res.json({status:404,login:false,message:"Invalid credentials. Please try again."})
    }
}
exports.register =(req,res)=>{
    const savedata = new signupdata({
           fullname:req.body.fullname,
           username:req.body.username,
           email:req.body.email,
           password:req.body.password,
           avatar:req.body.avatar, 
   })
     savedata.save()
     .then(data=>{
       res.json({status:201,alert:"Congratulations, your account has been successfully created",userdata:data})
   })
   .catch(error =>{
       res.json(error)
   }) 
} 
exports.update = async(req,res)=>{
    try{
       const userdetails = await signupdata.findById(req.params.id)
       Object.assign(userdetails,req.body)
       userdetails.save()
       res.send({alert:"your data is updated",data:userdetails}); 
    }  
    catch{
        res.status(404).send({error:"not find user"})
    }  
     
   
   }
   exports.userdelete = async(req,res)=>{
    try{
       const userdetails = await signupdata.findById(req.params.id)
       await userdetails.remove()
       res.send({alert:"your data is successfully deleted",data:true}); 
    }  
    catch{
        res.status(404).send({error:"not find user"})
    }  
     
   
   }

 