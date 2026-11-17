// https://xiaoman.blog.csdn.net/article/details/122342425
export {}

class Person {
    name: string
    age: number = 25 // 构造函数中没给它赋值那就得给它默认值,不然会报错

    public pubKey: string = ''  // 内外都可以访问, 可以忽略public关键字
    private priKey: string = '' // 只能内部访问
    protected proKey: string = ''// 只能在内部或者子类内部访问

    static staKey: number // 静态属性, 只能通过"类名.属性名"来访问
    // 静态方法, 通过"类名.方法名"来访问, 静态方法内部可以通过this来访问静态方法和静态属性
    static f1() {
        console.log(this.staKey)

    }
    static f2() {
        this.f1()
    }

    constructor(name: string, age?: number) {
        this.name = name
    }

    run(): void {
        console.log(`${this.name}, 年龄:${this.age} 开始跑步`)
    }

    private f1() {
        console.log('private')
    }

    protected f2() {
        console.log('protected')
    }


    public f3() {
        console.log('public')
    }
}

const lyr = new Person('linyerun')
lyr.run()
console.log(lyr.name)
Person.staKey = 100
Person.f1()
Person.f2()