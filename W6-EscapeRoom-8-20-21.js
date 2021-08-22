var readlineSync = require('readline-sync');
var playerName = readlineSync.question(`Alright? Give me ya handel? `);

var welcomeMessage = (`Welcome ${playerName} to the JavaScript Escape Room Simulation. Your goal is to escape out of this locked room. Be careful, one wrong choice and you're toast...`);
console.log(welcomeMessage);

var hasLife = true;
var hasKey = false;

while (hasLife == true){
    const menuOptions = readlineSync.keyIn(" Enter a number from the following options: \n 1. Put hand in hole \n 2. Find the key \n 3. Open the door \n Enter your selection: ", {limit: `$<1-3>`});
    console.log(menuOptions);
    if (menuOptions == 1){
        console.log (`Sorry ${playerName}, you're DEAD. Wanna play again? `);
        hasLife = false;
    }
    else if (menuOptions == 2 && hasKey == false) {
        console.log (`${playerName}, you've found the key. Keep going...you're 1 step closer to the way out.`);
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true) {
        console.log (`${playerName}, you already found the key. Hurry before it's too late!`);
    }
    else if (menuOptions == 3 && hasKey == false) {
        console.log (`${playerName}, this door is locked. Find the key to escape the room!`); 
    }
    else if (menuOptions == 3 && hasKey == true) {
        console.log (`Congratulations ${playerName}! You Escaped!`);
        hasLife = false;
    }   
};