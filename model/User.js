import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema( {
    FirstName : {
        type: String,
        required: true,
    },
    LastName : {
        type: String,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    age:     { 
        type: Number, 
        min: 18, 
        max: 65 },
});

export default mongoose.model("User", userSchema );
//user