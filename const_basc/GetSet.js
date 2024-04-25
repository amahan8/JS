class User{
    constructor(email,password){
    this.email=email,
    this.password=password
}
    get email(){
        return `${this._email}***`;
    }

    set email(value){
       return this._email=value;
    }

    get password(){
        return `${this._password}46276`;
    }

    set password(value){
        this._password=value;
    }
}

const chai= new User("Chai","gjhs6878");
console.log(chai.password);