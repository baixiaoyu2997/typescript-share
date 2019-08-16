abstract class Animal3 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

let a = new Animal3('Jack');

abstract class Animal4 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat extends Animal4 {
    public eat() {
        console.log(`${this.name} is eating.`);
    }
}

let cat = new Cat('Tom');
