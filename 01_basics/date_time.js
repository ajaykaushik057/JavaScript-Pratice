let mydate = new Date()
console.log(mydate);           //2024-06-15T04:30:00.455Z
console.log(mydate.toString);  //[Function: toString]
console.log(mydate.toLocaleString());  //6/15/2024, 4:31:15 AM
console.log(mydate.toJSON());       //2024-06-15T04:32:04.473Z
console.log(mydate.toDateString());       //Sat Jun 15 2024
console.log( typeof mydate);       //object


// let date = new Date("01-04-2024")     //2024-01-04T00:00:00.000Z
let date = new Date(2023,0,14,5,3)  
console.log(date.toLocaleString()); //1/14/2023, 5:03:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);                   //1718426677535
console.log(Math.floor(myTimeStamp/1000));  //1718426677


let date1 =  new Date()
console.log(date1.getMonth()+1);
console.log(date1.getDay());