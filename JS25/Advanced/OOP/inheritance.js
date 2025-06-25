/**
 * @class - student and admission class
 * @inheritance - inheritance student class by admission class
 * 
 */


class Student {
    constructor(name, age, department){
        this.name = name;
        this.age = age;
        this.department = department;
    }

    greetStudent() {
        console.log(`Welcom to ${this.name} to ${this.department} epartment`);
    }

}

// create instantiation or object
const stdName = 'Jakariya Aman';
const age = 26;
const department = 'CSE';
student = new Student(stdName, age, department);
    student.greetStudent();



// Admission 
class Admission extends Student {
    constructor(name, age, session, reg, department){
        super(name, age, department);
        this.session = session;
        this.reg = reg;
    }

    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Session: ${this.session}`);
    }
}



/// create object or instantiation
const session = 2025;
const reg = 344844949;

stdInfo = new Admission(stdName, age, session, reg, department);

stdInfo.showInfo();
stdInfo.greetStudent();






