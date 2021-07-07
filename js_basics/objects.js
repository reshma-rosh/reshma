let name = 'sathish'
console.log(name);
// basic
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1

//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');

//     }
// };
// circle.draw();
// factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');

//         }
//     };
// }
// const circle1 = createCircle(1);
// console.log(circle1);
// // constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');

//     }
// }
// // const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function() {
//         console.log('draw');

//     }
//     `);
//     Circle.call({}, 1);
//     Circle.apply({}, [1, 2, 3]);
// const another = new Circle(1);
// dynamic deleting adding
// const circle = {
//     radius: 1
// }
// circle.color = 'blue';
// circle.draw = function() {}
// delete circle.color;
// delete circle.draw;
// console.log(circle);

// valuereferncetypes
 
// enumerate
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');

//     }
 // };
// cloaning
// const circle = {
//     radius : 1,
//     draw() {
//         console.log('draw');
//    }
// }
// const another = {};
// for (let key in circle)
// another[key] = circle[key];
// const Object.assign({}, circle);
// const another = {...circle };
// console.log(another);
// const message = '\nthis is my \nsecond book\n';
// console.log(message);


// const another = 
// `hi john,
// thankyou for jining,
// regards'
// resh`;
// console.log(another);

// const now = new Date('oct 2 1985 9:00');
// const date1 = new Date('oct 2 2021 08:00');
// console.log(date1);
// const date2 = new Date(1985, 09, 09, 8);
// console.log(date2);
// let address = {
//     street : 'a',
//     city : 'b',
//     zipcode : 'c'
// };
// function showAddress(address) {
//     for (let key in address)
//     console.log(key, address[key]);
// }
//     showAddress(address);
//     let address = createAddress('a', 'b', 'c');
//     function createAddress(street,city,zipcode) {
// return {
//     street,
//     city,
//     zipcode
// };
//     }
//   console.log(address);  

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    }
function  areEqual(address1, address2) {
    return address1.street === address2.street && 
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode;
}
function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
// blockpost
let post = new Post('a', 'b', 'c');
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         {author: 'a', body: 'b'},
//         {author: 'c', body: 'd'},
// ],
// isLive: true
// };

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
console.log(post);