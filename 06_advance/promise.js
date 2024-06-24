const promiseOne = new Promise(function(resolve,reject){
    //Do any Async task
    // DB Calls, cryptography,network
    setTimeout(function(){
        console.log('async task completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
       resolve()
    },1000)
}).then(function(){
    console.log('Async task resolved 2');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Ajay",email:"ajay@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"akash",password:"1234"})
        }
        else{
            reject("ERROR:Something Went Wrong")
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
  console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('Function is either resolve or rejected');
})

/// Using Async await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"JavaScript",password:"1233"});
        }
        else{
            reject("ERROR:JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const response =await promiseFive
     console.log(response);
   } catch (error) {
    console.log(error);
   }
} 

consumePromiseFive()