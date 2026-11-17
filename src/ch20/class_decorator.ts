const watcher = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getParams = <T>(params: T): T => {
            return params
        }
        target.prototype.getOptions = (): string => {
            return name
        }
    }
}

const watcher2 = (name: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.getWatcher2Name = ():string => {
            return name
        }
    }
}

@watcher2('watcher2')
@watcher('name')
class A {
    constructor() {

    }
}

const a = new A();
console.log((a as any).getParams('123'));
console.log((a as any).getOptions());
console.log((a as any).getWatcher2Name());
