import { UserService } from "../service/index.js";

const userService = new UserService();

export const signUp = async (req,res)=>{
    try {
        const response = await userService.signUp(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"User created successfully!!",
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong!",
            err:error,
        });
    }
}

export const logIn = async (req,res)=>{
    try {
        const token = await userService.signIn(req.body);
        return res.status(201).json({
            data:token,
            success:true,
            message:"User login successfully!!",
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong!",
            err:error,
        });
    }
}