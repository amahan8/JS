const myHeroes=["Xyz",123];

const Hero={
    user:"Ytr",
    num:123
}
// To add function in every object such as array, string, function(whichever has portotype object) just do below
Object.prototype.hitesh=function(){
    console.log("This is hitesh");
}
// To add function in every Array just do below

Array.prototype.chai=function(){
    console.log("Chai only for Array");
}

myHeroes.chai();