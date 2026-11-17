// https://xiaoman.blog.csdn.net/article/details/122758713
export {}

// Record: 约束一个对象的key，value只能从规定的类型中取一个
const obj: Record<'1'|'2'|2, 'a'|'b'|'c'> = {
    '1':'a',
    2:'c',
}
console.log(obj)
type MyRecord<K extends keyof any, V> = {
    [k in K]: V
}
const newObj: MyRecord<'1'|'2'|2, 'a'|'b'|'c'> = {
    '1':'a',
    2:'c',
}
console.log(newObj)


// ReturnType: 获取函数的返回值类型
const fn = () => {
    return 'lyr'
}
type fnRtType = ReturnType<typeof fn>
type MyReturnType<T extends Function> = T extends (...args:any[])=>infer Rt ? Rt : never
type myFnRtType = MyReturnType<typeof fn>