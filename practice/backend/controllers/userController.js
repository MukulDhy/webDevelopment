const User = require('../models/userModels');
const createUser = async(res,req) => {

    try{
        const user = await User.create(req.body);
        res.status(200).json({
            sucesss : true,
            user
        })
        
    }catch(error){
        
        res.status(400).json({
            sucesss : false,
            message : "tmkl"
        })
    }
}

module.exports = createUser;