'use strict';

const express = require ('express');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get ('/', (req, res, next) => {
  res.status(200).send('Welcome to the School-House-Talk server');
});

function start () {
  app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
}

module.exports = {app, start};

