// class syntax
class Student {
    constructor(name, department){
        this.name = name;
        this.department = department;
    }

    greet() {
        console.log(`Hello! ${this.name} welcome to ${this.department} Department`);
    }



}



const student = new Student('Jakariya Aman', 'CSE');
student.greet();


