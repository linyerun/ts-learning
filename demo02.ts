interface Person {
    name: string
    age: number
}

const p1: Person = {
    name: 'lyr',
    age: 25,
    // sex: 'man', //报错
}

const p = {
    name: 'lyr',
    age: 25,
    sex: 'man',
}
const p2: Person = p

console.log(p1)
console.log(p2)
