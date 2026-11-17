// https://xiaoman.blog.csdn.net/article/details/122342425
export {}

interface PersonClass1 {
    get(type: boolean): boolean
}

interface PersonClass2 {
    asd: string
    set(asd: string): void
}

class PersonImpl {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class PersonImpl2 {
    name: string
    constructor(name: string) {
        this.name = name
    }
}
// extends只能继承1个, implements可以实现多个
class Person extends PersonImpl implements PersonClass1, PersonClass2 {
    asd: string
    constructor(asd: string, name: string) {
        super(name)
        this.asd = asd
    }
    get(type: boolean): boolean {
        return type
    }
    set(asd: string) {
        this.asd = asd
    }
}

const p = new Person('1','2')

