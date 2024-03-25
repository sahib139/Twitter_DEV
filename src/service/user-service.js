import { UserRepository } from "../repository/index.js";

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async signUp(data){
        try {
            const user = await this.userRepository.create(data);
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findByEmail(email){
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async signIn(data){
        try {
            const user = await this.findByEmail(data.email);
            if(!user){
                throw "No user found!";
            }
            if(!user.comparePassword(data.password)){
                throw "Incorrect Password!";
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserService;
