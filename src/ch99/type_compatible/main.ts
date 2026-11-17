export {}

interface A {
    name:string
    age:number
}

interface B {
    name:string
    age:number
    sex:string
}

let a: A = {
    name:"老墨我想吃鱼了",
    age:33,
}

let b: B = {
    name:"老墨我不想吃鱼",
    age:33,
    sex:"女"
}

// 协变
a = b

// 逆变
let fna = (params:A) => {
    console.log('fna', params)
}
let fnb = (params:B) => {
    console.log('fnb', params)
}
fnb = fna // 这个为什么可以,因为调用fnb函数时,还是要求传B接口约束的对象进去才能调用
fnb(b)
// fna = fnb // 报错


// 双向协变: tsconfig strictFunctionTypes 设置为false 支持双向协变 fna fnb 随便可以来回赋值