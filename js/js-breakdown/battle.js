var currentPlayerPokemon, currentEnemyPokemon, reloop, selectMove,
    playerChosenMove, enemyMoves, enemyChosenMove, count, i, blackedOut = false;

var chooseRandomMove = function(pokemonMoves) {
    return pokemonMoves[Math.floor(Math.random() * pokemonMoves.length)];
}

var actionSelect = function() {

    // TEMPORARILY SKIPPING - FOR TESTING
    return moveSelect();
    // TEMPORARILY SKIPPING - FOR TESTING

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

var moveSelect = function() {

    // TEMPORARILY SKIPPING - FOR TESTING
    chosenMove = prompt('Select move: ' + Object.getOwnPropertyNames(currentPlayerPokemon.moveSet));
    return attackChosen(chosenMove);
    // TEMPORARILY SKIPPING - FOR TESTING

    reloop = false;
    do {
        chosenMove = prompt('Select move: ' + Object.getOwnPropertyNames(currentPlayerPokemon.moveSet));

        if (currentPlayerPokemon.moveSet.hasOwnProperty(chosenMove)) {
            if (currentPlayerPokemon.moveSet[chosenMove].pp >= 1) {
                console.log('SUCCESS - ' + chosenMove + ' has been chosen');
                // Attack enemy / Work out who attacks first etc.
                attackChosen(chosenMove);
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

    if (currentPlayerPokemon.speed > currentEnemyPokemon.speed) {
        // console.log(currentPlayerPokemon.speed);
        // console.log(currentEnemyPokemon.speed);

        // Run attack
        attack(currentPlayerPokemon, currentEnemyPokemon, playerChosenMove);
        // Faint?
        // IF enemy is still alive
        if (currentEnemyPokemon.hp >= 1) {
            attack(currentEnemyPokemon, currentPlayerPokemon, enemyChosenMove);
        }
    } else {
        // Run attack
        attack(currentEnemyPokemon, currentPlayerPokemon, enemyChosenMove);
        // Faint?
        // IF enemy is still alive
        if (currentPlayerPokemon.hp >= 1) {
            attack(currentPlayerPokemon, currentEnemyPokemon, playerChosenMove);
        }
    }

    // console.log(enemyChosenMove);
    // console.log(enemyMoves);
    // console.log(enemyMoves[Math.floor(Math.random()*enemyMoves.length)]);
    // console.log(enemyChosenMove);

    // for yours and enemy's turn:
    // take away PP
    // effect health of yours and enemy's pkmn
    // apply any after effects (e.g. sleep)
    // check if either pokemon have fainted (create a 'faint' method?)

    // run next turn choice
    // actionSelect();

    // TODO deal with attacks that change attack order (e.g. always attack first/last)
    // TODO deal with in-game stat changes
}

var attack = function(attackPkn, defendPkn, attackMove) {

    // IMPORTANT TODO - Using currentPlayerPokemon is not ideal. This will change when the pokemon faints or switches??

    // TODO NOT WORKING
    console.log('---------');
    console.log('\u2694 \u2694 \u2694 ' + attackPkn['name'] + ' used ' + attackMove['name']);
    console.log('---------');
    console.log(defendPkn['name'] + ' HP before = ' + defendPkn.hp);
    if (defendPkn.hp - attackMove.power < 1) {
        defendPkn.hp = 0;
        faint(defendPkn);
    } else {
        defendPkn.hp -= attackMove.power;
        console.log(defendPkn['name'] + ' HP after = ' + defendPkn.hp);
    }
}

var faint = function(faintedPkn) {
    console.log('\u26E8 ' + faintedPkn.name + ' fainted');
    count = 0;
    for (i = 0; i < currentPlayer.carriedPokemon.length; i+=1) {
        count += currentPlayer.carriedPokemon[i].hp;
    }

    if (count >= 1) {
        blackout();
    } else if (confirm(faintedPkn.name + ' fainted. Use next Pokemon?') === true) {
        var pknList = '', pknChoice, reloop;
        count = 0;
        for (i = 0; i < currentPlayer.carriedPokemon.length; i+=1) {
            if (currentPlayer.carriedPokemon[i].hp >= 1) {
                count += 1;
                pknList += count + '. ' + currentPlayer.carriedPokemon[i].name + ' ';
            }
        }
        // TODO make fainted pokemon unavailable.
        do {
            reloop = false;
            pknChoice = prompt('Select Pokemon: ' + pknList);
            console.log(pknChoice);
            console.log(currentPlayer.carriedPokemon[pknChoice.toLowerCase()]);
            if (currentPlayer.carriedPokemon.hasOwnProperty(pknChoice.toLowerCase())) {
                currentPlayerPokemon = currentPlayer.carriedPokemon[pknChoice];
                console.log('\u2686 ' + currentPlayer.name + ' sent out ' + currentPlayerPokemon.name);
                actionSelect();
            } else {
                console.log('ERROR - Invalid pokemon chosen');
                // reloop = true;
            }
        } while (reloop === true);
    }
}

var enemyFaint = function(faintedPkn) {
    console.log('enemy faint');
}

var blackout = function() {
    console.log('--------- --------- --------- ---------');
    console.log('\u26E8 \u26E8 \u26E8 ' + currentPlayer.name + ' blacked out');
    console.log('--------- --------- --------- ---------');
    blackedOut = true;
}

var battle = function(player, enemy) {
    // Should battle be a class, with instances?
    // That way the functions wouldn't have to be remade every time?

    // UNICODE SYMBOLS
    // http://graphemica.com/blocks/miscellaneous-symbols
    // http://graphemica.com/blocks/miscellaneous-symbols

    // Unicode testing
    console.log('\u2694');

    // Move testing
    /*
    Tail Whip
    */

    currentPlayerPokemon = player.carriedPokemon[0];
    currentEnemyPokemon = enemy.carriedPokemon[0];

    // Battle dialog
    console.log('\u2686 ' + enemy.name + ' sent out ' + currentEnemyPokemon.name);
    console.log('\u2686 ' + player.name + ' sent out ' + currentPlayerPokemon.name);

    do {
        actionSelect();
    } while (blackedOut === false   );

} // END BATTLE
