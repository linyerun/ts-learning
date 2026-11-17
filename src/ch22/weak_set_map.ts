export {}



// weakSet 和 weakMap 的键都是弱引用，不会被计入垃圾回收

// 下面的例子看不出效果的

let obj:any = {name:'小满zs'} //计数:1
let aahph:any = obj //计数:2
let wmap:WeakMap<object,string> = new WeakMap()

wmap.set(obj,'爱安徽潘慧') //2 他的键是弱引用不会计数的
console.log(wmap) // WeakMap { <items unknown> }

obj = null      // 计数:1
aahph = null    //计数:1


//v8 GC 不稳定 最少200ms
setTimeout(()=>{
    console.log(wmap) // WeakMap { <items unknown> }
},500)