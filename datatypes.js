// Number
let a = 0
console.log(typeof a)

//String
let b = "Apple"
console.log(typeof b)

// BigInt
let c = 2**100
console.log(typeof c)

// Boolean
let d =true
console.log(typeof d)

// Object
let e = {
    l: "apple"
}
console.log(typeof e)

// Array
let f = [1,2,3]
console.log(typeof f)
// Note: Array is special object so it will show [object] as its type

f.push(34)
console.log(f)

console.log(f.length)
console.log(f.includes(2))

console.log(e)