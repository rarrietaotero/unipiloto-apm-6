/* objetos y funciones */
var my_object = new Object();

var other_object = {};

my_object = {
  firstName: 'Alejandro',
  lastName: 'Romero',
  phone: 1137373
};

my_object.address = 'Cra xxxxxxxxxx';

console.log(my_object.firstName);

console.log(my_object['lastName']); 

var key;

for(key in my_object){
  console.log(my_object[key]);
}

// Funciones 
function test() {
  lastName = 'Romero';
  phone = 1137373;
  console.log(lastName, phone);
}

var test_one = function() {
  lastName = 'Romero';
  phone = 1137373;
  console.log(lastName, phone);
};

my_object.address = 'Cra xxxxxxxxxx'
 
console.log(my_object.firstName);
console.log(my_object['lastName']); 
var key;
for(key in my_object){
  console.log(my_object[key]);
}
// Funciones 
function test(){
  console.log('ejecutando una funcion');
}
test();
// usando funcion anonima
var bye_bye = function(){
  console.log('Que tengan una feliz semana santa');
}
bye_bye();

console.log('ejecutando una funcion');

test();
test_one();

// usando funcion anonima

var bye_bye = function(){
  console.log('Que tengan una feliz semana santa');
}

bye_bye();