const students = [
    {id: 21, name: "joti"},
    {id: 31, name: "manna"},
    {id: 41, name: 'shabnur'},
    {id: 39, name: "dipjol"}
]

// const names = students.map(s => s.name);
// console.log(names);

// const bigger = students.filter(s => s.id > 40);
// console.log(bigger);

const biggerOne = students.find(s => s.id > 30);
console.log(biggerOne);

