
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
// testt = createImageElement('resources/fire-red-pokemon-sprite.png', 'player-pokemon-image', 60, 60, pkmn.name);
// playerPokemonImageContainer.appendChild( testt );

var testt;
var updatePokemonImage = function(pkmn, player) {
    if (player === true) {
        testt = createImageElement('resources/fire-red-pokemon-sprite.png', 'player-pokemon-image', 60, 60, pkmn.name);
        playerPokemonImageContainer.appendChild( testt );
    } else if (player === false) {
        enemyPokemonImageContainer.appendChild( createImageElement(pkmn.imgUrl, 'enemy-pokemon-image', 60, 60, pkmn.name) );
    }
    // TODO FIX - wont always be player
    // playerPokemonImage = document.getElementById('player-pokemon-image');
}





var numberTest = 3;
var baseNumber = 0;

var baseX, columnX, spriteX, rowY, spriteY,
    check75, check15, check3,
    tileSizeX = 161;
    tileSizeY = 65;

var mapToSprite = function(idNumber) {

    check75 = idNumber % 75,
    check15 = idNumber % 15,
    check3 = idNumber % 3;

    // X COORDINATES
    // ----------------------------

    // Set base value of X coordinate
    // This adjusts the formula to work with the 2 grids + mew
    if (idNumber <= 75) {
        baseX = 0;
    } else if (idNumber <= 150) {
        baseX = tileSizeX * 5;
    } else if (idNumber === 151) {
        baseX = tileSizeX * 10;
    }

    // Find the column of 3, out of the 15 in the row
    if(check15 > 0 && check15 <= 3) {
        columnX = 0;
    } else if(check15 > 3 && check15 <= 6) {
        columnX = tileSizeX * 1;
    } else if(check15 > 6 && check15 <= 9) {
        columnX = tileSizeX * 2;
    } else if(check15 > 9 && check15 <= 12) {
        columnX = tileSizeX * 3;
    } else if(check15 === 0 || (check15 > 12 && check15 <= 14)) {
        columnX = tileSizeX * 4;
    }

    // Adding grid X to column X, plus the size of the border
    spriteX = (baseX + columnX) + 1;

    // Y COORDINATES
    // ----------------------------

    // Find the row of 15, out of the 75 in the grid
    if(check75 > 0 && check75 <= 15){
        rowY = 1;
    } else if(check75 > 15 && check75 <= 30) {
        rowY = 2;
    } else if(check75 > 30 && check75 <= 45) {
        rowY = 3;
    } else if(check75 > 45 && check75 <= 60) {
        rowY = 4;
    } else if(check75 === 0 || (check75 > 60 && check75 <= 74)) {
        rowY = 5;
    }

    spriteY = ((tileSizeY * 3) * (rowY - 1)) + (rowY * 2) -1;

    // Find the row, out of the 3 in the column
    if(check3 === 0) {
        spriteY += tileSizeY * 2;
    } else {
        spriteY += tileSizeY * (check3 - 1);
    }


    spriteX *= -1;
    spriteY *= -1;

    return spriteX + 'px ' + spriteY + 'px';

}

// playerPokemonImageContainer.style.backgroundPosition =  mapToSprite(004);
