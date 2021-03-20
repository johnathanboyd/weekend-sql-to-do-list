// requires 
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const taskList = require( './modules/routes/taskList_route' );

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// routes
app.use( '/tasks', taskList) ;

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port);
})