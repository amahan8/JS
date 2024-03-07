let number1="Hi";
// Stack(Primitive)

let number2=number1;
number2="h3";
console.log(number1);
console.log(number2);

//heap(Non primitive)

let sam={
    name:"xyx",
    work:"hyfe",
    age:25
}

let sam2=sam;

sam2.name="sam2";
console.log(sam.name);
console.log(sam2.name);