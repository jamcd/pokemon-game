
// Enemy pokemon
var enemyPokemonImageContainer = document.getElementById('enemy-pokemon-image-container');
var enemyPokemonName = document.getElementById('enemy-pokemon-name');
var enemyPokemonLevel = document.getElementById('enemy-pokemon-level');
var enemyPokemonHpBar = document.getElementById('enemy-pokemon-hp-bar');
var enemyPokemonHp = document.getElementById('enemy-pokemon-hp');

// Player Pokemon
var playerPokemonImageContainer = document.getElementById('player-pokemon-image-container');
var playerPokemonName = document.getElementById('player-pokemon-name');
var playerPokemonLevel = document.getElementById('player-pokemon-level');
var playerPokemonHpBar = document.getElementById('player-pokemon-hp-bar');
var playerPokemonHp = document.getElementById('player-pokemon-hp');


var chosenElement = undefined, playerPokemonImage;

var createElement = function(tagName, className, content) {
    chosenElement = document.createElement(tagName);
    chosenElement.className = className;
    chosenElement.textContent = content;
}

var createImageElement = function(source, classIdName, width, height, alt) {
    newImg = document.createElement('img');
    newImg.setAttribute('src', source);
    newImg.className = classIdName;
    newImg.id = classIdName;
    newImg.setAttribute('width', width);
    newImg.setAttribute('height', height);
    newImg.setAttribute('alt', alt);
    return newImg;
}


var updatePokemonImage = function(pkmn, player) {
    if (player === true) {
        containerElement = playerPokemonImageContainer;
    } else if (player === false) {
        containerElement = enemyPokemonImageContainer;
    }
    containerElement.appendChild( createImageElement(pkmn.imgUrl, 'player-pokemon-image', 60, 60, pkmn.name) );
    // TODO FIX - wont always be player
    playerPokemonImage = document.getElementById('player-pokemon-image');
}
