///// Question 1

console.log('quiz 1')

function begin() {
	console.log("begin");
}
begin();

///// Question 2 // Echo

function echo(a){
  return 'hello';
}
echo()

///// Question 3 // Math

function math(a,b,c){
  return (a+b)*c;
}
math(3,4,2)

///// Question 4 // toString
let words = 'ghost ' + 'toast ' + '?'
function toString(str){
  console.log(words);
}
toString()

///// Question 5 callme

function callme(callmetoo){
  console.log('in first function');
  function callmetoo(){
    console.log('in second function');
  }
}
callme()

///// Question 6 callme2

// use function above
// add additional parameter set to string

// should console log the parameter

///// Question 7 reverse

let word = 'nopenopenope'
function backwards(str){
  let empty = ''
  for (var i = str.length-1; i >= 0; i--) {
    empty += str.charAt(i);
  }
 return empty;
}


///// sleep

// pseudocode
// write function that console logs 'before sleep loop'
// set a timeout for 1000 milliseconds
// include function that console logs  'after sleep loop'
// call function
