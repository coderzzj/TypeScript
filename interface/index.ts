// TypeScript的核心原则之一是对值所具有的结构进行类型检查 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
// 使用接口（Interfaces）来定义对象的类型

interface labelValue {
    label: string
}

function printLabel(obj: labelValue) {
    console.log(obj.label)
}

let myObj = { age: 24, name: "hello", label: "world" }
printLabel(myObj)

// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以

// 可选属性
interface SquareConfig {
    color?: string
    width?: number
}
function createSquare(config: SquareConfig) {
    return config
}

console.log(createSquare({ color: "red" }))

// 只读属性
interface Point {
    readonly x: number
    readonly y: number
}

let pl: Point = { x: 20, y: 30 }
// readonlyArray<T>类型 它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3]
let b: ReadonlyArray<number> = a

// readonly vs const ?
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly

// 字符串索引签名:你能够确定这个对象可能具有某些做为特殊用途使用的额外属性
interface Config {
    name: string
    age: number
    color?: string
    obj: object
    [propName: string]: any
}

function getConfig(config: Config) {
    return config.name + config.age
}

let value = getConfig({ name: "hello", age: 25, obj: { a: 1, b: "hello" } })

console.log(value)

// 函数类型
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型

// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface searchFunc {
    (source: string, subString: string): boolean
}

// 可索引类型
// 共有支持两种索引签名：字符串和数字
interface stringArray {
    [index: number]: string
}

let myArray: stringArray = ["hello", "bob"]
let myStr: string = myArray[0]
console.log(myStr)

// 类类型
// 实现接口
// TypeScript能够用接口来明确的强制一个类去符合某种契约

interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
}

class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) {

    }
}

// 在接口中描述一个方法，在类里实现它
// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
// 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型


// 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = <Square>{}
square.color = "blue"
square.sideLength = 10

// 混合类型
// 接口继承类型

// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）


