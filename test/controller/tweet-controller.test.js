import {fetch} from "../../src/controllers/tweets-controller.js";
import TweetService from "../../src/service/tweet-service.js";

jest.mock("../../src/service/tweet-service.js");

const mockResponse = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
}

const mockRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    return req;
}

test("Should return a tweet",async ()=>{
    const req = mockRequest();
    const res = mockResponse();
    const response = {
        content:"Tweet",
        comments:[
            {
                content:"comment 1",
            }
        ]
    };
    (TweetService.prototype.getTweetWithComments).mockReturnValue(response);
    await fetch(req,res);
    expect(res.json).toHaveBeenCalledWith({
        data:response,
        message:"tweet successfully fetched!",
        success:true,
        err:{},
    });
});