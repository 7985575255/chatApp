const path =require('path');
const User=require('../modles/modles')
exports.homeFile=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','view','home.html'))

  }

exports.getUser = async (req, res , next) =>{
    console.log("Getting Users Details");
    try {
        const data = await User.findAll()
        res.status(201).json(data);
    }
    catch{
     
        res.status(500).json({error:error})
    }
}

exports.postuser = async(req, res, next) =>{
    console.log("Adding Users");
    try{
        const Name = req.body.Name;
        const Email = req.body.Email;
        const number = req.body.number;
        
        if (!number){
           
            throw new Error(" Please Enter Your Number");
        }
        const data = await User.create({
            Name: Name,
            Email: Email,
            number : number
            
        })
        res.status(201).json({newUserDetails:data});
    
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
    
}

exports.deleteUserDetails= async (req,res,next) => {

    try{
        let userId = req.params.userId;
        if(!userId){
            res.status(400).json({error:"Id Missing"})
        }
        await User.destroy({where:{id:userId}});
        res.sendStatus(200);

    }
    catch(error){
        console.log(error)
        res.status(500).json("Error Occured")
    };
}
