function SetUsername(username){
    this.username=username;
    console.log("Called");
}

function Createusername(username,email,password){
    SetUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const chai= new Createusername("Chai","chai@fb.com","xyz");
console.log(chai);