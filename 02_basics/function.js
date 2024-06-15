function sayMyName(){
    console.log("Hello I am Ajay");
}

// sayMyName()

function addTwoNumbers( num1, num2){
   return (num1+num2)
}

// console.log(addTwoNumbers(12,45));

function userLogin(username="Ajay"){
    if(!username)
        console.log("Please enter username");

    return (`${username},Welcome to website`)
}

// console.log(userLogin("akash"));

function calculatePrice(num1,num2,...num3){
    return (num1+num2)
}

// console.log(calculatePrice(12,45,78,9,0,0));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username:"Ajay Kaushik",
    age:21
}

function handleObject(object){
    console.log(`Username:${object.username} and Age:${object.age}`);
}

// handleObject(user)

const myArray =[10,203,68,897,9059,47,6,7,990,123]

function arrayreturn4element(arr){
    return arr[3]
}

console.log(arrayreturn4element(myArray));