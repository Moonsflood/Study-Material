// Coding Challenge #2

//Use the BMI exmaple from Challenge #1 and code the code you already wrote, and improve it! 

//Coding Challange 1

//Calculate BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

//Declare Variables - Test Data 1 

let heightMark = 1.69;
let heightJohn = 1.95;

let massMark = 78;
let massJohn = 92;

//BMI Calculation

let markBMI = (massMark / heightMark ** 2);
//console.log('Mark BMI is:', markBMI);

let johnBMI = (massJohn / heightJohn ** 2);
//console.log('John BMI is:', johnBMI);

//Boolean variable

const markHigherBMI = markBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} BMI!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI} BMI!`);
}


//-----------------------------------------

//Variable decaration

let h2Mark = 1.88;
let h2John = 1.76;

let mass2Mark = 95;
let mass2John = 85;

//BMI Calculation

let mark2BMI = (mass2Mark / h2Mark ** 2);
//console.log('Mark sencond BMI is', mark2BMI);

let john2BMI = (mass2John / h2John ** 2);
//console.log('John second BMI is', john2BMI);

//Boolean Var

const markHigherBMI2 = mark2BMI;
//console.log(markHigherBMI2 > john2BMI);

if (mark2BMI > john2BMI) {
  console.log(`Mark's BMI ${mark2BMI} is higher than John's ${john2BMI} BMI!`);
} else {
  console.log(`John's BMI ${john2BMI} is higher than Mark's ${mark2BMI} BMI!`);
}



