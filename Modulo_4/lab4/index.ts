interface Vehicle {
	wheel: number;
	fuel: string;
	color: string;

	getWheel(): number;
	getFuel(): string;
	getColor(): string;

	setWheel(wheel:number): void;
	setFuel(fuel:string): void;
	setColor(color:string): void;
}

class Car implements Vehicle{
	wheel: number;
	fuel: string;
	color: string;

	constructor(){}

	getWheel(): number{
		return this.wheel;
	}
	getFuel(): string{
		return this.fuel;
	};
	getColor(): string{
		return this.color;
	};

	setWheel(wheel: number): void{
		this.wheel = wheel;
	}
	setFuel(fuel: string): void{
		this.fuel = fuel;
	}
	setColor(color:string): void{
		this.color = color;
	}
}

var carro1 = new Car();

carro1.setFuel("Gasolina");
console.log(carro1.getFuel());