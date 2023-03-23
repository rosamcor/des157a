(function () {
    "use strict";
    console.log("reading js");
    
    const startPage = document.getElementById('start-page');
    const startGame = document.getElementById('startgame');
    const gamePage = document.getElementById('game-page');
    const gameTitle = document.getElementById('game-title');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    
    let score = document.getElementById('score');
    let actionArea = document.getElementById('actions');

    //Sounds created by Rosaamelia Cordova
    const rollSound = new Audio('sounds/dice-roll.m4a');
    const passSound = new Audio('sounds/pass.m4a');






    // Keeping Track of Data w/ Object
    let gameData = {
        dice: ['images/one.jpg', 'images/two.jpg', 'images/three.jpg', 'images/four.jpg', 'images/five.jpg', 'images/six.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,            //Keeps track of which player is playing
        gameEnd: 29     //Sets threshold for winning

    };

    startGame.addEventListener("click", function(){
        // randomly set game index below
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gamePage.className = "showing";
        startPage.className = "hidden";
        
        gameTitle.innerHTML = 'Piggy Time!';
        gameControl.innerHTML += '<a id="quit">Quit</a>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });
        
        setUpTurn();
        console.log("set up the turn!");

        //Sets content of game & eventhandler for dice roll button
        function setUpTurn() {
            game.innerHTML = `<p> ${gameData.players[gameData.index]}, roll the dice</p>`;
            actionArea.innerHTML = '<button id="roll">Roll Dice</button>';
            document.getElementById('roll').addEventListener('click', function() {

                throwDice();
                console.log("roll the dice!");

            })
            //Sound for Roll
            document.getElementById('roll').addEventListener('mousedown', function(){
                rollSound.play();
            });
        }

        //Throwing Dice
        function throwDice(){
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random() * 6) + 1; // using ciel would result in zero
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p>${gameData.players[gameData.index]} Decide. . .</p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                                <img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;

            //if two 1's are rolled...
            if( gameData.rollSum === 2) {
                console.log("snake eyes were rolled");
                game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index  = 0) : (gameData.index = 1);
                //Show the current score
                setTimeout(setUpTurn,6000);
                showCurrentScore();
            }
            //if either die is a 1...
            else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                console.log("one of the two dice was a 1");
                gameData.index ? (gameData.index  = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 6000);
            }
            //if neither die is a 1...
            else{
                console.log("the game proceeds");
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="pass">Pass</button> <button id="rollagain">Roll</button> ';

                document.getElementById('rollagain').addEventListener('click', function () {
                    setUpTurn();
                });

                //Sound for Roll Again
                document.getElementById('rollagain').addEventListener('mousedown', function(){
                    rollSound.play();
                });

                document.getElementById('pass').addEventListener('click', function (){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });

                //Sound for Pass
                document.getElementById('pass').addEventListener('mousedown', function(){
                    passSound.play();
                });

                //Check winning condition
                checkWinningCondition();


            }
            
        }

        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd) {
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?";
            }
            else{
                //show current score
                score.innerHTML = `<p><strong>${gameData.players[0]}  score: ${gameData.score[0]}</strong> <br><br> <strong>${gameData.players[1]}  score: ${gameData.score[1]}</strong></p>`;
            }

           
        }
        
        function showCurrentScore() {
            score.innerHTML = `<p><strong>${gameData.players[0]}  score: ${gameData.score[0]}</strong> <br><br> <strong>${gameData.players[1]}  score: ${gameData.score[1]}</strong></p>`;
        }

        




    });


    
    

  

    



})();