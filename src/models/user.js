'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secret';

const userModel = (sequelize, DataTypes) => {
  const model = sequelize.define('users', {
    username: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, required: true },
    role: { type: DataTypes.ENUM('teacher', 'student', 'parent', 'coach', 'admin'), required: true, defaultValue: 'parent' },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, SECRET);
      },
      set(object) {
        let token = jwt.sign(object, SECRET);
        return token;
      },
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const aclList = {
          teacher: ['read'],
          student: ['read'],
          parent: ['read'],
          coach: ['read', 'create', 'update', 'delete'],
          admin: ['read', 'create', 'update', 'delete'],

        };
        return aclList[this.role];
      },
    },
  });

  model.beforeCreate(async (user) => {
    let password = await bcrypt.hash(user.password, 10);
    user.password = password;
  });

  model.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) { return user; }
    throw new Error('Invalid User');
  };

  model.authenticateToken = async function (token) {
    try {
      const paresedToken = jwt.verify(token, SECRET);
      const user = this.findOne({ where: {username: paresedToken.username} });
      if (user) { return user; }
      throw new Error('User not found');
    } catch (error) {
      throw new Error(error.message);
    }

  };
  return model;

};

module.exports = userModel;
