// https://xiaoman.blog.csdn.net/article/details/122755639
export {}

// Partial: 把interface中的属性全部变成可选的
interface User1 {
    name: string
    age: number
}
type NewUser1 = Partial<User1>
// 实现原理
type MyPartial<T> = {
    [K in keyof T]?: T[K]
}
type MyNewUser1 = Partial<User1>

// Required: 把interface中的属性全部变成必选的
interface User2 {
    name?: string
    age?: number
    sex: string
}
type NewUser2 = Required<User2>
// 实现原理
type MyRequired<T> = {
    [K in keyof T]-?: T[K]
}
type MyNewUser2 = Required<User2>

// Pick: 从interface中的属性中选一部分
interface User3 {
    name?: string
    age?: number
    sex: string
}
type NewUser3 = Pick<User3, 'name'|'sex'>
// 原理
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}
type MyNewUser3 = MyPick<User3, 'name' | 'sex'>

// Exclude: 从一个类型的属性集合中排除指定的属性
type ET = Exclude<'a' | boolean | 'c', 'a' | boolean>
// type ET = Exclude<'a' | boolean | any | 'c', 'a' | boolean | any> // any 在联合类型中"吸收"一切
// type ET = Exclude<'a' | 'b' | 'c' | string | boolean, 'a' | 'b' | boolean>
type MyExclude<T, U> = T extends U ? never : T // 如果 T 的某个成员能赋值给 U → 返回 never（把它"删掉"）

// Omit: 从原始类型中排除指定的属性
interface User4 {
    name?: string
    age?: number
    sex: string
}
type NewUser4 = Omit<User4, 'age'>
type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>]: T[key]
}
type MyNewUser4 = MyOmit<User4, 'age'>
