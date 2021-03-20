const { put } = require("../../modules/routes/taskList_route");

$( document ).ready ( onReady );

function onReady(){
    console.log( 'jQ' );
// click handlers
    $( '#submitButton' ).on( 'click', addTask);
    $( '#listOut' ).on('click', '#delete', deleteTask )
    $( '#listOut' ).on('click', '#completeCheck', markComplete)
// initializer
    getTaskList();
}// end on ready

function addTask(){
    console.log( 'in add Task' );
    // wrap user input into an object 
    let objectToSend = {
        task: $( '#taskIn').val(),
    }
    // send object to server via ajax POST method
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
        // call function again to update dom when a new task is added
        getTaskList();
    }).catch( function ( err ){
        alert( 'error adding item to db');
        console.log( err );
    })// end ajax GOTO taskList_route
    $( '#taskIn').val( '' );
} // end addTask 

function deleteTask(){
    console.log( 'in deleteTask')
}

 function getTaskList(){
    console.log( 'getting task list' );
    // call that ajax!
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then( function( response ){
        // sending the list to the DOM
        console.log( 'back from GET:', response)
        let el = $( '#listOut');
        el.empty();
        for( let i=0; i < response.length; i++){
            // INSERT APPEND FOR COMPLETE HERE???
            el.append(`
                <li><input type="checkbox" id="completeCheck"> ${response[i].task} <button id="delete">delete</button> </li>  `)
        }
    }).catch( function( err ){
        console.log( err );
        alert( 'problem!'); 
    })// end ajax
 };// end getTaskList 

 function markComplete(){
     const myId = $( this ).data( 'id' );
     console.log( 'in markComplete', myId );
     // ajax cal of type PUT to update db
     $.ajax({
         method: 'PUT',
         url: '/tasks/' + myId
     }).then( function( response ){
         console.log('back from PUT', response );
         getTaskList();
     }).catch( function ( err ){
        console.log( err );
        alert( 'nope' );
     })// end ajax
 } // end markComplete