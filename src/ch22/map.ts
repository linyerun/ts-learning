export {}

// 但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键，是一种更完善的 Hash 结构实现
let map: Map<object, Function> = new Map()

let obj = { name: '小满' }
map.set(obj, () => 123)

map.get(obj)

map.has(obj)

map.delete(obj)

console.log(map.size)
