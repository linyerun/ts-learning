// https://xiaoman.blog.csdn.net/article/details/122544685

export namespace TestNs01 {
   export const Time: number = 100
    export const Fn = <T>(arg: T): T => {
       return arg
    }


    console.log(Fn(Time))


    // 支持嵌套
    export namespace Inner {
       export const A1: number = 1
    }
}

// 和上面的TestNs01重名，会进行一个合并
export namespace TestNs01 {
    export const Time2: number = 200
}