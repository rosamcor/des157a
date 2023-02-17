(function() {
    'use strict';
    console.log('reading js');

    const form = document.querySelector('#form');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const pplace = document.querySelector('#pplace').value;
        const animal = document.querySelector('#animal').value;

        let myText = ''

        if(name == ''){
            myText = "Please provide a noun";
            document.querySelector('#noun1').focus;
        }

        else if(adj == ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj').focus;
        }

        else if (verb == ''){
            myText = "Please provide a verb";
            document.querySelector('#verb').focus;
        }

        else if(pplace == ''){
            myText = "Please provide a second noun";
            document.querySelector('#noun2').focus;
        }

        else {
            myText = `You typed in the words ${noun1},${noun2}, ${verb}, and ${adj}`;
            
            document.querySelector('#noun1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#verb').value = '';

            //OR can use loop
            

            
        }


        madlib.innerHTML = name;

    });

})();