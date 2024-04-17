const promiseOne=new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Async task");
        resolve();
     })
});

promiseOne.then(function(){
    console.log("Promise Consumed");
})
