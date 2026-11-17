// https://xiaoman.blog.csdn.net/article/details/122398245
export {}

// 类型推断
let s = '1' // string
let a  // any


// 类型别名
type str = string
let ss: str = '1111'

// 函数别名
type ft = (str: string) => str

// 联合类型别名
type str_num = string | number

// 定义值的别名
type val_t = boolean | 1 | '1'

// 交叉类型别名
interface T1 {
    name: string
}
interface T2 {
    age: number
}
type and_t = T1 & T2
let tt: and_t = {
    name: '',
    age: 0,
}

// --- 高级用法
// 左边的值会作为右边值的子类型? 1 : 0
type a1 = 1 extends number ? 1 : 0 //1

type a2 = 1 extends Number ? 1 : 0 //1

type a3 = 1 extends Object ? 1 : 0 //1

type a4 = 1 extends any ? 1 : 0 //1

type a5 = 1 extends unknown ? 1 : 0 //1

type a6 = 1 extends never ? 1 : 0 //0

// 顶层: any, unknown
// 二层: Object
// 三层: Number, String, Boolean
// 四层: number, string, boolean
// 五层: 1, 'test', true/false
// 底层: never