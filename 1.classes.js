class Person {

    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Rodolfo", 28)
const newPerson1 = new Person("Rodrigo", 44)
const newPerson2 = new Person("Luciene", 42)

newPerson.talk()
newPerson1.talk()
newPerson2.talk()
