const num = 500
console.log(num);        //500

const score = new Number(200)
console.log(score);      //[Number: 200]
console.log(score.toString());      //200
console.log(score.toString().length);      //3
console.log(score.toFixed(1));      //200.0

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));   //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));   //10,00,000


// --------------------------------MATH-----------------------------

console.log(Math);        //Object [Math] {}
console.log(Math.abs(-568));   //568
console.log(Math.round(6783.897));  //6784
console.log(Math.floor(56.5));     //56
console.log(Math.ceil(456.56));    //457

console.log(Math.max(1,3,3,5,7,8,9));  //9

console.log(Math.random());  //0.7098467808414266 Range(0-1)
console.log((Math.random()*10)+1); //4.961653531391905
console.log(Math.floor(Math.random()*10)+1); //10


const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 
