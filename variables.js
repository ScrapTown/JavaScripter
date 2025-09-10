// const id = 12345

// id = "Hello"

// console.log(id)

// You cant reassign the values in [const] variable

// let fruit = "Apple"

// fruit = "Banana"

// console.log(fruit)

// You can do that with let variable

// var leakage = true

// console.log(leakage)

// var variable is same as let except its Function-Scoped

// let i = 0

// if (i == 0) {
//     let a = "Apple"
//     console.log(a)
// }

// The variable [a] will only print in if block and will give error if printed outside the block

// let i = 0

// if (i == 0) {
//     let a = "Apple"
//     console.log(a)
// }
// console.log(a)

// As you can see console.log below if block will give error


// function op() {
//     var fruit = "Hello"
//     console.log(fruit)
// }

// op()

// var will only print the value if its inside function scope

let i = 0

if(i == 0) {
    var fruit = 0
}
console.log(fruit)

// Unlike const and let,it will print value even if it is outside block

// DONT USE VAR