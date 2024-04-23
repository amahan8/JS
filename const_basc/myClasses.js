class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptPassword(){
        return`${this.password}abc`
    }
    Capital(){
        return `${this.username.toUpperCase()}`
    }
}


const Chai=new User("chai","chai@fb.com","1234");
console.log(Chai.Capital());


///

function User(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
}

User.prototype.encryptPassword=function(){
    return`${this.password}abc`;
}

User.prototype.Capital=function(){
    return `${this.username.toUpperCase()}`;
}