var Car = (function () {
    function Car() {
    }
    Car.prototype.getWheel = function () {
        return this.wheel;
    };
    Car.prototype.getFuel = function () {
        return this.fuel;
    };
    ;
    Car.prototype.getColor = function () {
        return this.color;
    };
    ;
    Car.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Car.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    return Car;
}());
var carro1 = new Car();
carro1.setFuel("Gasolina");
console.log(carro1.getFuel());
