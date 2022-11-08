const { User } = require('../models');

const userdata =
[
  {
    "username": "",
    "password": "example"
  },
  {
    "username": "",
    "password": "example"
  },
  {
    "username": "",
    "password": "example"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;