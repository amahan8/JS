 const ad=()=>{
    const username="amir";
    console.log(this);  // this will retrun empty object that why no use iof this in arrow function
}
ad();

//Implicit return

const a=(num1,num2)=>num1+num2; // no retrun because implicit most used in react
const ab=(num1,num2)=>(num1+num2); // no retrun because implicit most used in react
//used curly braces when return is used.
const ac=(num1,num2)=>({username:"xy"}); // use parenthesis() when returning an object
console.log(ac());
