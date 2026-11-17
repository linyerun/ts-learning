// https://xiaoman.blog.csdn.net/article/details/122760342
export {}

/*
1、infer声明只能出现在extends子语句中
*/
interface User {
    name:string
    age:number
}
type Result = Promise<User>
// 获取Result中的User类型
type PromiseRes<T> = T extends Promise<infer R> ? R : T
type ResultRt = PromiseRes<Result>

type Result2 = Promise<Promise<Promise<User>>>
type PromiseRes2<T> = T extends Promise<infer R> ? PromiseRes2<R> : T // 支持递归拆解
type ResultRt2 = PromiseRes2<Result2>
type ResultRt1 = PromiseRes2<Result>

// 协变, 发生在对象中的类型推断,返回联合类型
let obj = {
    name:'小满',
    age:123
}
type ObjTypes<T> = T extends {name: infer R, age: infer R} ?  R : T
type objT = ObjTypes<typeof obj>

// 逆变, 发生在函数参数类型推断,返回交叉类型
const fnObj = {
    f1: (p: string) => {},
    f2: (p: number) => {},
}
type FnObjTypes<T> = T extends {
    f1: (p: infer R)=>void
    f2: (p: infer R)=>void
}? R : 'function'
type fnObjT = FnObjTypes<typeof fnObj> // 返回never,因为string&number就是never