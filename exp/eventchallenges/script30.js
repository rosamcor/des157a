( function(){
    "use strict";
    console.log('JS is running');

    const body = document.querySelector('body');
    document.addEventListener('keydown', function(event){

    let pressedKey = event.key;

        switch(pressedKey){
            case 'b': body.className='one'; break;
            case 'v': body.className='two'; break;
            case 'c': body.className='three'; break;
            case 'f': body.className='four'; break;
            case 'g': body.className='five'; break;
            default: alert("You didn't press one of the specifiec keys!");
        }
    });

} )();