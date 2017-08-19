var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    }
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, age, name, lastname, classes, grade, group) {
        _super.call(this, id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.setGroup = function (group) {
        this.group = group;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(profession, grade, group, students) {
        _super.call(this, 1, 30, "Alejandro", "Romero");
        this.profession = profession;
        this.grade = grade;
        this.group = group;
        this.students = students;
    }
    Teacher.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Teacher.prototype.getProfession = function () {
        return this.profession;
    };
    Teacher.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Teacher.prototype.getGrade = function () {
        return this.grade;
    };
    Teacher.prototype.setGroup = function (group) {
        this.group = group;
    };
    Teacher.prototype.getGroup = function () {
        return this.group;
    };
    Teacher.prototype.setStudents = function (students) {
        this.students = students;
    };
    Teacher.prototype.getStudents = function () {
        return this.students;
    };
    return Teacher;
}(Person));
var estudiante1 = new Student(1, 25, "Rafael", "Arrieta", ["Programacion", "Matematicas", "Estadisticas"], 2, 1);
var estudiante2 = new Student(2, 25, "Juan", "Perez", ["Programacion", "Matematicas", "Estadisticas"], 2, 1);
var estudiante3 = new Student(3, 25, "Andres", "Hoyos", ["Programacion", "Matematicas", "Estadisticas"], 2, 1);
var profesor1 = new Teacher("Ingeniero de Sistemas", 2, 1, [estudiante1, estudiante2, estudiante3]);
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
console.log(profesor1);
