//
export {}


// 使用 never 类 型来表示不应该存在的状态
function fn1(): never {
    throw new Error('抛异常')
}
function fn2(): never {
    while (true) {

    }
}

// 兜底场景, 我们在type A中加了元素没在isXiaoMan中加那就会触发报错,
// eg: 把函数中的"小小满"注释掉, 就可以看到err那里报错了
type A = '小满' | '大满' | '超大满' | "小小满"
function isXiaoMan(value:A) {
    switch (value) {
        case "小满":
            break
        case "大满":
            break
        case "超大满":
            break
        case "小小满":
            break
        default:
            //是用于场景兜底逻辑,
            const err: never = value;
            return err
    }
}
