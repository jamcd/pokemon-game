// (function() {

  // Code for scoping fix.

  // // Global object for the game
  // window.game = {};
  //
  // // Player property added for player.js to use
  // game.player = {};


  // Create current players
  var currentPlayer = new Player('Jamie');
  var enemyPlayer = new Player('Gary Oak');

  currentPlayer.addPokemonToParty( new Charmander(20, ['ember', 'scratch', 'tailWhip'], currentPlayer) );
  currentPlayer.addPokemonToParty( new Bulbasaur(20, ['tackle', 'leechSeed'], currentPlayer) );

  enemyPlayer.addPokemonToParty( new Squirtle(20, ['tackle', 'bubble', 'tailWhip'], enemyPlayer) );
  enemyPlayer.addPokemonToParty( new Pidgey(20, ['tackle', 'sandAttack'], enemyPlayer) );


  // AFTER BATTLE FUNCTIONS (and run once before at the start of game?)
  //
  var testPokemon = currentPlayer.carriedPokemon[0];
  testPokemon.addXp(1000);
  testPokemon.levelUpCheck();
  testPokemon.calculateMaxHp();
  // console.log(testPokemon.moveSet);

  // ADDING TO BAG
  //
  currentPlayer.addItemToBag(new PokeBall());
  currentPlayer.addItemToBag(new GreatBall());
  currentPlayer.addItemToBag(new MasterBall());
  // console.log(currentPlayer.bag);

  // battle PP test
  currentPlayer.carriedPokemon[0].moveSet['Ember'].pp = 0;

  // BATTLE
  //
  currentPlayerPokemon = currentPlayer.carriedPokemon[0];
  playerPokemonImageContainer.style.backgroundPosition = currentPlayerPokemon.bgPosition;

  battle(currentPlayer, enemyPlayer);


  // TODO pokemon sprites!!!
  // http://www.spriters-resource.com/game_boy_advance/pokemonfireredleafgreen/
  // http://www.spriters-resource.com/game_boy_advance/pokemonfireredleafgreen/
  // http://www.spriters-resource.com/game_boy_advance/pokemonfireredleafgreen/

  // http://chaoticcherrycake.deviantart.com/art/Pokemon-Tileset-From-Public-Tiles-358379026


  // TODO Read about game loops and timers
  // http://www.isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
  // https://developer.mozilla.org/en-US/docs/Games/Anatomy



// Use Phaser for quicker game development? http://phaser.io/tutorials/getting-started/index

  // Wild pokemon have the same xp as the base of their level (aka their level cubed)


  // Level testing
  // currentPlayer.addPokemonToParty( new Charmander(0, ['bubble', 'tailWhip']) );
  // currentPlayer.addPokemonToParty( new Charmander(10, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(20, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(30, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(40, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(50, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(60, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(70, ['bubble']) );
  // currentPlayer.addPokemonToParty( new Charmander(80, ['bubble']) );

  // PRINT INFORMATION ON CURRENT PLAYER'S POKEMON
  //
  // for (var i = 0; i < currentPlayer.carriedPokemon.length; i+=1) {
  //   currentPlayer.carriedPokemon[i].calculateMaxHp();
  //   console.log(currentPlayer.carriedPokemon[i].baseHp +
  //     ' - lvl ' + currentPlayer.carriedPokemon[i].level +
  //     ' - hp ' + currentPlayer.carriedPokemon[i].maxHp);
  // }

  // currentPlayer.addPokemonToParty(new Charmander(25, [move['Ember']]));
  // currentPlayer.addPokemonToParty(new Squirtle(54, [move['Bubble']]));
  // currentPlayer.addPokemonToParty(new Bulbasaur(33, [move['Tail Whip']]));

// }());
