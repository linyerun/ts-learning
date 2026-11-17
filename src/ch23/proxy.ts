
// 基于new Proxy和Reflect实现对象代理, 还有很多其他方法

let person = {name: 'lyr', age: 25}

let personProxy = new Proxy(person, {
    get(target, fieldName, receiver) {
        if (target.age > 18) {
            return '小林已经成年了'
        }
        return Reflect.get(target, fieldName, receiver)
    },

    set(target, fieldName, newValue, receiver) {
        console.log('[INFO]set', fieldName, newValue)
        return Reflect.set(target, fieldName, newValue, receiver)
    },
})

console.log(personProxy.age)
personProxy.age = 18
console.log(personProxy.age)