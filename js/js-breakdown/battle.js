var currentPlayerPokemon, currentEnemyPokemon, reloop, selectMove,
playerChosenMove, enemyMoves, enemyChosenMove, count, i, battleEnd = false,
pokemonFound = false;

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

        if (defendPkn.owner === currentPlayer) {
            faint(defendPkn);
        } else if (defendPkn.owner === enemyPlayer) {
            enemyFaint(defendPkn);
        }

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

    if (count < 1) {
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
            pokemonFound = false;
            pknChoice = prompt('Select Pokemon: ' + pknList);
            console.log('You chose ' + pknChoice);

            for (i = 0; i < currentPlayer.carriedPokemon.length; i+=1) {
                if (currentPlayer.carriedPokemon[i].name === pknChoice) {
                    currentPlayerPokemon = currentPlayer.carriedPokemon[i];
                    pokemonFound = true;
                    break;
                }
            }

            if (pokemonFound === true) {
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
    // TODO Adapt for wild pokemon, not trainer battles
    console.log('\u26E8 ' + faintedPkn.name + ' fainted');
    count = 0, pokemonFound = false;
    for (i = 0; i < enemyPlayer.carriedPokemon.length; i+=1) {
        if (enemyPlayer.carriedPokemon[i].hp >= 1) {
            currentEnemyPokemon = enemyPlayer.carriedPokemon[i];
            pokemonFound = true;
            break;
        }
    }

    // Gain XP
    // TODO feed in real XP amount
    // TODO make sure all pokemon that battled the fainted pokemon gain XP
    // Enemy Experience Stat * Enemy Level Stat * Enemy Tame Stat / 7 = Exp - http://www.psypokes.com/lab/expguide.php
    // http://bulbapedia.bulbagarden.net/wiki/Experience (formula near the middle of the page)

    // NOTE You can either times the 7 by the number of pokemon that faught and haven't fainted
    // Or you can divide the whole result between them (for loop?)

    // TODO Add exp yield for each pokemon (experience stat)
    // http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_effort_value_yield

    // var battleXp = currentEnemyPokemon.level *

    currentPlayerPokemon.addXp();

    if (pokemonFound === true) {
        // next pokemon
        console.log('\u2686 ' + enemyPlayer.name + ' sent out ' + currentEnemyPokemon.name);
        actionSelect();
    } else {
        wonBattle();
    }

}

var blackout = function() {
    console.log('--------- --------- --------- ---------');
    console.log('\u26E8 \u26E8 \u26E8 ' + currentPlayer.name + ' blacked out');
    console.log('--------- --------- --------- ---------');
    battleEnd = true;
}

var wonBattle = function() {
    console.log('--------- --------- --------- ---------');
    console.log('★ ' + currentPlayer.name + ' defeated ' + enemyPlayer.name);
    console.log('--------- --------- --------- ---------');
    // TODO dipslay a message from trainer and about money won?
    battleEnd = true;
}

var battle = function(player, enemy) {
    // Should battle be a class, with instances?
    // That way the functions wouldn't have to be remade every time?

    // UNICODE SYMBOLS
    // http://graphemica.com/blocks/miscellaneous-symbols
    // http://graphemica.com/blocks/miscellaneous-symbols

    // ----------- TESTING ------------------- //
    console.log('\u2694');
    /*
    Tail Whip
    */
    // console.log(defendPkn);

    // Making sure player has pokemon alive
    // (may not be needed, because the player would have blacked out if they didn't)

    currentPlayerPokemon = false;

    // NOTE This is duplicated in faint and enemy faint
    // TODO Make it reusable
    for (i = 0; i < player.carriedPokemon.length; i+=1) {
        if(player.carriedPokemon[i].hp >= 1) {
            currentPlayerPokemon = player.carriedPokemon[i];
            break;
        }
    }

    if(currentPlayerPokemon !== false) {

        currentEnemyPokemon = enemy.carriedPokemon[0];

        // Battle dialog
        console.log('\u2686 ' + enemy.name + ' sent out ' + currentEnemyPokemon.name);
        console.log('\u2686 ' + player.name + ' sent out ' + currentPlayerPokemon.name);

        // Battle loop
        do {
            actionSelect();
        } while (battleEnd === false);

    }

} // END BATTLE
