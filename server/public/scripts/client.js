$( document ).ready ( onReady );

function onReady(){
    console.log( 'jQ' );
// click handlers
    $( '#submitButton' ).on( 'click', addTask);

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
            el.append(`<li> ${response[i].task}</li>`)
        }
    })
 };// end getTaskList
