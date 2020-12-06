# Trello app

This application is simplified copy of Trello. 
This project was created with [Create React App](https://github.com/facebook/create-react-app) (Include TypeScript), and NodeJS.

## Getting Started

To run this project, you need to download it and run it locally.
Before starting, you must install the dependencies and then run the application.
First you need to set the database

### Main Stack

This add use Node.JS and PostgreSQL databases.
Its you're can download there:
  [NodeJs](https://nodejs.org), 
  [PostrgeSQL](https://www.postgresql.org/).

### Installing

#### Backend part

Proceed to `server` directory and execute 
```
npm install
``` 
to install dependencies.

Then you shoud to set database configuration
1) Change name `.env-example` to `.env`
  This is necessary for the correct setting
2) You're shoud to create database
3) Change the fields in the file.

```
# JsonWebToken

JWT_SECRET=secretWord


# Database

DB_USER="User name"
DB_PASSWORD="********"
DB_NAME="Database name"
DIALECT=postgres
TIMESTAMPS=true

```

Also if you launch this app on other domain and port, you need to change `port` in the file along the path `config/default.json`
Default: `4000`


#### Frontend part

Proceed to `client` directory and execute 
```
npm install
``` 
to install dependencies.

Then you should to change the variable `baseURL` in the file along the path `src/utils/variables.ts`
There you need to specify a route to your server domain and port

And then launch the app with 
```
npm start
```

By default, the app is available by its [localhost:4000](http://localhost:4000/), link.
