export {}

const list: Set<Function> = new Set()

const autorun = (cb: Function) => {
    if (cb) {
        list.add(cb)
    }
}

const observable = <T extends object>(params: T) => {
    return new Proxy(params, {
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver)
            list.forEach(fn => fn())
            console.log(list)
            return result
        }
    })
}

const person = observable({ name: "小满", attr: "威猛先生" })

autorun(()=>{
    console.log('我变化了')
})

person.attr = '威猛个捶捶'