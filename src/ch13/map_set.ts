export {}

type mapType  =number | string

const map: Map<mapType, mapType> = new Map()
map.set('1','111')
map.set('2','22')
for (let [k, v] of map) { // 解构
    console.log(k, v)
}

console.log('---------')

const set: Set<number> = new Set()
set.add(1)
set.add(2)
set.add(3)
for (let elem of set) {
    console.log(elem)
}