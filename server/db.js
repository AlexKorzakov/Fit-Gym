const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, // DB NAME
  process.env.DB_USER, // DB USER
  process.env.DB_PASSWORD, //DB PASSWORD
  {
    dialect: 'postgres',
    host: process.env.DB_HOST, // DB HOST,
    port: process.env.DB_PORT, //DB PORT
    define: {
      timestamps: false,
    },
  }
);
