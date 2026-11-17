// https://xiaoman.blog.csdn.net/article/details/122342425
export {}

// 抽象类不能被实例化
abstract class Abc {
    name: string

    constructor(name: string) {
        this.name = name
    }

    getName() {
        return this.name
    }

    abstract abcFunc(): void
}


class Person  extends Abc {
    constructor(name: string) {
        super(name);
    }

    abcFunc() {
        console.log(this.name)
    }
}

const p = new Person('lyr')
p.abcFunc()
