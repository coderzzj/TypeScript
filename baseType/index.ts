// typescript基本数据类型
// 布尔型：最简单的就是true、false
let isDone: boolean = true

// 数字类型，和js一致
let num: number = 8
let num1: number = 0xf00d

// 字符串类型
let str: string = "aaaa"
// 模版字符串类型
let firstName: string = "jack"
let allName = `kkk${firstName}`

console.log(allName)

// 数组
// 第一种定义数组的方式：
let arr: number[] = [1, 2, 3]
// 第二种数组泛型：
let list: Array<number> = [1, 2, 3]

// 元组:tuple--->元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number] = ["helloWorld", 6]
//当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].slice(0, 2))
//当访问一个越界的元素，会使用 联合类型 替代

// enum:枚举类型--->enum类型是对JavaScript标准数据类型的一个补充
enum Color { red, blue, yellow, green, black }
let c: Color = Color.black

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。或者，全部都采用手动赋值,枚举类型提供的一个便利是你可以由枚举的值得到它的名字
let colorName: string = Color[2]
console.log(colorName)

// 任意值：any-->为不清楚类型的变量指定一个类型
let notSure: any = 4
let listAny: any[] = [1, false, 'hello', []]
listAny[2] = 66
console.log(listAny)

// 空值：void
//当一个函数没有返回值时，你通常会见到其返回值类型是void
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let notValue: void = null
let noValue: void = undefined

// null undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和void相似，它们的本身的类型用处不是很大
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量
let u: undefined = undefined
let n: null = null
// strictNullChecks标记---null和undefined只能赋值给void和它们各自
let nullValue: null | undefined | void = null

// never类型
// never类型表示的是那些永不存在的值的类型
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
// 类型断言有两种形式 其一是“尖括号”语法：
let someValue: any = "hello world"
let strLength: number = (<string>someValue).length
console.log(strLength)

let strLength2: number = (someValue as string).length


