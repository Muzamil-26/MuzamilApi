import mongoose from "mongoose";

const ConnectToDB=(uri)=>{

    mongoose.connect(uri).then(()=>{
        console.log("Database Connected At URI",uri);
    }).catch((error)=>{
        console.log("Error While Connecting To DB");
    });


    
}

export {ConnectToDB};