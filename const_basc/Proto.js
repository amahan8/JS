const User={
    username: "xyz"
}

const Teacher={
    isAvailable:true
}

const TeachingSupport={
    isnotAvailable:true
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport              //prototypal inheritance where we can inherit propoerties through __proto__
}

Teacher.__proto__= User
console.log(Teacher.isAvailable);

Object.setPrototypeOf(TeachingSupport,Teacher);

