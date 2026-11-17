// https://xiaoman.blog.csdn.net/article/details/128053531
export {}

// object 代表所有非值类型的类型，例如 数组 对象 函数等
let o:object = {}//正确
let o1:object = []//正确
let o2:object = ()=>123 //正确
// let b:object = '123' //错误
// let c:object = 123 //错误


// {}看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型
let a1: {} = {name:1} //正确
let a2: {} =  () => 123//正确
let a3: {} = 123//正确


