const string = require('@hapi/joi/lib/types/string');
const mongoose = require('../../../services/mongoose');

const User = mongoose.model(
  'User',
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    skillsets: {
      type: [],
      required: true,
    },
    hobbies: {
      type: [],
      required: true,
    },
    linkedInUrl: {
      type: String,
      unique: true,
    },
  },
  'users'
);

module.exports = { User };
