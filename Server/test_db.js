// test_db.js — prova semplice di connessione a Postgres (modifica le credenziali come nel tuo db.js)
const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "TUO_USER",
  password: "TUA_PASSWORD",
  database: "TUO_DB",
  port: 5432,
  connectionTimeoutMillis: 5000, // fail fast
});

(async () => {
  try {
    const client = await pool.connect();
    console.log("Connessione DB OK");
    const res = await client.query("SELECT NOW()");
    console.log("DB NOW:", res.rows[0]);
    client.release();
    process.exit(0);
  } catch (err) {
    console.error("Errore connessione DB:", err);
    process.exit(1);
  }
})();
