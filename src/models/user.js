import mongoose from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { SALT,Secrete_KEY } from "../config/serverConfig.js";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
        unique:true,
        index:true,
    }
},{timestamps:true});

UserSchema.pre("save",function process(next){
    const encryptedPassword = bcrypt.hashSync(this.password,SALT);
    this.password = encryptedPassword;
    next();
});

UserSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password,this.password);
}

UserSchema.methods.genJWT = function generate(){
    return JWT.sign(
        {id : this.id ,email : this.email},
        Secrete_KEY,
        {expiresIn:'1d'}
    );
}

const User = mongoose.model("User",UserSchema);


export default User;