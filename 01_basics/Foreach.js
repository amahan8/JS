const coding=["ab","ac","as"];
coding.forEach(function(val){
    console.log(val);
})

coding.forEach((va)=>{
console.log(va);
})

// function  important for foreach

function printme(item){
    console.log(item);
}
coding.forEach(printme);