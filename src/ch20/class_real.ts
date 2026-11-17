export {}

// ========== 1. class 语法原版（对照组） ==========
class Person {
    constructor(public name: string) { }
    hello() { return `hi, ${this.name}` }
    static create(name: string) { return new Person(name) }
}

// ========== 2. 手写模拟：class 编译成函数后的样子 ==========

// 实例的形状：实例属性 + prototype 上的方法
interface PersonInstance {
    name: string
    hello(): string
}

// 构造函数本身的形状：new 签名 + 静态方法 + prototype
interface PersonConstructor {
    new(name: string): PersonInstance   // 构造签名：没有它 TS 不让你 new（TS7009）
    create(name: string): PersonInstance // static 方法 → 挂在函数本身
    prototype: PersonInstance
}

// constructor 的方法体 → 普通函数的函数体
// this 参数是 TS 的假参数，编译后消失，只用来标注 this 的形状
// 不需要 return this：new 调用时 JS 自动返回 this
const MyPerson = function (this: PersonInstance, name: string) {
    this.name = name
} as unknown as PersonConstructor
// 双重断言：函数类型和 PersonConstructor 互相不重叠，TS 不允许直接 as，
// 先转 unknown 再转目标类型（运行时没有任何转换，只是骗过类型检查）

// 普通方法 → 挂在 prototype 上，所有实例共享
MyPerson.prototype.hello = function (this: PersonInstance) {
    return `hi, ${this.name}`
}

// static 方法 → 挂在函数本身
MyPerson.create = function (name: string) {
    return new MyPerson(name)
}

// ========== 3. 验证：两个版本行为一致 ==========
const p1 = new Person('lin')
const p2 = new MyPerson('lin')

console.log(p1.hello(), p2.hello())            // hi, lin hi, lin
console.log(p2.name)                           // lin：实例属性
console.log(MyPerson.create('yu').hello())     // hi, yu：静态方法

// instanceof 的本质：实例的原型 === 构造函数的 prototype
console.log(Object.getPrototypeOf(p1) === Person.prototype)   // true
console.log(Object.getPrototypeOf(p2) === MyPerson.prototype) // true

// 方法在 prototype 上共享，不是每个实例各存一份
console.log(p2.hello === new MyPerson('other').hello) // true