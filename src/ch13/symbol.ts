// https://xiaoman.blog.csdn.net/article/details/122463630
export {}

// symbol类型的值是通过Symbol构造函数创建的
// 只支持 string 和 number类型的参数
// Symbol的值是唯一的
let s1 = Symbol('symbol')
let s2 = Symbol('symbol')
let n1 = Symbol(1)
let n2 = Symbol(1)
console.log(s1 == s2)
console.log(n1 == n2)

// 用作对象属性的键
let obj = {
    s1: 111,
    [s2]: 222, // 必须使用括号包住，不然就当是字符串了
}
console.log(obj)
console.log(obj['s1'])
console.log(obj[s1])
console.log(obj[s2])
// 使用symbol定义的属性，是不能通过如下方式遍历拿到的
console.log("==========")
for (const key in obj) {
    console.log(key)
}
// 获取方法
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj)
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(symbol) ]
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj)
console.log(Reflect.ownKeys(obj)) // [ 's1', Symbol(symbol) ]

