const User={
    _email:"chai@gmail.com",
    _password:"7278",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        return this._email=value;
    }

}

const chai=Object.create(User);
console.log(chai.email);