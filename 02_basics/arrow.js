const user ={
    username:"Akash",
    age:21,

    welcomeMsg:function(){
        console.log(`Hello ${this.username} and Your Age:${this.age}`);
    }
}

// "this keyword refers to current context"

user.welcomeMsg()
user.username = "harsh"
user.welcomeMsg()

console.log(this);     //{}

// -----------------------Arrow fN------------------

const helloMsg = (username) =>{

    console.log(`Hello ${username}`);
}

helloMsg("Deepika")

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai()


// Regular functions have their own this context.
//  And this is determined dynamically depending on how you call or execute the function.

//  Arrow functions, on the other hand, do not have their own this context. 
// Instead, they capture the this value from the surrounding lexical 
// context in which the arrow function was created.

const addNum = (num1,num2) =>{
     return (num1+num2)
}

console.log(addNum(34,56));

const addNum2 = (num1,num2) => (num1+num2)

console.log(addNum2(46,13));

