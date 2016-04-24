var currentPokemon, currentEnemyPokemon;

var battle = function(player, enemy) {

  // console.log(player.carriedPokemon);
  currentPokemon = player.carriedPokemon[0];
  currentEnemyPokemon = enemy.carriedPokemon[0];

  console.log(enemy.name + ' sent out ' + currentEnemyPokemon);
  console.log(player.name + ' sent out ' + currentPokemon);

  // Menu - move, item, change PKmn, run
  // select move

  var reloop;

  do {
      console.log('reloop = ' + reloop);
      reloop = false;
      var battleChoice = prompt('Choose: Move, Item, Switch, Run');

      switch (battleChoice) {
          case 'Move':
            //   moveSelect();
            console.log('selected move');
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
              if (confirm('Please choose a valid option') != null) {
                //   reloop = true;
              }
      }
      reloop = false;
      
  } while (reloop === true);

}



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
