const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'tech_blog_db',
      dialect: 'mysql',
      // port: 3306
    });

module.exports = sequelize;