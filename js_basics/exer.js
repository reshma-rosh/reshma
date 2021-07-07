let number = max(4, 6);
console.log(number);
function max(number1, number2) {
// if (number1 > number2) return number1;
//  return number2;
 return (number1 > number2) ? number1 : number2;
} 
console.log(isLandscape(500, 700));

function isLandscape(width, height) {
    return (width > height); 
}
const output = fizzBuzz(30);

console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number')
    return 'NaN';
    if ((input % 3 ===0) && (input % 5 ===0)) return 'fizzBuzz';
    if (input % 3 ===0) return 'fizz';
    if (input % 5 ===0) return 'Buzz';
    return input;
    
}
showStars(5);
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
      for (let i = 0; i < row; i++)
      pattern += '*';
      console.log(pattern);
    }
}
checkSpeed(85);
function checkSpeed(speed) {
 const speedlimit = 70;
 const kmperpoint = 5;

    if (speed < speedlimit + kmperpoint){
    console.log('ok');
    return;
    }
    const points = Math.floor((speed - speedlimit) / kmperpoint);
        if(points >= 12)
        console.log('Licencesuspended');
        else
        console.log('points', points);
}

showNumbers(20);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
         
    // if (i % 2 ===0)
    // console.log(i, 'EVEN');
    // else console.log(i, 'ODD');
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
console.log(i, message); 
}
}

console.log(sum(10));
function sum (limit) {
    let sum = 0;
    
    for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i;

    return sum;
}

    const isActive = true;
    if (isActive)
    console.log('hello');
    const array = [null, 2, 3, 5, 6];
    console.log(countTruthy(array));
    function countTruthy(array) {
        let count = 0;
        for (let value of array)
        if (value)
        count++;
        return count;
    }
    const movie = {
        title: 'a',
        releaseyear: 2021,
        rating: 5,
        direction: 'b'
    };
    
    showProperties(movie);
function showProperties(obj) {
    
    for (let key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);
}
const marks = (80, 80, 90);

console.log(calculateGrade(marks));

function calculateGrade(average) {
     
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
           return 'A';    
}
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
    sum += value;
    let average = sum / array.length;
}
showPrimes(30);
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
    for (let factor = 2; factor < i; factor++) {
        if (i % factor === 0){
            isPrime = false;
            break;
        }
    }
if (isPrime) console.log(i);
}
}