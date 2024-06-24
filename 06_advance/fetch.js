async function getAllusers(){
 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
 } catch (error) {
    console.log("E: ",error);
 }
}
getAllusers()



fetch('https://api.github.com/users/ajaykaushik057')
.then(function(response){
   return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
