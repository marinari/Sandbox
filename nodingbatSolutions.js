// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.
//warmup-1 May 11, 2017
function endUp(str) {
    //only applies to strings with 3 or more chars
    if (str.length >= 3) {
        //take off last three char of string
        var cutstr = str.slice(-3);
        //concat str w/o last 3 chars and capitilized cut string
      	return str.slice(0, -3) + cutstr.toUpperCase();
    }
  	else {
        //capitilize the entire string the way it is
    	return str.toUpperCase();
    }
}
//execute the function for different cases to verify that it works
console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
console.log(endUp("woo hoo"));
console.log(endUp("zyz12"));
console.log(endUp("x"));
console.log(endUp(""));

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
function monkeyTrouble(a, b){
	if (a && b){
    	return true;
    }
  	if (!a && !b){
    	return true;
    }
  	else {
    return false;
    }
}
//execute function within a console log for different scenarios
console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));

// Given a string, take the first 2 chars and return the string with the 2
// chars added at both the // front and back, so 'kitten' yields 'kikittenki'
// chars are there.
function front22(str) {
	var strbe = str.slice(0,2);
  	return strbe + str + strbe;
}
//execute when file is called in console
console.log(front22("hellothere"));
console.log(front22("Logic"));

//Mini Fizzbuzz
function or35(n) {
	if (n % 5 === 0 || n % 3 === 0){
    return true;
    }
  	else {
    return false;
    }
}
console.log(or35(8));
console.log(or35(6));

// Given two temperatures, return true if one is less than 0 and
// the other is greater than 100.

function icyHot(temp1, temp2) {
	if (temp1 < 0 && temp2 > 100){
    	return true;
    }
  	else if (temp1 > 100 && temp2 < 0){
    	return true;
    }
  	else {
    	return false;
    }
}
//execute when file is called in console
console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));
console.log(icyHot(-1, 100));

// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
function makes10(a ,b) {

	if (a === 10 || b === 10){
    console.log(a);
  	return true;
  }

  if (a + b === 10){
  	return true;
  }
  else {
  	return false;
  }
}
//execute when file is called in console
console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));
console.log(makes10(10, 1));
console.log(makes10(10, 10));
console.log(makes10(8, 2));
console.log(makes10(8, 3));
console.log(makes10(10, 42));
console.log(makes10(12, -2));

// We have a loud talking parrot. The 'hour' parameter is the current hour
// time in the range 0..23. We are in trouble if the parrot is talking and
// the hour is before 7 or after 20.
// Return True if we are in trouble.

function parrotTrouble(talking, hour) {
  if(talking == true && (hour < 7 || hour > 20)){
  	return true;
  }
  if (talking == false && (hour < 7 || hour > 20)){
  	return false;
  }
  else {
    return false;
  }
}
//execute when file is called in console
console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));
console.log(parrotTrouble(true, 21));
console.log(parrotTrouble(false, 21));
console.log(parrotTrouble(true, 23));
console.log(parrotTrouble(false, 23));
console.log(parrotTrouble(true, 20));
console.log(parrotTrouble(false, 12));

// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
//We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
function sleepIn(weekday, vacation){
	if (weekday == false && vacation == true){
    	return true;
    }
  	else if (weekday == true && vacation == false){
    	return false;
    }

  	else {
    return true;
    }
}
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
function diff21(n){
	if (n > 21){
      var ans = ((n-21)*2);
    	return ans;
    }
	else {
      ans = 21-n;
      return ans;
	}
}
// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.
function hasTeen(a, b, c){
  	if (a >= 13 && a <= 19){
    	return true;
    }
  	else if (b >= 13 && b <=19){
    	return true;
    }
  	else if (c >=13 && c <=19){
    	return true;
    }
  	else {
    	return false;
    }
}
// Given a string, return true if the string starts with 'hi' and false otherwise.
function startHi(str){
    if (str.match(/^hi/)){
        return true;
    }
    else {
        return false;
    }
}
// Given an int n, return True if it is within 10 of 100 or 200.
function nearHundred(n){
    if (n >= 90 && n <= 110){
        return true;
    }
    else if (n >= 190 && n <= 210){
        return true;
    }
    else {
        return false;
    }
}
// Given a non-empty string and an int n, return a new string where the char at index n has been removed.
// The value of n will be a valid index of a char in the original string
function missingChar(str, n){
	var rmvchar = str.charAt(n);
  	return str.replace(rmvchar, '');
}
// Given a string, take the last char and return a new string with the last char added at the front and back,
//so 'cat' yields 'tcatt' the original string will be length 1 or more.
function backAround(str){
  var lastchar = str.charAt(str.length-1);

  return lastchar + str + lastchar;

}
// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.
function mixStart(str){
	if (str.match(/\wix/)){
    	return true;
    }
  	else {
    	return false;
    }
}
// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
function nonStart(a, b) {
  	return a.slice(1) + b.slice(1);
}
// Given 2 strings, a and b, return a string of the form short+long+short, with  the shorter string on the outside and the
// longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
function comboString(a, b) {
	if (a.length < b.length){
		return a + b + a;
    }
  	else if (b.length < a.length){
    	return b + a + b;
    }
}
// Given a string of even length, return the first half. So the string 'WooHoo' yields 'Woo'.
function firstHalf(str) {
  //check if string is even
  if (str.length % 2 === 0){
  	//find the halfmark of the string
    var halfmark = str.length / 2;
    return str.slice(0, halfmark);
  }
  //if string is an odd number
  else if (str.length % 2 === 1){
  	return str;
  }
}
// Given a string, return the string made of its first two chars, so the String
// 'Hello' yields 'He'. If the string is shorter than length 2, return whatever
function firstTwo(str) {
	if (str.length >= 2){
    	return str.slice(0,2);
    }
  	else {
    	return str;
    }
}
// Given a string, return a 'rotated left 2' version where the first 2 chars are
// moved to the end. The string length will be at least 2.
function left2(str) {
	if (str.length >= 2){
    var first2 = str.slice(0,2);
    var restof = str.slice(2, str.length);
    return restof + first2;
    }
}
// Given a string, return a 'rotated right 2' version where the last 2 chars are
// moved to the start. The string length will be at least 2.
function right2(str) {
  var last2 = str.slice(-2, str.length);
  var restof = str.slice(0, str.length-2);
  return last2 + restof;
}
// Given a string, return true if it ends in 'ly'.
function endsLy(str) {
	if (str.endsWith('ly')){
    	return true;
    }
  	else {
    	return false;
    }
}
