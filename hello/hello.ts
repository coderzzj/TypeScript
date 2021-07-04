function sayHello(person: string) {
    return "hello" + person
}

let user: string = "jack"

console.log(sayHello(user))

interface Person {
    name: string,
    age: number,
    sayHello: Function,
    like: Object
}

let p1: Person

const people: Person = {
    name: "zzj",
    age: 24,
    sayHello: () => {

    },
    like: {}
}

console.log(people)

class Animal {
    private name: string
    type: string
    constructor(type: string, name: string) {
        this.type = type
        this.name = name
    }
    sayHello() {
        console.log("test class")
    }
}

console.log(new Animal("dog", "aa"))
