// require express and create the router
const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool');

// routes with LOGIC

// post here
router.post('/', (req, res)=>{
    console.log( 'taskList_route:', req.body );
    // add this item to the DB 'tasks'
    // create query string using SQL syntax!!
    let queryString = `INSERT INTO "tasks" ( title, description ) VALUES ($1, $2)`;
    // ask pool to run query
    pool.query( queryString, [req.body.title, req.body.description] ).then (( results )=>{
        // if successful send 200
        res.sendStatus( 200 );
    }).catch ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    }
}) // end POST





module.exports = router

