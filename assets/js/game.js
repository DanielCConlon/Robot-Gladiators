var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {

    while(enemyHealth > 0 && enemyHealth > 0) {

        //ask player if they'd like to fight or run

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        }

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        } // end of if yes to skip

        //generate random damage value based on player's attack power
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        }

        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttck variable
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");

            //leave while() loop if player has died
            break;
        }

        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    }// end of while loop

}; //end of fight function

//fight();

//function to start a new game
var startGame = function() {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++){

        //if player is still alive, keep fighting
        if (playerHealth > 0){
            //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Galdiators! Round " + (i + 1));

            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            // enemyHealth = Math.floor(Math.random() * 21) + 40;
            enemyHealth = randomNumber(40, 60);

            //use debugger to pause script from running and check what's going on at the moment in code
            //debugger;

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                //call fight function with enemy-robot

        fight(pickedEnemyName);
        }

        //if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length -1){
            //ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

            //if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }

        }

        //if player isn't alive, stop the game
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }//end of the if statement

    } //end of for loop

    //after the loops ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();

    //play again
    startGame();

}; // end of startGame function

//function to end the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now hace a score of " + playerMoney + ".");
    }

    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

    //window.alert("The game has now ended. Let's see how you did!");
};

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt){
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 doillars.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;

        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money!");
            }

            break;

        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }

    //console.log("entered the shop");
};

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};



//start the game when the page loads
startGame();

