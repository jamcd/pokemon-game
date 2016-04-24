//-----------------------------------
// POKEMON
//-----------------------------------

// http://www.html5gamedevs.com/topic/368-learning-to-write-good-javascript-resources-for-beginners/

// http://buildnewgames.com/js-game-code-org/


var naturalMoves = {},
    chosenMoves = {},
    nextLevel, nextLevelXp;

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
    this.maxHp = 0;
    this.xp = 0;
    // evolve - DONE
    // learn moves at levels
};

Pokemon.prototype.addXp = function(newXp) {
    this.xp += newXp;
}

Pokemon.prototype.learnMove = function (theMove) {
    if (Object.keys(this.moveSet).length < 4) {
        this.moveSet[theMove.name] = theMove;
        console.log(this.name + ' learned ' + theMove.name);
    }
    else if (confirm('delete a move to make space for ' + theMove.name)) {
        // Choose which move to delete
        var choice = prompt('which move should be forgotten?');
        // TODO Make the choice more obvious. List current moves?
        var reloop = false;

        do {
            if (choice === null) {
                console.log(this.name + ' did not learn ' + theMove.name);
                reloop = false;
            } else if (this.moveSet.hasOwnProperty([choice])) { // TODO && choice matches a move
                delete this.moveSet[choice]; // NOTE is delete a good choice?
                this.moveSet[theMove.name] = theMove;
                console.log(this.name + ' forgot ' + choice);
                console.log(this.name + ' learned ' + theMove.name);
                reloop = false;
            } else {
                alert('Please chooose a valid move to forget');
                choice = prompt('which move should be forgotten?');
                reloop = true;
            }
        } while (reloop === true);
    }
};

Pokemon.prototype.learnNaturalMoveCheck = function () {
    // add modal for confirmation of wanting to learn move
    for(moveName in this.naturalMoves) {
        if (this.level === this.naturalMoves[moveName].level) {
            this.learnMove(this.naturalMoves[moveName])
            // confirm('delete a move to make space for ' + naturalMoves[moveName].name);
            // this.moveSet[moveName] = this.naturalMoves[moveName];
        }
    }
};

Pokemon.prototype.levelUpCheck = function() {

    nextLevel = this.level + 1;
    nextLevelXp = Math.pow(nextLevel, 3); // Level calculation based on Medium-Fast exp group

    while (this.xp >= nextLevelXp) {
        this.level += 1; // Level up
        console.log(this.name + ' grew to level ' + this.level);
        this.learnNaturalMoveCheck();
        // Prepare for next check
        nextLevel += 1;
        nextLevelXp = Math.pow(nextLevel, 3);
    }
}

Pokemon.prototype.calculateMaxHp = function() {
    if (this.level > 1) {
        this.maxHp = Math.floor( this.baseHp + (this.level * (this.baseHp * 0.07) - 1) );
    } else {
        this.maxHp = this.baseHp;
    }
};



var Charmander = function(level, moves) {
    naturalMoves = moveMap([
        ['scratch', 1],
        ['growl', 1],
        ['ember', 7]
    ]);
    Pokemon.call(this, 'Charmander', 004, 39, 'Fire', '/7/73/004Charmander.png/250px-004Charmander.png', naturalMoves);
    this.level = level;
    this.moveSet = moveMap(moves);
}

var Squirtle = function(level, moveSet) {
    naturalMoves = moveMap([
        ['tackle', 1],
        ['tailWhip', 4],
        ['bubble', 7]
    ]);
    Pokemon.call(this, 'Squirtle', 007, 44, 'Water', '/3/39/007Squirtle.png/250px-007Squirtle.png', naturalMoves);
    this.level = level;
    this.moveSet = moveMap(moves);
}

var Bulbasaur = function(level, moveSet) {
    naturalMoves = moveMap([
        ['tackle', 1],
        ['growl', 4],
        ['leechSeed', 7]
    ]);
    Pokemon.call(this, 'Bulbasaur', 001, 45, ['Grass', 'Poison'], '/2/21/001Bulbasaur.png/250px-001Bulbasaur.png', naturalMoves);
    this.level = level;
    this.moveSet = moveMap(moves);
}

var Pidgey = function(level, moveSet) {
    naturalMoves = moveMap([
        ['tackle', 1],
        ['sandAttack', 5]
    ]);
    Pokemon.call(this, 'Pidgey', 016, 40, ['Normal', 'Flying'], '/5/55/016Pidgey.png/250px-016Pidgey.png', naturalMoves);
    this.level = level;
    this.moveSet = moveMap(moves);
}

// hp function didn't work until I included these. Work out why.
Charmander.prototype = Object.create(Pokemon.prototype);
Squirtle.prototype = Object.create(Pokemon.prototype);
Bulbasaur.prototype = Object.create(Pokemon.prototype);
Pidgey.prototype = Object.create(Pokemon.prototype);




// Pokemon.prototype.addMoves = function(moveSet) {
//   for(var i = 0; i < moveSet.length; i += 1) {
//     this.moves[moveSet[i]] = move[moveSet[i]];
//   }
// }

// console.log(charmander);
