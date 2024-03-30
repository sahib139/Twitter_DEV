# Project Description

- Developed Twitter dev project's backend using Node.js, Express, and MongoDB with Mongoose for REST API, MVC architecture, CRUD operations, and database management.
- Integrated S3 service for static storage, ensuring efficient storage and serving of static assets like images and files.
- Implemented OAuth authentication using Passport, enhancing security by allowing users to log in with third-party providers.
- Ensured code reliability and stability through unit testing using Jest, demonstrating a commitment to high-quality code.

# Project SetUp

- clone the project on your local
- Execute npm i in the root directory.
- Create .env file in the root directory and add the following environment
    - `PORT = 3000`
    - `DB_URL = mongodb://localhost/twitter_Dev`
    - `Secrete_kEY = <Your Secret key for JWT Service>`
    - `AWS_S3_Bucket = <Your Amazon S3 bucket name>`
    - `AWS_Access_KEY = <Your AWS access key>`
    - `AWS_Secret_KEY = <Your AWS Secret Key>`

Finally, Run the npm start in the root directory to run the Server.

- For jest test , if it is not working , then refer to following url
`https://how-to.dev/how-to-set-up-jest-for-es-module` 

# Current Implemented Services

- User should be able to create a post
    - The Post/Tweet cannot be more then 250 character
    - Every Tweet/Post will be having  support for image.

- Anyone who follows you can comment on a Post/Tweet.

- We can comment on a comment.
- We can like any comment.

- Pagination on Tweets.
- User auth

- Every Tweet might be having a hashtag

# Currently working on

- User will able to search post using hashtag name
- Any Post should be visible to all those user who follows the author.
- Anyone who follows you can like on a Post/Tweet.
- Retweeting

- User profile:
    - Name
    - Follower count
    - Bio
    - Last 10 Tweet from the user.