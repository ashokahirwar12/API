import mongoose  from "mongoose";
import userModel from "./user.model.js";

try {
    
        mongoose.connect("mongodb://localhost:27017/codefortomorrow");
        console.log("Database is connected successfully!!");
    
    
} catch (error) {
    console.log("Database is not connected succesfully!!");
    
}
