// https://xiaoman.blog.csdn.net/article/details/122177058
export {}

// 两种写法本质上是一样的
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

// 用接口表示数组
interface ArrayIface {
    [idx: number]: string
}
let arr3: ArrayIface = ['1', '2']

// 多维数组
let arr4: number[][] = [[1,2,3,4],[1,2,3,4]]

// arguments类数组
function f1(...args: any[]) {
    console.log(arguments) // 每个函数都有的，但是箭头函数没有
    let arr: IArguments = arguments
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
f1(1,'1',false)
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}