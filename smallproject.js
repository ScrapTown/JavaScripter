let a = "This is apple of the tree"
let list = a.split(' ')
// console.log(list.length)

let b = "Apple"
let l = []
for (let index = b.length; index >= 0; index--) {
    l.push(b[index])
}
let ljoin = l.join('')
console.log(ljoin)