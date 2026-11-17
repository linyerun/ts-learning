export {}

const met:MethodDecorator = (...args) => {
    console.log(args)
    // 0: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    // 1: 成员的名字
    // 2: 成员的属性描述符
}

class A {
    name: string = '小满'

    constructor() {}

    @met
    getName ():string {
        return this.name
    }

    @met
    setName (name: string) {
        this.name = name
    }
}


const a = new A()
a.getName()