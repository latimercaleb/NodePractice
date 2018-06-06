// Dependencies
var fs = require('fs');
// App object
var jokes = {};
// Get all the jokes and return them to the user
jokes.allJokes = function(){
    // Read the text file containing the jokes
    var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');
    // Turn the string into an array
    var arrayOfJokes = fileContents.split(/\r?\n/);
    // Return the array
    return arrayOfJokes;
};

jokes.testJokes = function(name){
  // Read the text file containing the jokes
  var file = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');
  // Turn the string into an array
  var t = file.split(/\r?\n/);
  t.pop();
  var q = [];
  for( var i = 0; i< t.length; i++){
    if(i %2 ==0){
      var temp = t[i].replace('qsr',name);
      q.push([temp,t[i+1]]);
    }
    else {
      continue;
    }
  }
  // Return the array
  return q;
};
// Export the library
module.exports = jokes;
