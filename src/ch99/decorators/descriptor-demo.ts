export {};

/* 1. descriptor 就是 Object.getOwnPropertyDescriptor(A.prototype, key) 的结果 */
function showDescriptor(
  target: any,
  key: string | symbol,
  descriptor: PropertyDescriptor,
) {
  console.log("---------- descriptor 长什么样 ----------");
  console.log({
    方法名: String(key),
    "typeof descriptor.value": typeof descriptor.value,
    writable: descriptor.writable,
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
  });
}

/* 2. 最常用：包一层 wrapper，日志 + 计时 + 透传 this / 返回值 / 异常 */
function logAndTime(
  target: any,
  key: string | symbol,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value;

  descriptor.value = function (this: any, ...args: any[]) {
    console.log(
      `  -> ${String(key)}(${args.join(", ")}) | this.base=${this.base}`,
    );
    const start = Date.now();
    try {
      const result = original.apply(this, args);
      console.log(
        `  <- ${String(key)} 返回 ${result}，耗时 ${Date.now() - start}ms`,
      );
      return result;
    } catch (err) {
      console.log(`  <- ${String(key)} 抛错：${(err as Error).message}`);
      throw err;
    }
  };

  return descriptor; // 交回给 __decorate 写回原型
}

/* 3. 反例：包装函数造出来了，但没写回 descriptor 也没 return —— 白干 */
function brokenDecorator(
  target: any,
  key: string | symbol,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value;
  const wrapper = function (this: any, ...args: any[]) {
    console.log("  [broken] 你永远看不到我");
    return original.apply(this, args);
  };
  // 缺一行：descriptor.value = wrapper; 或 return {...descriptor, value: wrapper}
}

/* 4. 改属性标志：让方法变成可枚举 */
// 唯一作用：把方法的 enumerable 从 false 改成 true，让 for...in 能遍历到它。
function makeEnumerable(
  target: any,
  key: string | symbol,
  descriptor: PropertyDescriptor,
) {
  descriptor.enumerable = true;
  return descriptor;
}

class Calculator {
  base = 10;

  @showDescriptor
  @logAndTime
  add(n: number) {
    return this.base + n; // 验证 this 透传
  }

  @logAndTime
  divide(a: number, b: number) {
    if (b === 0) throw new Error("除数不能为 0");
    return a / b;
  }

  @brokenDecorator
  secret() {
    return 42;
  }

  @makeEnumerable
  hello() {
    return "hi";
  }
}

const c = new Calculator();
console.log("add(5) =", c.add(5));
console.log("divide(8, 2) =", c.divide(8, 2));
try {
  c.divide(1, 0);
} catch {}
console.log("secret() =", c.secret());

console.log("---------- for...in（只有 hello 被改成 enumerable）----------");
for (const k in c) {
  console.log("for...in:", k);
}
