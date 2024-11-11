import {config} from 'dotenv';
config();
import express from 'express';
const app = express();
import {router} from './routes/routes.api.js';
import { ConnectToDB } from './config/db.config.js';

app.use("/api",router);


app.get("/",(req,res)=>{
    return res.status(200).json({
        data:"API Working Bhai!",
        success:true
    });
});

try {

    ConnectToDB(process.env.MONGO_URI);
    app.listen(process.env.PORT,()=>{
        console.log(`Server Running On Port ${process.env.PORT}`);
    })
    
} catch (error) {
    
}

