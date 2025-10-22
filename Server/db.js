const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "lfwildroutes",
  password: "Postgre.55",
  port: 5432,
});

module.exports = pool;
