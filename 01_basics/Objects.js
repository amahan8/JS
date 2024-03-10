const mys= Symbol("key1");
const juser={
    name:"Xyz",
    class:9,
    email:"xyz@gmail.com",
    [mys]: "mykey"
}

juser.greeting=function(){
    console.log("Hello JS user");
}
console.log(juser);
console.log( typeof juser[mys]);
juser.greeting;