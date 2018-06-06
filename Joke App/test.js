// Dependencies
var mathModule = require('./Lib/rand');
var jokesModule = require('./Lib/jokes');
var prompt = require('prompt');
// App object
var app = {};
var defaultName = 'Tom';

// Function that prints a random joke
app.printAJoke = function(name){
// Get all the jokes
   var allJokes = jokesModule.testJokes(name);
    // Get the length of the jokes
    var numberOfJokes = allJokes.length;
    // Pick a random number between 1 and the number of jokes
    var randomNumber = mathModule.getRandomNumber(1,numberOfJokes);
    // Get the joke at that position in the array (minus one)
    var selectedJoke = allJokes[randomNumber - 1][0];
    var selectedResponse = allJokes[randomNumber - 1][1];
    // Send the joke to the console
    console.log(selectedJoke);
    console.log('\n' + selectedResponse);
};
// Function that loops indefinitely, calling the printAJoke function as it goes
app.test = function(){
            prompt.start();
            prompt.get('name',function(err,res){
                  console.log("Wanna hear a joke? What's your name?");
                  if(res.name.length > 1){
                        app.printAJoke(res.name);
                        app.test();
                  }
                  else{
                        res.name = defaultName;
                        app.printAJoke(res.name);
                        app.test();
                  }

            });
};
app.test();
