export {}

const met:ParameterDecorator = (...args) => {
    console.log(args);
    /*
        0:  对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        1:  成员的名字
        2:  参数在函数参数列表中的索引
    */
}

class A {
    constructor() {

    }
    setParams (@met name:string = '213') {
    }
}


const a = new A();