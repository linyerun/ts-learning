// https://xiaoman.blog.csdn.net/article/details/126314150
export {}

type Arr = [1,2,3,4]

// 取头元素
type first<T> = T extends [infer one, ...any[]] ? one : T
type ArrFirst = first<Arr>

// 取尾元素
type last<T> = T extends [...any[], infer final] ? final : T
type ArrLast = last<Arr>

// 剔除第一个元素
type outFirst<T> = T extends [unknown, ...infer Others]?Others:T
type ArrOutFirst = outFirst<Arr>

// 提取最后一个元素
type outLast<T> = T extends [...infer Others, unknown]?Others:T
type ArrOutLast = outLast<Arr>

// 反转数组
type rev<T> = T extends [...infer Others, infer last]?[last, ...rev<Others>]:T
type ArrRev = rev<Arr>
