/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let country = 'turkey';
let continent = 'north america'
let population = "100000000000";

console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

*/


/*let age = 30; //reassinging
age = 31; //muate

const birthYear = 1991;
//birthYear = 1990;

const job;

var job = 'programer';
job = 'teacher';

lastName = 'Schmedtamnn';
console.log(lastName);
*/

// -------------------
// Math operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageSarah, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


//Assignment Operators
let x = 10 + 5; //15
x += 10; //x = x + 10 / 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1;
console.log(x);

// comparison operatos
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//Lecture 15

//const now = 2037;

/*const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

// `` ${}  <-- automated spaces template string

console.log(`Just a ragular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/
//-------------------------------------------------------

//Taking Decisions if/else Statments
/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 😊');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
*/

//Controlled structure
/*
if(){

} else{

}
*/

/*
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
/*
//Type Conversion -----------------
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
//Converting strings to numbers
//NaN = Not a Number (type: number)

console.log(String(23), 23);
//Converting Numbers to strings
//Number -> String or Boolean


//Type Coercion ----------------------
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - '3');
console.log('23' + '10' + '3');
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

//If using '-' with strings (numbers), then strings -> Numbers
//If u sing '+' with strings (numbers), then string concatinates

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

//Truthy and Falsy Values 
// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0)); //falsy
console.log(Boolean(undefined)); //falsy
console.log(Boolean('Jonas')); //truthy
console.log(Boolean({})); //truthy
console.log(Boolean('')); //faley

const money = 100;
if (money) {
  console.log("Don't spend it all! :)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('Yay! Height is defined')
} else {
  console.log('Height is UNDEFINED');
}
*/

// Equality Operators: == vs === -------------
/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

// '===' return a true or false value. Both sides are the same
//Comparison ===

// '18' == 18 -> true
// '18' === 18 -> false

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { //'23' == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else if (favorite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23?');

//Difference != (loose) !== (strict)
*/

//Logical Operators 

const hasDriversL = true; // A
const hasGoodV = false; // B

console.log(hasDriversL && hasGoodV); //and
console.log(hasDriversL || hasGoodV); // or 
console.log(!hasDriversL);

const shouldDrive = hasDriversL && hasGoodV;

if (shouldDrive) {
  console.log('Sarah is able to drive');
} else {
  console.log('Some one else should drive...');
}
