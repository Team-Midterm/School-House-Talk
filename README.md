## School House Talk

### Authors:

- Isaiah Keller
- Luis Rosales
- Stephen Martinez
- Teresa Phillips
- Tim Traylor

### Problem Domain

School House Talk will act as a single source of truth for communication and information about school activities and events between faculty and parents.

### Libraries, Packages, & System Requirements : AuthO, Node.JS, Axios, Base-64, BCrypt, Chance, Express, Heroku, Inquirer, Postgres, Sequelize, Jest, Socket.io, Socket.io-client, Supertest

### Links and Resources

- [Project Presentation Slides](https://docs.google.com/presentation/d/1sjMvWgOLFNzgRsVHPoguDWuKrk0tR04XeYjH9Z0Gr2k/edit#slide=id.g2accd1c413_3_31)
- [Software Requirements](/requirements.md)
- [Github](https://github.com/ijkeller/School-House-Talk)

### Setup

- clone from GitHub repository
- in your terminal move to the root directory
- type **npm i** in the terminal
- add a .env with the example keys provided in .env.sample
  - most of the .env requirements have a default value set so it should run without adding any variables to your .env
- if needed, start your postgres 
- type **npn run db:config** in your terminal
- open your config/config.json file
- adjust the values in the development object to your local postgres username, fill in the password if required, enter a new database name, enter 'postgres' as your dialect
  - Example:
```js
    "development": {
        "username": "<your username>",  // enter your username
        "password": null,               // enter your password if required
        "database": "schoolhouse-talk", // new database name
        "host": "127.0.0.1",            // indicates you will be communicating with the localhost
        "dialect": "postgres"           // postgres is the dialect currently being used
      },
```
- type **npm run db:create** in your terminal
- type **npm run seed** in your terminal

### How to initialize/run your application (where applicable)

- open 5 separate terminals
- **npm run start** in one terminal
- start postgres in another terminal
- **npm run socket** in another terminal
  - this will show the socket server activity and anything passed through it
- **npm run user** in another terminal
  - choose rooms to listen to
    - pick as many rooms as you like, there are currently four options
  - start as many user terminals as you like
- **npm run coach** in the last terminal
  - choose actions for the coach to take
    - create, modify, or delete an event

### Features

*An admin can create events which will send event announcements to the specific sport
*A coach can update information for all events which will send event announcements to the specific sport
*Students/parents will be able to view updates to rooms they are subscribed to
*Teachers will receive all announcements and updates

#### MVP

*App will allow coaches and admin to send event information via sms/email.
*Users (students/teachers/parents) will subscribe to a specific event(sport) and will receive event information and real-time updates.
*Admin/Coaches will have proper authorization to make changes to data tables that contain event information and users.


### UML

![MVP UML](./assets/Midterm%20MVP%20UML.png)

### Tests

To run tests enter **npm run test** in the root directory.


