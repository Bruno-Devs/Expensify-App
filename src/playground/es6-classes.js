class Person {
    constructor(name = 'some fool', age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `sup, my name is ${this.name}`
    }
    getDescricption() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescricption() {
        let description = super.getDescricption()

        this.hasMajor() ? description += `their major is ${this.major}` : ''

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
       this.homeLocation ? greeting += ` i am visiting from ${this.homeLocation}` : ''
        return greeting
    }
}

const you = new Traveler('ugwu bruno', 67, 'lagos');
console.log(you.getGreeting())

const other = new Traveler();
console.group(other.getGreeting())