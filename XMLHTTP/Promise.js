const promiseOne=new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Async task");
        resolve();
     },1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(" Asyn task started")
        resolve()
    },1000)
    
}).then(function(){
    console.log(" Async resolved");
})

// Promise 3

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:" char@get.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({user:"hitesh",email:"hitesh@net"})
        }
        else{
            reject('Rejection')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.user;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
})