// https://xiaoman.blog.csdn.net/article/details/122170624
export {}


/*
声明变量的时候没有指定任意类型默认为any, 如果使用any 就失去了TS类型检测的作用

unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow

any类型在对象没有这个属性的时候还在获取是不会报错的, unknow是不能调用属性和方法

* */

let s
s = '1'

let u: unknown
u = 100

const obj: any = {
    age: 1
}
console.log(obj.age)

const obj2: unknown = {
    age: 1
}
// obj2.age // 直接报错