//Problem Description
/* An array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute
to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.*/
function isValidWalk(walk) {
  //define x and y coordinates x for horizontal movement y for vertical movement
  let y = 0;
  let x = 0;
  walk.forEach(function(dir) {
    if (dir === 'n') {
    //increment or decrement x and y for opposite movements
      y = y + 1;
    }
    if (dir === 's'){
      y = y - 1;
    }
    if (dir === 'e'){
      x = x + 1;
    }
    if (dir === 'w'){
      x = x - 1;
    }   
  });  
  
  if(walk.length === 10 && y ===0 && x ===0){
    return true;
  }
  else {
    return false;
  }
}
//Problem Description 
/*Letters a-m are valid. Given a string will output the error rate of the printer as a string representing a rational whose numerator
is the number of errors (invalid characters) and the denominator the length of the control string. */ 
function printerError(s) {
  //check if string passed through contains any non-color letters
    if (s.match(/[n-z]/g)){
      //count the ammount of error letters, log them as numerator
      var numer = s.match(/[n-z]/g).length;
      }
  //else if string does not have any error letters numerator = 0
  else if (s.match(/[a-m]/)){
      numer = 0; 
  }
   //denominator is equal to the length of the string
  var denom = s.length;
  //return the string "numerator / denominator"
  return numer + "/" + denom;
}
//Return the number (count) of vowels in the given string.
function getCount(str) {
  var vowelsCount = 0;
  if (str.match(/[(a)+(e)+(i)+(o)+(u)+]/g)){
    vowelsCount = str.match(/[(a)+(e)+(i)+(o)+(u)+]/g).length;
  }
  return vowelsCount;
}

