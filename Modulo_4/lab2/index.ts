class Person {
	id: number;
	age: number;
	name: string;
	lastname: string;

	constructor(id: number, age: number, name: string, lastname:string){
		
		this.id = id;
		this.age = age;
		this.name = name;
		this.lastname = lastname;
	}
}

class Student extends Person {
	classes:Array<string>;
	grade:number;
	group:number;

	constructor(id: number, age: number, name: string, lastname:string, classes:Array<string>, grade:number, group:number){
		super(id, age, name, lastname);
		this.classes = classes;
		this.grade = grade;
		this.group = group;
	}

	setClasses(classes: Array<string>): void{              
		this.classes = classes;
	}

	getClasses(): Array<string>{
		return this.classes;
	}

	setGrade(grade: number): void{              
		this.grade = grade;
	}

	getGrade(): number{
		return this.grade;
	}

	setGroup(group: number): void{              
		this.group = group;
	}

	getGroup(): number{
		return this.group;
	}
}

class Teacher extends Person {
	profession:string;
	grade:number;
	group:number;
	students:Array<Student>;

	constructor(profession:string, grade:number, group:number, students:Array<Student>){
		super(1, 30, "Alejandro", "Romero");
		this.profession = profession;
		this.grade = grade;
		this.group = group;
		this.students = students;

	}

	setProfession(profession: string): void{              
		this.profession = profession;
	}

	getProfession(): string{
		return this.profession;
	}

	setGrade(grade: number): void{              
		this.grade = grade;
	}

	getGrade(): number{
		return this.grade;
	}

	setGroup(group: number): void{              
		this.group = group;
	}

	getGroup(): number{
		return this.group;
	}

	setStudents(students: Array<Student>): void{              
		this.students = students;
	}

	getStudents(): Array<Student>{
		return this.students;
	}
}

var estudiante1 = new Student(1, 25, "Rafael", "Arrieta",["Programacion", "Matematicas", "Estadisticas"] , 2, 1);
var estudiante2 = new Student(2, 25, "Juan", "Perez",["Programacion", "Matematicas", "Estadisticas"] , 2, 1);
var estudiante3 = new Student(3, 25, "Andres", "Hoyos",["Programacion", "Matematicas", "Estadisticas"] , 2, 1);
var profesor1 = new Teacher("Ingeniero de Sistemas", 2, 1, [estudiante1, estudiante2, estudiante3]);

console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
console.log(profesor1);

