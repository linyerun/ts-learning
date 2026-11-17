// https://xiaoman.blog.csdn.net/article/details/122167155
export {}


let s: string = '1'

let num: number = 10

let b: boolean = false
let createdBoolean: Boolean = new Boolean(1)
let booleand: boolean = true //可以直接使用布尔值
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值

/*
* undefined 和 null 是所有类型的子类型,也就是说 undefined和null 类型的变量，可以赋值给 string 类型的变量
* 前提: tsconfig.json的"strict": false
* */
let u = undefined
let n = null
let ss = '1'
ss = u
let sss = '1'
sss = n

let v: void = null
let vv: void = undefined