let group = [
    {name:"Omkar",isEnrolled:true,marks:[68,79,90]},
    {name:"Rajesh",isEnrolled:false,marks:[80,80,90]},
    {name:"Naina",isEnrolled:true,marks:[67,80,70]},
    {name:"Tara",isEnrolled:false,marks:[79,90,45]}
]

for(let i = 0;i < group.length;i++) {
    if(group[i].isEnrolled === true) {
        console.log("Name:",group[i].name)
        console.log("Your marks are:",group[i].marks)
        let total = group[i].marks[0] + group[i].marks[1] + group[i].marks[2]
        console.log("Total Marks:",total,"/ 300")
        let avg = total / group[i].marks.length
        console.log("Percentage:",avg)
        console.log("------------------------------")
    }
    else {
        console.log(group[i].name,"Please get enrolled as soon as possible")
        console.log("------------------------------")    
    }
}