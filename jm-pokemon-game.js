"use strict";

(function (factory) {

    //-----------------------------------
    // DECLARING VARIABLES
    //-----------------------------------

    var userNameInput = document.getElementById("user-name");
    var userName = '';
    var nameConfirmBtn = document.getElementById("submit-name");
    var pokemonSelectContainer = document.getElementById("starting-pokemon-select");
    var setNameContainer = document.getElementById("set-name");
    var inputError = document.getElementsByClassName("input-error")[0];
    var starterPokemonOptions = document.getElementsByClassName("pokemon-select-option");
    var chooseStarterPokemonError = document.getElementById('chooseStarterPokemonError');
    var player;

    // Should this be declared in the chooseStarterPokemon function?
    // Moved to here because it stops the program creating a new variable everytime the function is run. But does the variable need to be global?
    var chosenPokemon = '';


    // Put this into a JSON file and use AJAX
    var charmander = {
        name: 'charmander',
        moves: {
            'Scratch': {
                power: 40,
                accuracy: 100
            },
                'Inferno': {
                power: 100,
                accuracy: 50
            }
        },
        hp: 188
    };

    var squirtle = {
        name: 'squirtle',
        moves: {
            'Tackle': {
                power: 50,
                accuracy: 100
            },
                'Mega Punch': {
                power: 80,
                accuracy: 85
            }
        },
        hp: 198
    };

    var bulbasaur = {
        name: 'bulbasaur',
        moves: {
            'Tackle': {
                power: 50,
                accuracy: 100
            },
                'Seed Bomb': {
                power: 80,
                accuracy: 100
            }
        },
        hp: 200
    };



    //-----------------------------------
    // RUN THE GAME
    //-----------------------------------

    function PokemonGame() {
        // Build canvas here
    };



    //-----------------------------------
    // POKEMON
    //-----------------------------------

    // Feed AJAX into this?
    function Pokemon(name, id, moves, hp) {
        this.name = name;
        this.id = id;
    };

    // Constructor for pokemon moves
    // May not be needed because pokemon will be declared with their own individual moves for now
    Pokemon.prototype.PokemonMoves = function (moves, attackName, attackPoints, attackAccuracy) {
        this.attackName = attackName;
        this.attackPoints = attackPoints;
        this.attackAccuracy = attackAccuracy;
    };

    // Pokemon attack
    Pokemon.prototype.Attack = function (attackName) {
        this.pokemonMoves(attackName)
    };



    //-----------------------------------
    // THE PLAYER
    //-----------------------------------

    // Register current player
    // No need to use prototypes to add methods, because only one should be created
    var CurrentPlayer = function (playerName) {
        this.playerName = playerName;
        // this.gender = gender;
        this.starterPokemon = '';
        this.carriedPokemon = [];
    };

    CurrentPlayer.prototype.CarriedPokemon = function () {};
    // CurrentPlayer.prototype.currentPokemon

    var addPokemon = function (pokemon) {
        player.carriedPokemon.push(pokemon);
    }



    //-----------------------------------
    // SETTING UP THE PLAYER
    //-----------------------------------

    // Submit the typed username and check for errors before proceeding
        function submitUsername() {
            // Hide error
            inputError.classList.remove("is-visible");

            // Make sure player hasn't already been made
            if (typeof player === "undefined") {
                // Test username. Display error if not valid
                if (/^[\s\w]{1,10}$/.test(userNameInput.value) && userNameInput.value.length <= 10) {
                    // Display the next step
                    pokemonSelectContainer.classList.add("is-visible");
                    setNameContainer.classList.remove("is-visible");
                    player = new CurrentPlayer(userNameInput.value);
                    console.log("Player " + userNameInput.value + " added");
                    pokemonSelectContainer.className = 'is-visible';
                } else {
                    inputError.classList.add("is-visible");
                }
            }

        };

    function chooseStarterPokemon() {

        // Make sure player exists
        if (player === undefined) {
          setNameContainer.className = 'is-visible';
          pokemonSelectContainer.className = 'is-hidden';
          return false;
        } else {
          setNameContainer.className = 'is-hidden';
        }

        // Make sure player hasn't already chosen pokemon
        if (player.starterPokemon === '') {

            removeAClass(starterPokemonOptions, 'active');

            chooseStarterPokemonError.className = 'is-hidden';
            pokemonSelectContainer.className = 'is-visible selected';

            this.className += ' active';

            switch (this.id) {
                case "select-charmander":
                default:
                    chosenPokemon = "Charmander";
                    break;
                case "select-squirtle":
                    chosenPokemon = "Squirtle";
                    break;
                case "select-bulbasaur":
                    chosenPokemon = "Bulbasaur";
                    break;
            };

            var starterConfirmation = document.createElement('div'),
            starterConfirmationMessage = document.createElement('p'),
            starterConfirmationBtnYes = document.createElement('a'),
            starterConfirmationBtnNo = document.createElement('a');

            starterConfirmation.className = 'pokemon-confirm-container';
            starterConfirmationBtnYes.className = 'pokemon-btn confirm';
            starterConfirmationBtnNo.className = 'pokemon-btn decline';
            starterConfirmationBtnYes.setAttribute('href', '#');
            starterConfirmationBtnNo.setAttribute('href', '#');

            starterConfirmationMessage.textContent = 'You have chosen ' + chosenPokemon + '. Are you sure?';
            starterConfirmationBtnYes.textContent = 'Yes';
            starterConfirmationBtnNo.textContent = 'No';

            starterConfirmation.appendChild(starterConfirmationMessage);
            starterConfirmation.appendChild(starterConfirmationBtnYes);
            starterConfirmation.appendChild(starterConfirmationBtnNo);

            pokemonSelectContainer.appendChild(starterConfirmation);

            // confirm
            starterConfirmationBtnYes.addEventListener('click', function() {
              confirmedStarterPokemon(chosenPokemon);
            }, false);
            starterConfirmationBtnNo.addEventListener('click', declinedStarterPokemon, false);

            for (var i = 0; i < starterPokemonOptions.length; i += 1) {
                starterPokemonOptions[i].removeEventListener("click", chooseStarterPokemon, false); // Use event delegation?
            };

        } else {
          chooseStarterPokemonError.className = 'input-error is-visible';
        }
    };

    var confirmedStarterPokemon = function(confirmedPokemon) {
      player.starterPokemon = confirmedPokemon;
      console.log('Starter pokemon is ' + confirmedPokemon);
      pokemonSelectContainer.removeChild(document.getElementsByClassName('pokemon-confirm-container')[0]);

      switch (chosenPokemon) {
          case "Charmander":
          default:
              addPokemon(charmander);
              break;
          case "Squirtle":
              addPokemon(squirtle);
              break;
          case "Bulbasaur":
              addPokemon(bulbasaur);
              break;
      };
      console.log(player.carriedPokemon);
      console.log(player);
    };

    var declinedStarterPokemon = function() {
      pokemonSelectContainer.removeChild(document.getElementsByClassName('pokemon-confirm-container')[0]);
      removeAClass(starterPokemonOptions, 'active');
      pokemonSelectContainer.className = 'is-visible';

      for (var i = 0; i < starterPokemonOptions.length; i += 1) {
          starterPokemonOptions[i].addEventListener("click", chooseStarterPokemon, false); // Use event delegation?
      };
    }


    var removeAClass = function(theArray, className) {
      // Best way to pass a variable into a RegExp (use the RegExp constructor)
      var regg = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
      // REMEMBER: Needed to escape the backslashes on \s
      var i, arrayItemCount = theArray.length;
      // Confusion when I was removing the classname that the 'starterPokemonOptions' uses to collect itself
      // Make a way to check that the classname being removed isn't the same as the class being used to collect the HTMLCollection (getElementsByClassName)

      for (i=0; i < arrayItemCount; i+=1) {
        // http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
        // Originally used the length of the array, but the argument get's re-evaluated every time it runs...
        // The array length needs to be static, so it doesn't change when the class is removed.

        // Remove matching classes
        theArray[i].className = theArray[i].className.replace(regg, '' );
        // Remove whitespace at the start of className
        theArray[i].className = theArray[i].className.replace(/^\s*/g, '' );

      };

    };




    //-----------------------------------
    // EVENTS
    //-----------------------------------

    nameConfirmBtn.addEventListener("click", submitUsername, false);
    for (var i = 0; i < starterPokemonOptions.length; i += 1) {
        starterPokemonOptions[i].addEventListener("click", chooseStarterPokemon, false); // Use event delegation?
    };


}());


