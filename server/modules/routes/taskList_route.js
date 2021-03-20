// require express and create the router
const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool');

// routes with LOGIC

// get here
router.get( '/', (req, res)=> {
    console.log( 'taskList_route GET' );
    let queryString = `SELECT * FROM "to-doList"`;
    pool.query( queryString ).then( ( result )=>{
        res.send( result.rows );
    }).catch( ( err)=> {
        console.log( err );
        res.sendStatus( 500 );
    })
})
// post here
router.post('/', (req, res)=>{
    console.log( 'taskList_route:', req.body );
    // add this item to the DB 'tasks'
    // create query string using SQL syntax!!
    let queryString = `INSERT INTO "to-doList" ( task ) VALUES ( $1 )`;
    // ask pool to run query
    pool.query( queryString, [req.body.task] ).then (( results )=>{
        // if successful send 200
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}) // end POST

// put here
router.put( '/:id', ( req, res )=>{
    console.log( 'taskList_route PUT:' req.params );
    let queryString = `UPDATE "to-doList" SET "complete"=true WHERE "id"=$1`;
    pool.query( queryString, [req.params.id ]).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})


module.exports = router

