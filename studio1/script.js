(function() {
    'use strict';
    console.log('reading js');


    //Getting Form Input from User

    const form = document.querySelector('#form');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const pplace = document.querySelector('#pplace').value;
        const animal = document.querySelector('#animal').value;


        if(name && adj && verb && pplace && animal){
            
           

        
        
            //Inputing Values and Words into Letter
            letter.innerHTML =    ` <h1>SUED</h1>
                
            <p> Dear Dr. <b>${name}</b>,</p>
    
                <p>Late last night you <b>${verb}</b> away in your <b>${adj}</b> Bugatti after kidnapping my super jacked hamster and getting him on steroids. Before your rude interuption, my innocent little hamster was just peacefully rampaging through the <b>${pplace}</b> in order to get their steps in by the end of the day.</p>
    
                <p>This letter is to notify you that I have filed a case against you for the unauthorized pump of steroids you gave to my hamster and for the kidnapping of America’s #1 natural hamster body builder. I am very disappointed in you. You are a <b>${animal}</b> for the way you treated my hamster!</p>
    
            <p> See you in court!</p>
    
            <p> Your Ex-Super Patient,</p>
    
                <p>John</p>
                
                
                
                
                <button class="close">Close</button>`;


            // Clearing Values
                document.querySelector('#name').value = '';
                document.querySelector('#adj').value = '';
                document.querySelector('#verb').value = '';
                document.querySelector('#pplace').value = '';
                document.querySelector('#animal').value = '';
    
            //Turning Off Form and Turning on MadLib Letter Overlay
            event.preventDefault();
            document.getElementById('overlay').className = 'showing';
            document.getElementById('header').className = 'hidden';
            document.getElementById('sticky-note').className = 'hidden';
            document.querySelector('#form #input1').className = 'hidden';
            document.querySelector('#form #input2').className = 'hidden';
            document.querySelector('#form #input3').className = 'hidden';
            document.querySelector('#form #input4').className = 'hidden';
            document.querySelector('#form #input5').className = 'hidden';
            document.querySelector('#form #submit').className = 'hidden';
            document.getElementById('list').className = 'hidden';

            //Closing Letter/Overlay

                    //close on click
            
            document.querySelector('.close').addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('overlay').className = 'hidden';
                document.getElementById('header').className = 'showing';
                document.getElementById('sticky-note').className = 'showing';
                document.querySelector('#form #input1').className = 'showing';
                document.querySelector('#form #input2').className = 'showing';
                document.querySelector('#form #input3').className = 'showing';
                document.querySelector('#form #input4').className = 'showing';
                document.querySelector('#form #input5').className = 'showing';
                document.querySelector('#form #submit').className = 'showing';
                document.getElementById('list').className = 'showing';

            });
        

                //close using ESZZZZ
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    document.getElementById('overlay').className = 'hidden';

                    event.preventDefault();
                document.getElementById('overlay').className = 'hidden';
                document.getElementById('header').className = 'showing';
                document.getElementById('sticky-note').className = 'showing';
                document.querySelector('#form #input1').className = 'showing';
                document.querySelector('#form #input2').className = 'showing';
                document.querySelector('#form #input3').className = 'showing';
                document.querySelector('#form #input4').className = 'showing';
                document.querySelector('#form #input5').className = 'showing';
                document.querySelector('#form #submit').className = 'showing';
                document.getElementById('list').className = 'showing';
                }
            });
                
            

            
        }

        
    

    });

    //Overlay
    

 


})();