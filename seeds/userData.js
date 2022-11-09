const { User } = require('../models');

const userdata =
[
  {
    "username": "Example1",
    "password": "password"
  },
  {
    "username": "Example2",
    "password": "password"
  },
  {
    "username": "Example3",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;