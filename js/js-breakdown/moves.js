
// Constructor for pokemon moves
// May not be needed because pokemon will be declared with their own individual moves for now
var PokemonMove = function (name, type, power, accuracy, pp) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.accuracy = accuracy;
    this.pp = pp;
};

var move = {}; // object for moves to be defined inside

// Pass in array of move names, with optional second parameter for each as the level it's learnt at.
// NOTE there is probably a better way to do this. Especially the level parameter.
var moveMap = function(moves) {
    chosenMoves = {}; // quick fix. improve so that the chosenMoves value isnt remembered when the function is finished
    if(moves.constructor === Array) { // check if its an array
        for (var i = 0; i < moves.length; i+=1) {
            if(moves[i].constructor === Array) { // if the level is defined
                chosenMoves[move[moves[i][0]].name] = move[moves[i][0]];
                chosenMoves[move[moves[i][0]].name].level = moves[i][1];
            } else {
                chosenMoves[move[moves[i]].name] = move[moves[i]];
            }
        }
        return chosenMoves;
    }
}

// DEFINING POKEMON MOVES
// name, type, power, accuracy, pp
move.tackle = new PokemonMove('Tackle', 'Normal', 50, 95, 35);
move.sandAttack = new PokemonMove('Sand Attack', 'Ground', 0, 100, 15);
move.scratch = new PokemonMove('Scratch', 'Normal', 40, 100, 35);
move.growl = new PokemonMove('Growl', 'Normal', 0, 100, 40);
move.ember = new PokemonMove('Ember', 'Fire', 40, 100, 25);
move.tailWhip = new PokemonMove('Tail Whip', 'Normal', 0, 100, 30);
move.bubble = new PokemonMove('Bubble', 'Water', 20, 100, 30);
move.leechSeed = new PokemonMove('Leech Seed', 'Grass', 0, 90, 10);


// Should moves be a class?
// there would be a lot of classes
// it won't overcrowd the app with lots of classes
//
//
