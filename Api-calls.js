

 function APIcalls(type) {
  



 if(type=="GET"){
    try{
   return fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    .then((response) =>{return response.json()});
    }catch(err){
        console.log(err);
    }
}


// else if(type=="POST"){

//     return fetch(`http://dummy.restapiexample.com/api/v1/employees` ,{
//         method:'POST',
//         body:JSON.stringify(message),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })
//     .then((response) =>{return response.json()});






}
export default APIcalls;