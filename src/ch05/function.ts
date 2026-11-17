// https://xiaoman.blog.csdn.net/article/details/122191746
export {}

//注意，参数不能多传，也不能少传 必须按照约定的类型来
const fn = (name: string, age:number): string => {
    return name + age
}
let res = fn('张三',18)
console.log(res)


// 函数的可选参数?
const fn2 = (name: string, age?:number): string => {
    return name + age
}
let res2 = fn2('张三')
console.log(res2)


// 默认参数
const fn3 = (name: string = "我是默认值"): string => {
    return name
}
let res3 = fn3()
console.log(res3)


// 接口定义函数
interface Add {
    (num1: number, num2: number): number
}
const add: Add = (num1, num2) => num1+num2
console.log(add(1,2))


// 定义剩余参数
const fn4 = (arr: number[], ...args: any[]) => {
    console.log(arr)
    console.log(args)
}
fn4([1,2,3,4,5], 'a',false,111,1.23)


// 函数重载
// 同一个函数名，写多个“声明签名”，最后写一个“实现签名”。调用时按前面的签名匹配类型，实现签名对外不可见
function fn5(x: string): string;
function fn5(x: number): number;
function fn5(x: string | number): string | number {
    return typeof x === "string" ? x.toUpperCase() : x * 2;
}
fn5("a"); // string
fn5(1);   // number
// fn(true); // 报错