'use strict';

const express = require ('express');
const authRouter = require('./routes/auth-route');
const PORT = process.env.PORT || 3002;
const app = express();
const studentRouter = require('./routes/student');
const errorHandler = require('./middleware/500');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(authRouter);
app.use(studentRouter);


app.get ('/', (req, res, next) => {
  res.status(200).send('Welcome to the School-House-Talk server');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use(errorHandler);

function start () {
  app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
}




module.exports = {app, start};

