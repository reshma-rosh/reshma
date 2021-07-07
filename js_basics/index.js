 let name = 'resh';
 console.log(name);
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// let age = 30;
// console.log(age);
// let isApproved = true;
// let firstName = undefined;
// let lastName = null;
// let person = {
// name: 'resh',
// age: 30
// };
// person.name = 'begum';
// let selection = 'name';
// person[selection] = 'vijay'

// console.log(person.name);
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);
// function greet(name, lastName) {
//     console.log('hello ' + name + '' + lastName);

// }
// function square(number){
//     return number * number;

// }
// console.log(square(2));

// greet('thalapathy', 'vijay');
// greet('shiva', 'karthikeyan');
// // let x = 10;
// // let y = 3;
// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(x ** y);

//Increment (++)
// console.log(x++);
// console.log(x);


//Decrement
// console.log(--x);
let x1 = 12;

x1 = x1 + 5;
x1 += 5;

x1 = x1 * 3;
x1 *= 3;
let x = 1;
// Relational
console.log(x>0);
console.log(x>=1);
console.log(x<1);
console.log(x<=1);

// Strict Equality(type + value)
console.log(1 === 1);
console.log('1' === 1);
// Lose Equality(value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// if a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.
let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && false);
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

let hour = 14;
if (hour >= 6 && hour < 12) 
console.log('Good Morning');
else if (hour >=12 && hour <18)
console.log('Good afternoon');
else 
console.log('good evening');
let role = 'guest';
switch (role) {
    case 'guest' :
        console.log('guest user');
        break;
        case 'moderator' :
            console.log('moderator user');
            break;
            default:
                console.log('unknown user');
}
if (role === 'guest') console.log('guest user');
else if (role === 'moderator') console.log('moderate user');
else console.log('unknown user');
// for (let i = 5; i >= 1; i--) {
// if (i % 2 !== 0) console.log(i);
// }
// let  i = 9;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }
// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//   i++;

// } while (i <= 5);
const person = {
    name : 'shermin',
       age : 11
};
for (let key in person)
console.log(key, person[key]);
const colors = ['red', 'green', 'blue'];
for (let index in colors)
console.log(index, colors[index]);

for (let color of colors)
console.log(color);
let i = 0;
while(i <=10) {
    // if (i ===5) break;
    if (i %2 === 0) {
        i++;
        continue;
    }
    
    console.log(i);
    i++;
}
















