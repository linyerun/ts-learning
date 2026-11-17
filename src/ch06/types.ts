// https://xiaoman.blog.csdn.net/article/details/122193979
export {}

// 联合类型
let myPhone: number | string  = '010-820'
const fn = (something:number | boolean):boolean => {
    return !!something // !! 只是更简洁的写法，常见于需要把值转成 boolean 的场景。
}
console.log(fn(1))


// 交叉类型
interface People {
    age: number,
    height: number,
}
interface Man{
    sex: string,
}
const xiaoman = (man: People & Man) => {
    console.log(man.age)
    console.log(man.height)
    console.log(man.sex)
}
xiaoman({age: 18, height: 180, sex: 'male'}) // 多一个或者少一个都不行
/*
// 通过下面这种方式可多不可少
let p = {age: 18, height: 180, sex: 'male', aaa:1}
xiaoman(p)
*/

// 类型断言
interface A {
    run: string
}
interface B {
    build: string
}
const fn2 = (type: A | B): string => {
    //可以使用类型断言来推断他传入的是A接口的值
    // return (type as A).run
    return (<A>type).run
}


// 使用any临时断言
// window.abc = 123//这样写会报错因为window没有abc这个东西
// (window as any).abc = 123 //可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的



// as const
let names2 = '小满' as const
// names2 = 'aa' //无法修改
// 数组
let a1 = [10, 20] as const;
const a2 = [10, 20];
// a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30); // 通过，没有修改指针


// 类型断言是不具影响力的
// (将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用 并不会影响结果, 因为编译过程中会删除类型断言)
function toBoolean(something: any): boolean {
    return something as boolean;
}
console.log(typeof toBoolean(1))// 返回值为 1
