export {}

const met:PropertyDecorator = (...args) => {
    console.log(args)
    /*
        1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        2. 属性的名字
        3. undefined
    */
}

class A {
    @met
    name:string = "1"

    constructor() {

    }

}


const a = new A()