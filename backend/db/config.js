require("dotenv").config();

module.exports = {
  development: {
    username: "voloshanovsky",
    password: "123",
    database: "vite-project",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeData",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
