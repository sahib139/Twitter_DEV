import passport from "passport";

export const Authenticate = (req,res,next)=>{
    passport.authenticate('jwt',(err,user)=>{
        if(err){
            next(err);
        }
        if(!user){
            return res.status(401).json({
                message:"Unauthorized access on token!",
            });
        }
        req.user = user;
        next();
    })(req,res,next);

}