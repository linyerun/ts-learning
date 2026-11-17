// https://xiaoman.blog.csdn.net/article/details/122380754
export {}

// 数字枚举
enum Types1{
    Red,
    Green,
    Blue
}
enum Types2{
    Red = 0,
    Green,
    Blue
}
enum Types3{
    Red = 1,
    Green,
    Blue
}
enum Types4{
    Red = 10,
    Green = 20,
    Blue = 32,
    Black
}
const t: Types1 = Types1.Red

// 字符串枚举
enum Types5{
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
const t5 = Types5.Blue

// 异构枚举
enum Types6{
   No = "No",
   Yes = 1,
}

// 接口中使用枚举
enum Types7 {
    T1,
    T2,
}
interface A {
    red: Types7.T1
}
let obj:A = {
    red: Types7.T1
}

// const枚举（const 声明的枚举会被编译成常量，普通声明的枚举编译完后是个对象）
const enum Types8{
    No = "No",
    Yes = 1,
}


// 反向映射
enum Enum {
    fall
}
let a = Enum.fall;
console.log(a, typeof a); // 0
let nameOfA = Enum[a];
console.log(nameOfA, typeof nameOfA); // fall
