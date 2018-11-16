Instructions to run:

- Start server

Navigate to backend folder

Edit config.js and add twitter api key/secret. Bearer token will be generated when server is launched.

Run 'npm install' to install dependencies

Start server with 'node server.js'

- Open webpage

Navigate to frontend folder.

Run 'npm install' to install dependencies

Run 'ng serve --open' to open webpage. Will be hosted at http://localhost:4200

--------------------------------------------
Details:

Initial page displays popular tweets about technology.

You can filter displayed tweets by keyword. To reset filters, click on button with no query. 

You can search a user's handle. When searching a handle, the page will automatically refresh every 30 seconds with up-to-date tweets.

User handle and filter searches that have no results will display an error message.

--------------------------------------------
### Twitter Client

Implement a simple *Twitter client* as a single page application which initially shows general public tweets. Allow the user to specify a Twitter handle to view the tweets from. When a user requests a specific Twitter handle and the UI shows the latest tweets from that handle, there should also be a way to filter / search tweets by text. Also, once the user has selected a handle to view the Tweets from, the UI should periodically update with newer Tweets.

#### Grading Criteria

* UI Design
* Architecture
* Maintainability
* Testing

#### Technology

You can pick any frontend and/or backend technologies you are familiar with. You can and should use the Twitter API. 

#### Submission

You will submit to a private git repo we will add you to. Follow-up these instructions with an email with your Github username. When done, make sure you provide instructions on how to run your code (preferably as a docker image) in the README. 

Note: *Do not* create a Twitter clone and *do not* share any Twitter API secrets in your code. 

Best of luck! 

Slync Engineering Team
-------------------------------------------
