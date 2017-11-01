// scripts.js
var a = 1,
    b = 1,
    value;
value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value >= 0) {
  console.log('wartość dodatnia')
}
else {
  console.log('wartość ujemna')
};

switch (value) {
  case 0:
    console.log('jest 0')
    break
  default:
    console.log('liczba inna niż 0')
}
