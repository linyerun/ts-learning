export {};

// 类装饰器
function clsDecorator(name: string): ClassDecorator {
  return (target: any) => {
    /*
     * 类装饰器接受到的这个target是构造函数本身
     * */
    target.prototype.name1 = name;
    console.log("[clsDecorator]", target.prototype.name1); // [clsDecorator] linyerun
  };
}

// 属性装饰器
function setField(name: string): PropertyDecorator {
  return (target: any, key: string | symbol) => {
    target[key] = name;
  };
}

// 属性装饰器
const getField: PropertyDecorator = (target: any, key: string | symbol) => {
  console.log("[getField]", key, target); // [getField] name2 { name2: 'lyr' }
};

// 参数装饰器
const argDecorator: ParameterDecorator = (
  target: any,
  key: string | symbol,
  parameterIndex: number,
) => {
  console.log("[argDecorator]", target, key, parameterIndex);
};

// 方法装饰器
const methodDecorator: MethodDecorator = (
  target: any,
  key: string | symbol,
  descriptor: any,
) => {
  console.log("[methodDecorator]", target, key, descriptor);
  return descriptor;
};

@clsDecorator("linyerun")
class Person {
  name1: string;

  @getField
  @setField("lyr")
  name2: string;
  constructor(@argDecorator name1?: string, name2?: string) {
    this.name1 = name1;
    this.name2 = name2;
  }

  @methodDecorator
  getName1() {
    console.log("[getName1]", this.name1);
  }

  setName1(@argDecorator name: string) {
    this.name1 = name;
    console.log("[setName1]", this.name1);
  }
}

const p = new Person();
console.log(p.name1, p.name2); // undefined undefined
p.setName1("1111");
p.getName1();

/*
 * 打印undefine的原因: setField => getField => methodDecorator => argDecorator => clsDecorator => constructor, 导致最后name们被constructor设置成了undefined
 * */
