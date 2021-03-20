// create a pool connection to db that can be used in any other scrip
const pg = require ( 'pg' );
// config for our db connection
const pool = new pg.Pool({
    database: "weekend_to-do_app",
    host: "localhost", 
    port: 5432,
    max: 12,
    idleTimeoutMillis: 20000
})
// export 
module.exports = pool;