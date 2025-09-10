let students =  {
    name:"Omkar",
    subjects:["Maths","Science","English"],
    marks:[50,50,50],
    isEnrolled:true
}

console.log("Name of Student :",students.name)
console.log("Subjects:",students.subjects)

let total = students.marks[0] + students.marks[1] + students.marks[2]
console.log("Totak:",total,"/ 300")
let avg = total/students.marks.length
console.log(avg)