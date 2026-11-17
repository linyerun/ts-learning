export {}

let set:Set<number> = new Set([1,2,3,4])

set.add(5)

let res = set.has(5)
console.log(res)

set.delete(5)

console.log(set.size)

// 去重
let arr = [...new Set([1,1,1,2,2,3,4,5,5,5,5])]
console.log(arr); //[ 1, 2, 3, 4, 5 ]