// PROGRAM STEPS

// 1. Select name
// 2. Select starter pokemon
// 3. Create current user object
// 4. Add start pokemon to current user

//-----------------------------------

// PLANS AND NOTES

// Create some pokemon in this file, instead of using JSON. Or make your own small JSON file to pull from.
// Look up info about each stat. Don't go too in depth though!

// ON-CLICK - Add starting pokemon to carriedPokemon
// Use AJAX or CSS to bring up selection
// Remove with JS after selection

// Need a constructor function for the main game
// Need a current map function/object - AJAX?
// Change his/her in wording based on gender
// Need a user interface with HTML - canvas?
// Collision detection
// Move map on motion
// Define possible interactions, including collisions (coordinates)
// Need resources for map image, player movement and all other components
//
// Need a resource library of pokemon and their attributes - AJAX??
// Have a boolean for starter pokemon?
// Need a record of the user's progress and store info (name, gender)
// His pokemon and their health, level etc.
//
// Need a fight sequence that takes over the screen, takes methods for when a player attacks
// These attacks need info from the Pokemon + Player
// Needs to be math generated interactions
// Chance of attack landing
// Chance of fleeing
// Take into account strength of pokemon?
// Chance of catching pokemon (strength of pokeball, strength of pokemon, HP of pokemon)

// Figure out how to make individual instances of pokemon...
// Use a constructor, with the new keyword to create an instance?
// e.g. Each pokemon used in the game has it's own object prototype,
// then inherit those properties to create 'pokemon1' with name as a property on that

//-----------------------------------


// FUTURE IMPROVEMENTS

// Make the initial selection of name and pokemon using a form, then submit the data to a database
// Allow these settings to be fetched when the user comes back to play again?
// Use object.create?
// Add a virtual time count, like in the real game. Change the darkness of the screen depending on the time of day. (does the real game have this?)
// classList only works on IE10+. There is a solution at http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
// Reset game button? - Resets all data and HTML back to the start
// Save progress? - A cookie or similar?


// ORIGINAL IMAGE LINKS
// http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/96px-004Charmander.png
// http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/144px-007Squirtle.png
// http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/96px-001Bulbasaur.png


//http://pokeapi.co/

/* var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75); */
