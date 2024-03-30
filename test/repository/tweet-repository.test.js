import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe("For creating Tweets",()=>{
    test("Create new tweet and return it",async ()=>{
        const data = {
            content : "Testing Tweet",
        }
    
        const create_Func_mock = jest.spyOn(Tweet,"create").mockImplementation(()=>{
            return {...data,createdAt: '2022-02-12', updatedAt: '2022-02-12'};
        });

        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create();

        expect(create_Func_mock).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
        expect(tweet.createdAt).toBeDefined();
    });

    test("should not create a tweet and throw exception",async ()=>{
        const data = {
            content : "Testing Tweet",
        }
        const spy = jest.spyOn(Tweet,"create").mockImplementation(()=>{
            throw new Error("Something WenT Wrong");
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data).catch((err)=>{
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe("Something WenT Wrong");
        });
    });
});

describe("Getting All tweets",()=>{
    test("testing limits in getting tweets",async ()=>{
        const data = {
            content : "Testing Tweet",
        }
        let tweetArray = [
            {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'},
            {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}, 
            {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}
        ];
        let response = {tweetArray};
        response.skip = jest.fn((offset)=>{
            return response;
        });
        response.limit = jest.fn((offset)=>{
            return response.tweetArray.slice(0,limit);
        });
        const spy = jest.spyOn(Tweet,"find").mockImplementation(()=>{
            return response;
        });
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0,2);
        expect(spy).toHaveBeenCalled();
        // expect(tweets).toHaveLength(2);
    });
});