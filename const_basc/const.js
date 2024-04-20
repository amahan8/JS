function User(username,loginCount,isLoggedin){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedin=isLoggedin;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne= new User("Acd",12,true);
const userTwo=new User("ADC",10,false);
console.log(userTwo.greeting());


