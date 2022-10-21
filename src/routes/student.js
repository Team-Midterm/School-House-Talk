'use strict';

const express = require('express');
const studentRouter = express.Router();
const {student} = require('../models');
// const bearer = require('../auth/bearer');

studentRouter.get('/student', async (req, res, next) => {
  let allStudents = await student.read();
  res.status(200).json(allStudents);
});

studentRouter.get('/student/:id', async (req, res, next) => {
  let info = await student.read(req.params.id);
  res.status(200).json(info);
});

studentRouter.post('/student', async (req, res, next) => {
  let newStudent = await student.create(req.body);
  res.status(200).json(newStudent);
});

studentRouter.put('/student/:id', async (req, res, next) => {
  let info = await student.update(req.params.id, req.body);
  res.status(200).json(info);
});

studentRouter.delete('/student/:id', async (req, res, next) => {
  let info = await student.delete(req.params.id);
  res.status(200).json(info);
});

module.exports = studentRouter;
