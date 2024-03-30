import UserService from "../../src/service/user-service.js";
import UserRepository from "../../src/repository/user-repository.js";

jest.mock('../../src/repository/user-repository.js');

describe("User service signUp test",()=>{
    test("Should successfully create a user", async ()=>{
        const data = {
            email: "xyz@abc.com",
            password: "123456",
        };
        (UserRepository.prototype.create).mockReturnValue(
            {...data,createdAt: '2022-12-12', updatedAt: '2022-12-12'}
        );
        const userService = new UserService();
        const response = await userService.signUp(data);
        expect(response.email).toBe(data.email);
    });
});