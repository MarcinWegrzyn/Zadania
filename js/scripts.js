// scripts.js
function Phone(brand, price, color, year) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.year = year;

}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ", it was made in " + this.year + ".");
}

var GalaxyS7 = new Phone ('Samsung', 2000, 'blue', 2015),
    IphoneX = new Phone ('Apple', 1000000, 'black', 2017),
    N3210 = new Phone ('Nokia', 200, 'red', 2000); // Czy var może być liczbą? Jeżeli tak to czy daję ją jako string '3210' ?

N3210.printInfo();
IphoneX.printInfo();
GalaxyS7.printInfo();

Phone.prototype.printPrice = function() {
    console.log( 'Worth of all 3 phones is ' + (IphoneX.price + N3210.price + GalaxyS7.price) +' PLN');
  }

var Sum = new Phone();
Sum.printPrice();







