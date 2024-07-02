const User = {
    name: "John Wick",
    email: "vaan@lco.dev",
    isActive: true
}

// * always passing object 
function createUser({name: string, isPaid: boolean}){}

createUser({name: "jovial", isPaid: false})

// * returning the Object and passing Object Parameter
function createCourse():{name: string, price: number}{
    return {name: "nodejs", price: 400}
}

// ! bad behaviour
let newUser = {name: "wick", isPaid:false, email:"john@gmail.com"}
createUser(newUser)