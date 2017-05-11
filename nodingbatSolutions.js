// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.
//warmup-1 Exercise: EndUp May 11, 2017
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

