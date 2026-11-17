// https://xiaoman.blog.csdn.net/article/details/122490830
export {}

// 泛型函数
function fn1<T>(a: T, b: T): Array<T> {
    return [a, b]
}
fn1<string>('1', '2')

// 泛型接口
interface MyInter<T> {
    (arg: T): T
}
function fn<T>(arg: T): T {
    return arg
}
let result: MyInter<number> = fn
// let result: MyInter<number> = fn<number>
result(123)

// 泛型字面量
let foo: {<T>(arg: T): T}
foo = function <T>(arg: T):T {
    return arg
}
foo(123)

// 泛型约束
interface Len {
    length: number
}
function getLength<T extends Len>(elem: Len): number {
    return elem.length
}

// keyof 是 TypeScript 的类型操作符，用来获取一个类型的所有“可访问属性名”，结果是这些属性名字面量组成的联合类型。
// 它只存在于类型层，编译后没有运行时开销。
function fn2<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let o = { a: 1, b: 2, c: 3 }
console.log(fn2(o,'a'))
// console.log(fn2(o,'d')) // 报错

// 泛型类
class Add<T> {
    attr: T[] = [];
    add(a: T): void {
        this.attr.push(a)
    }
}
let add = new Add<number>()
add.add(1)
add.add(2)
console.log(add.attr)