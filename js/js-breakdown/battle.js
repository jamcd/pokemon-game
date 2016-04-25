var currentPlayerPokemon, currentEnemyPokemon, reloop, selectMove;

var chooseRandomMove = function(pokemonMoves) {
    return pokemonMoves[Math.floor(Math.random() * pokemonMoves.length)];
}

var moveSelect = function() {

    reloop = false;
    do {
        chosenMove = prompt('Select move: ' + Object.getOwnPropertyNames(currentPlayerPokemon.moveSet));

        if (currentPlayerPokemon.moveSet.hasOwnProperty(chosenMove)) {
            if (currentPlayerPokemon.moveSet[chosenMove].pp >= 1) {
                console.log('SUCCESS - ' + chosenMove + ' has been chosen');
                // Attack enemy / Work out who attacks first etc.
                attackChosen();
            } else {
                alert(chosenMove + ' has no PP left');
                reloop = true;
            }
        } else if (chosenMove === null) {
            return actionSelect();
        } else {
            console.log('ERROR - Invalid move chosen');
            if (confirm('Invalid move chosen. Press cancel to go back') === false) {
                return actionSelect();
            }
            reloop = true;
        }
    } while (reloop === true);
};

var actionSelect = function() {

    reloop = false;
    do {
        switch (prompt('Choose: Move, Item, Switch, Run')) {
            case 'Move':
                console.log('selected move');
                return moveSelect();
                break;
            case 'Item':
                //   chooseItem();
                console.log('selected item');
                break;
            case 'Switch':
                //   changePokemon();
                console.log('selected switch');
                break;
            case 'Run':
                //   runFromBattle();
                console.log('selected run');
                break;
            default:
                if (confirm('Please choose a valid option') === false) {
                    return false; // break out of battle??
                } else {
                    reloop = true;
                }
        }
        // reloop = false;

    } while (reloop === true);
}

var playerChosenMove, enemyMoves, enemyChosenMove;

var attackChosen = function(chosenMove) {
    // idea
    // if ((player.moveSpeed + player.pokemonSpeed) >= (enemy.moveSpeed + enemy.pokemonSpeed)) {
    //     run player attack
    //     run effect on player + enemy
    //     run enemy attack (if still alive, not asleep etc.)
    // } else {
    //     run enemy attack
    //     run effect on player + enemy
    //     run player attack (if still alive, not asleep etc.)
    // }

    playerChosenMove = currentPlayerPokemon.moveSet[chosenMove];

    enemyMoves = Object.keys(currentEnemyPokemon.moveSet);
    enemyChosenMove = chooseRandomMove(enemyMoves);
    enemyChosenMove = currentEnemyPokemon.moveSet[enemyChosenMove];

    console.log(enemyChosenMove);
    console.log(enemyMoves);
    console.log(enemyMoves[Math.floor(Math.random()*enemyMoves.length)]);
    console.log(enemyChosenMove);

    // if (playerChosenMove.speed >= currentEnemyPokemon.moveset)

    // for yours and enemy's turn:
    // take away PP
    // effect health of yours and enemy's pkmn
    // apply any after effects (e.g. sleep)
    // check if either pokemon have fainted (create a 'faint' method?)

    // run next turn choice
    // actionSelect();
}

var battle = function(player, enemy) {
    // Should battle be a class, with instances?
    // That way the functions wouldn't have to be remade every time?

    currentPlayerPokemon = player.carriedPokemon[0];
    currentEnemyPokemon = enemy.carriedPokemon[0];

    // Battle dialog
    console.log(enemy.name + ' sent out ' + currentEnemyPokemon.name);
    console.log(player.name + ' sent out ' + currentPlayerPokemon.name);


    actionSelect();

} // END BATTLE



// var player1 = new Player('Jamie');
//
// console.log(Charmander);
// var charmander1 = charmander;
// player1.carriedPokemon = [charmander1, squirtle];
// console.log(player1.carriedPokemon[0].hp);
// charmander.hp = 3;
// console.log(player1.carriedPokemon[0].hp);

// battle();

// PROBLEM
// Both Pokemon and the individual pokemon (e.g. Charmander) need to be classes.
// Remember, JS is a prototypal language, not class based.
//
