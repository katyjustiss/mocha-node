#!/usr/bin/env node

if(process.argv.length > 2){ //test is passing name as 3rd argv
  for(var i = 2; i<process.argv.length; i++){ //just grabbing the third argv.
    var letters = process.argv[i].split('');
    letters.forEach(function(letter, i){
      switch(letter.toUpperCase()){
        case 'A':
        case 'E':
        case 'F':
        case 'H':
        case 'I':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'R':
        case 'S':
        case 'X':
          var word = 'an ';
          break;
        default:
          var word = 'a ';
      }
      console.log('Give me ' + word + letter.toUpperCase() +'!');
    })
  }
}


//Using prompt module
// var prompt = require('prompt');

//   // prompt.override = argv;
//   prompt.message = '';
//   prompt.delimiter = '';
//   prompt.start();

//   prompt.get('name', function (err, result) {
//     Cheers(result.name); //result is an object {name: 'Katy'}. Only want to grab the property of obj.

//   }); //end of prompt

// function Cheers(name) {
//     var word;
//     var letters = name.split('');
//     letters.forEach(function(letter) {
//       var letter = letter.toUpperCase()
//       if(letter === 'A' || letter === 'E' || letter === 'F' || letter === 'H' || letter === 'I' || letter === 'L' || letter === 'M' || letter === 'N' || letter === 'O' || letter === 'R' || letter === 'S' || letter === 'X') {
//         word = 'an ';
//       } else if(letter === ' ') {
//         var space = letter;
//       } else {
//         word = 'a ';
//       }
//       var string = 'Give me ' + word + letter + '!';
//       console.log(string);
//     })
//   }//end of Cheers function


