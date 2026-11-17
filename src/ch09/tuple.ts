// https://blog.csdn.net/qq1195566313/article/details/122353137?spm=1001.2014.3001.5501
export {}

//元组就是数组的变种
let arr1: [number,string] = [1,'string']
let arr2: readonly [number,boolean,string,undefined] = [1,true,'string',undefined]

//应用场景
let excel: [string, string, number, string][] = [
    ['title1', 'name1', 1, '1231'],
    ['title2', 'name2', 2, '1232'],
    ['title3', 'name3', 3, '1233'],
    ['title4', 'name4', 4, '1234'],
    ['title5', 'name5', 5, '1235'],
]
