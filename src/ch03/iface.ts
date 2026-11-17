// https://xiaoman.blog.csdn.net/article/details/122173993
export {}

// 使用接口约束的时候不能多一个属性也不能少一个属性
interface Person {
    a:string
    b:string,
}
const person:Person  = {
    a: '',
    b: '',
}

//重名interface会合并
interface A{name:string}
interface A{age:number}
const aImpl: A = {
    name:'',
    age: 0,
}

// 接口继承
interface B1{
    name:string,
}
interface B2{
    sex: string
}
interface C extends B1,B2{
    age:number
}
const cImpl: C = {
    name:'',
    sex:'',
    age:0,
}

//可选属性的含义是该属性可以不存在
interface IPerson {
    b?:string,
    a:string
}

const p:IPerson  = {
    a:"213"
}

// "[随便起一个名称: 类型1]: 类型2" 表示obj中可以有任务多个key为类型1,值为类型2的属性
interface P1 {
    b?:string,
    a:string,
    [k: string]: any;
}
const p1:P1  = {
    a:"213",
    c:"123"
}

// 只读属性 readonly
interface P2 {
    readonly name:string,
}
const p2:P2  = {
    name: '111',
}
// p2.name = '222' // 报错的

// 添加函数
interface P3 {
    get: ()=>string
}
const p3:P3  = {
    get: ()=> ''
}

