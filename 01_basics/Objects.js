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

// Object copying

const ob1={1:"2", 3:"4"};
const ob2={1:"2", 2:"4"};
const ob3=Object.assign({},ob1,ob2); // object assign
console.log(ob3);

const obj3={...ob1,...ob2};
console.log(ob3);

//Array objects

const Ar=[{
    id:1,
    name:"Amir"
},
{
    id:2,
    name:"xyz"
}
]
console.log(Ar[0].id);

console.log(Object.keys(ob1)); // it return as array
console.log(Object.values(ob1)); // it return as array
console.log(Object.entries(ob1)); // it return as array
console.log(ob1.hasOwnProperty(1));