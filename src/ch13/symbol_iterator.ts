export {}

// 一个对象只要实现了 [Symbol.iterator]() 方法，并且该方法返回一个迭代器，它就是可迭对象，可以使用for of遍历
const iterable = {
    [Symbol.iterator]() {
        let i = 0
        return {
            next(): {value: number, done: boolean} {
                if (i < 3) {
                    return {value: i++, done: false}
                }else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}
for (const val of iterable) {
    console.log(val)
}

// 数组内部有[Symbol.iterator]
console.log('----------')
let arr = [1,2,3,4]
const nextObj = arr[Symbol.iterator]()
while (true) {
    let res = nextObj.next()
    if (res.done) {
        break
    }
    console.log(res.value)
}