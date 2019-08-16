class Animal2 {
    private age:string;
    public name:string;
    public constructor(name:string) {
        this.name = name;
    }
}

let aa = new Animal2('Jack');
console.log(aa.name); // Jack
aa.name = 'Tom';
console.log(aa.name)
console.log(aa.age)
aa.age='10'
console.log(aa.age)