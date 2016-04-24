var currentPlayerPokemon, currentEnemyPokemon;

var battle = function(player, enemy) {
    // Should battle be a class, with instances?
    // That way the functions wouldn't have to be remade every time?

    currentPlayerPokemon = player.carriedPokemon[0];
    currentEnemyPokemon = enemy.carriedPokemon[0];

    console.log(enemy.name + ' sent out ' + currentEnemyPokemon.name);
    console.log(player.name + ' sent out ' + currentPlayerPokemon.name);

    // Menu - move, item, change PKmn, run
    // select move

    var reloop, selectMove;

    var moveSelect = function() {

        reloop = false;
        do {
            chosenMove = prompt('Select move: ' + Object.getOwnPropertyNames(currentPlayerPokemon.moveSet));

            if (currentPlayerPokemon.moveSet.hasOwnProperty(chosenMove)) {
                console.log('SUCCESS - ' + chosenMove + ' has been chosen');
                // Attack enemy / Work out who attacks first etc.
                attackChosen();
            } else {
                console.log('ERROR - Invalid move chosen');
                if (confirm('Invalid move chosen. Press cancel to go back') === false) {
                    return actionSelect(chosenMove);
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
                    moveSelect();
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
        var playerChosenMove = currentPlayerPokemon.moveSet.chosenMove;
        var enemyChosenMove = currentPlayerPokemon.moveSet.;

        if (playerChosenMove.speed >= currentEnemyPokemon.moveset.)
        // for yours and enemy's turn:
        // take away PP
        // effect health of yours and enemy's pkmn
        // apply any after effects (e.g. sleep)
        // check if either pokemon have fainted (create a 'faint' method?)

        // run next turn choice
        // actionSelect();
    }

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
