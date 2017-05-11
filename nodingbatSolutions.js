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