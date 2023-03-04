
const mongoose = require("mongoose");

const connectionDataBase = async() => {

    try{
        const connection = await mongoose.connect(process.env.MONGOURL)
        console.log("Data Base is Conneted".bgMagenta);
    }catch(error){
        console.log(`DataBase is Not Connected ${error}`.bgRed);
    }
}

module.exports = connectionDataBase;