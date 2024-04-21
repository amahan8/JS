function multipleBy5(num){
    return num*5;
}
console.log(multipleBy5(5));
console.log(multipleBy5.prototype);

function createUsername(username,score){
    this.username=username;
    this.score=score;
}

createUsername.prototype.increment=function(){
    this.score++;
}
createUsername.prototype.printMe=function(){
    console.log(`Score is ${this.score}`);
}

// new keyword magic
const chai= new createUsername("Sal",250);
chai.printMe();


