# Task Management REST API
This is a back-end code repository.

This is a full featured Task Management REST API back-end built with Node.js and MongoDB.  Features include:

- Full CRUD features for User and Task instances.

### SETUP INSTRUCTIONS

To use this code you will require an account with [SendGrid](https://signup.sendgrid.com/).  Sign-up is free and no credit card is required to access a free-tier API Key.

Node.js version 12+ and npm must be installed on your machine.  In terminal type the following commands:
```
git clone https://github.com/pgmorgan/task-manager-api.git
cd taskManger_API
sudo npm install
touch dev.env
```

Insert the following lines in `dev.env`, replacing all `<content>` with your own information:

```
PORT=<port number>
SGMAIL_EMAIL=<your email address>
MONGODB_URL=<mongodb connection string>
SENDGRID_API_KEY=<api key>
JWT_SECRET=<unique key of your choice to generate JSON web tokens>
```

To run the web server return to the root of the repository and type:
```
npm run dev
```
