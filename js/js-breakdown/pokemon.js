//-----------------------------------
// POKEMON
//-----------------------------------

// http://www.html5gamedevs.com/topic/368-learning-to-write-good-javascript-resources-for-beginners/

// http://buildnewgames.com/js-game-code-org/


// Feed AJAX into this?
var Pokemon = function(name, id, baseHp, type, img, naturalMoves) {
    this.name = name;
    this.id = id;
    this.baseHp = baseHp;
    // type needs to be able to deal with arrays for hybrids
    this.type = type;
    this.img = img;
    this.naturalMoves = naturalMoves;
    this.moveSet = {};
    this.level = 0;
    this.hp = 0;
    // evolve
    // learn moves at levels
};

Pokemon.prototype.maxHp = function() {
  // Fix this. Level needs to be same as base on lvl 1.
  if (this.level > 1) {
    return Math.floor( this.baseHp + (this.level * (this.baseHp * 0.07) - 1) );
  } else {
    return this.baseHp;
  }
};

var naturalMoves = {};

var moveMap = function(moves) {
  if(typeof moves === 'array') {
    var chosenMoves = {};
    for (var i = 0; i < moves.length; i+=1) {
      chosenMoves[move[moves[i]].name] = move[moves[i]];
    }
    return chosenMoves;
  }
}

var Charmander = function(level, moveSet) {
  naturalMoves = moveMap([move.scratch, move.growl, move.ember]);
  // {
  //   'Scratch': move.scratch,
  //   'Growl': move.growl,
  //   'Ember': move.ember
  // };
  Pokemon.call(this, 'Charmander', 004, 39, 'Fire', '/7/73/004Charmander.png/250px-004Charmander.png', naturalMoves, level);
  this.level = level;
  this.moveSet = moveSet;
}

var Squirtle = function(level, moveSet) {
  naturalMoves = {
    'Tackle': move.tackle,
    'Tail Whip': move.tailWhip,
    'Bubble': move.bubble
  };
  Pokemon.call(this, 'Squirtle', 007, 44, 'Water', '/3/39/007Squirtle.png/250px-007Squirtle.png', naturalMoves, level);
  this.level = level;
  this.moveSet = moveSet;
}

var Bulbasaur = function(level, moveSet) {
  naturalMoves = {
    'Tackle': move.tackle,
    'LeechSeed': move.tailWhip
  };
  Pokemon.call(this, 'Bulbasaur', 001, 45, ['Grass', 'Poison'], '/2/21/001Bulbasaur.png/250px-001Bulbasaur.png', naturalMoves, level);
  this.level = level;
  this.moveSet = moveSet;
}

// hp function didn't work until I included these. Work out why.
Charmander.prototype = Object.create(Pokemon.prototype);
Squirtle.prototype = Object.create(Pokemon.prototype);
Bulbasaur.prototype = Object.create(Pokemon.prototype);








// Pokemon.prototype.addMoves = function(moveSet) {
//   for(var i = 0; i < moveSet.length; i += 1) {
//     this.moves[moveSet[i]] = move[moveSet[i]];
//   }
// }
//
// var charmander = new Pokemon('Charmander', 004, 39, 'Fire', '/7/73/004Charmander.png/250px-004Charmander.png');
//
//
//
// var charmander = new Pokemon('Charmander', 004, 39, 'Fire', '/7/73/004Charmander.png/250px-004Charmander.png');
// charmander.addMoves(['Scratch', 'Growl', 'Ember']);
//
// var squirtle = new Pokemon('Squirtle', 007, 44, 'Water', '/3/39/007Squirtle.png/250px-007Squirtle.png');
// squirtle.addMoves(['Tackle', 'Tail Whip', 'Bubble']);
//
// var bulbasaur = new Pokemon('Bulbasaur', 001, 45, ['Grass', 'Poison'], '/2/21/001Bulbasaur.png/250px-001Bulbasaur.png');
// bulbasaur.addMoves(['Tackle', 'Growl', 'Leech Seed']);
//
// var pidgey = new Pokemon('Pidgey', 016, 40, ['Normal', 'Flying'], '/5/55/016Pidgey.png/250px-016Pidgey.png');
// pidgey.addMoves(['Tackle', 'Sand Attack']);


// console.log(charmander);
