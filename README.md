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

- [Project Deck](https://docs.google.com/presentation/d/1sjMvWgOLFNzgRsVHPoguDWuKrk0tR04XeYjH9Z0Gr2k/edit#slide=id.g2accd1c413_3_31)
- [Trello](https://trello.com/w/cf401team)
- [Software Requirements](/requirements.md)
- [ci/cd](https://github.com/Team-Midterm/School-House-Talk/actions) (GitHub Actions)
- [back-end server url](https://school-house-talk.herokuapp.com/)

### Setup

Clone down back-end from GitHub repository, Npm i, Npm start, Add an .env to the .gitIgnore with the user's access keys to the server and any needed library access keys.

i.e.

- `PORT` - Port Number
- `DATABASE_URL` - postgres://iswraxdqfirlkz:5a589debab9fa279c8d43d5ae923fac1f9d12782292e10a42ad405532957bfe6@ec2-52-3-200-138.compute-1.amazonaws.com:5432/d954q9p4g621aj

### How to initialize/run your application (where applicable)

- npm i
- open 5 separate terminals
- npm run start in one terminal
- start postgres in another terminal
- npm run socket in another terminal
- npm run user in another terminal
- npm run coach in the last terminal

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

- How do you run tests? 

NPM test

- Any tests of note?

- Describe any tests that you did not complete, skipped, etc
