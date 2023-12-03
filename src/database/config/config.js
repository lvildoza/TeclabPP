require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "mysql://root:HE3CddEbHchEAg3C6aedhGe4-eEdeHH3@mysql.railway.internal:3306/railway",
    dialect: "mysql",
  },
};
