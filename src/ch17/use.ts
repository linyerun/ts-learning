
// export default只能有一个, 导入之后叫什么名字随便都行
// export可以有多个,使用{}获取
import aaaa, {T1 as t1} from './about_import'

console.log(aaaa.T1)
console.log(aaaa.T2)
console.log(t1)
aaaa.F1()


// 动态引入
import('./about_import').then(res => {
    console.log(res.T1)
    console.log(res.T2)
    res.default.F1()
    console.log(res.default.T1)
}).catch(err => {
    console.error(err)
})
