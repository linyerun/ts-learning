interface EventFace {
    // 订阅
    on(name: string, callback: Function): void
    // 发布
    emit(name: string, ...args: Array<any>): void
    // 取消订阅
    off(name: string, callback: Function): void
    // 一次性订阅
    once(name: string, callback: Function): void
}

interface List {
    [key: string]: Array<Function>
}

class Dispatch implements EventFace {
    list: List
    constructor() {
        this.list = {}
    }

    // 在类里面方法只能这么写,不能写箭头函数

    on(name: string, callback: Function): void {
        const arr = this.list[name] || []
        arr.push(callback)
        this.list[name] = arr
    }
    emit(name: string, ...args: Array<any>): void {
        const arr = this.list[name] || []
        for (const fn of arr) {
            fn(...args)
        }
    }
    off(name: string, callback: Function): void {
        const arr = this.list[name] || []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === callback) {
                arr.splice(i, 1)
                break
            }
        }
        this.list[name] = arr
    }
    /*off(name: string, fn: Function) {
        let eventName = this.list[name];
        if (eventName && fn) {
            let index = eventName.findIndex(fns => fns === fn);// 这里返回-1就炸了
            // 修复代码
            if (index < 0) {
                console.error('该事件未监听');
                return
            }
            eventName.splice(index, 1);
        } else {
            console.error('该事件未监听');
        }
    }*/
    once(name: string, callback: Function): void {
        const wrapper = (...args: Array<any>)=>{
            callback(...args)
            this.off(name, wrapper)
        }
        this.on(name, wrapper)
    }
}

export const dispatcher = new Dispatch()
