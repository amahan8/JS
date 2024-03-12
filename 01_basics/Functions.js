function addUser(num1,num2){
 return num1+num2;
}

const a=addUser(1,4);
console.log(a);

function loginUserMessage(username){

    if(!username){
        console.log("Please enter username");
        return ;
    }
    return`${username} is loggedin`;
}

console.log(loginUserMessage("hira"));

//pass objects and array in function

const nobj={
    username:"Xyz",
    age:8
}

function getobj(obj){
    return `The username is ${obj.username} and age is ${obj.age}`
}

console.log(getobj(nobj));

const Ar=[1,2,4];
function getarr(arr){
    return arr[1];
}

console.log(getarr(Ar));