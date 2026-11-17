
// 导入并使用
import {TestNs01} from "./namespace"
console.log(TestNs01.Fn(1111))

// 简化导入
import a = TestNs01.Inner.A1
console.log(a)

console.log(TestNs01.Time2)