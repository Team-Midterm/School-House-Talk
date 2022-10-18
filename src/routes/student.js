'use strict';

const express = require('express');
const router = express.Router();
const {student} = require('../models');

router.get('/student', async (req, res, next) => {
  let allStudents = await student.read();
  res.status(200).send(allStudents);
});

router.post('/student', async (req, res, next) => {
  let newStudent = await student.create(req.body);
  res.status(200).send(newStudent);
});

module.exports = router;
