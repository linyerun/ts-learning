//
export {}

/*
typeof 只能返回有限的字符串类型，包括 “string ”、“number”、“boolean”、“symbol”、“undefined” 和 “object”。
对于函数、数组、null 等类型，typeof 也会返回 “object”。

instanceof 操作符用于检查一个对象是否是某个类的实例

自定义守卫的核心是返回类型谓词 paramName is Type
*/

const isString = function (str: any): str is string {
    return typeof str === 'string'
}

const isNumber = (num: any): num is number => typeof num === 'number'

const isFn = (fn: any): fn is Function => typeof fn == 'function'

function isObject(obj: any): obj is Object {
    return ({}).toString.call(obj) == '[object Object]'
}

const fn = (data:any) => {
    let value;
    if(isObject(data)){
        Object.keys(data).forEach(key=>{
            value = data[key]
            if(isString(value)){
                data[key] = value.trim()
            }
            if(isNumber(value)){
                data[key] = value.toFixed(2)
            }
            if(isFn(value)){
                data[key]()
            }
        })
    }
}
const obj = {
    a: 100.22222,
    b: ' test  ',
    c: function () {
        console.log(this);
        return this.a;
    },
    d: 100.10,
}
fn(obj)