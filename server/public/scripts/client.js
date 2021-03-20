$( document ).ready ( onReady );

function onReady(){
    console.log( 'jQ' );
// click handlers
    $( '#submitButton' ).on( 'click', addTask);
}

function addTask(){
    console.log( 'in add Task' );
    // wrap user input into an object 
    let objectToSend = {
        title: $( '#taskIn').val(),
        description: $('#descriptionIn').val()
    }
    // send object to server via ajax POST method
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
    }).catch( function ( err ){
        alert( 'error adding item to db');
        console.log( err );
    })// end ajax GOTO taskList_route
} // end add Task 