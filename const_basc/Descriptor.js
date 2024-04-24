const Descripter=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(Descripter);

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderchai:function(){
        console.log("Chai nhi bni");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !=='function'){
    console.log(`${key}:${value}`);
}
}