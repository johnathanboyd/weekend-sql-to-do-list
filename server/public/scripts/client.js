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
}