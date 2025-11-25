import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
        .connect(process.env.MONGO_URI,{dbName:"Event_Messages"})
        .then(()=>{
            console.log("Connected to database");
        })
        .catch((err)=>{
            console.log("Some error has been occured",err);
        });
};