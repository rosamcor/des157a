(function () {
    "use strict";
    console.log("reading js");
    
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    let score = document.getElementById('score');
    let actionArea = document.getElementById('actions');

    // Keeping Track of Data w/ Object
    let gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
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

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });
        
        setUpTurn();
        console.log("set up the turn!");

        //Sets content of game & eventhandler for dice roll button
        function setUpTurn() {
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
            document.getElementById('roll').addEventListener('click', function() {
                throwDice();
                console.log("roll the dice!");

            })
        }

        //Throwing Dice
        function throwDice(){
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random() * 6) + 1; // using ciel would result in zero
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
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
                setTimeout(setUpTurn,2000);
                showCurrentScore();
            }
            //if either die is a 1...
            else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                console.log("one of the two dice was a 1");
                gameData.index ? (gameData.index  = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
            }
            //if neither die is a 1...
            else{
                console.log("the game proceeds");
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

                document.getElementById('rollagain').addEventListener('click', function () {
                    setUpTurn();
                });

                document.getElementById('pass').addEventListener('click', function (){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
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
                score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
                ${gameData.score[1]}</strong></p>`;
            }

           
        }
        
        function showCurrentScore() {
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
            ${gameData.score[1]}</strong></p>`; 
        }

        




    });





})();