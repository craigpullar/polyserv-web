# polyserv-web

The front end client facing site for the polyserv project.

###Prerequisites:

1. Node >= v8.10
2. The .env file

###To run:

1. Install with your favourite package manager: e.g. `yarn install`
2. Run the start command: `yarn start`
3. The app will be running on port 4000

###Testing:
We use jest for unit testing. You can run the tests with the following command: `yarn test`

###Deployment:
App deployment is done through the glcoud sdk.
Once signed in to the gcp account you can run the following commands:

1. `yarn deploy` - Deploys new version of app to gcp app engine
2. `yarn browse` - Will open app in browser
