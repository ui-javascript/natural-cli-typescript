class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}


// protected成员在派生类中仍然可以访问
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

// 错误
// console.log(howard.name); 