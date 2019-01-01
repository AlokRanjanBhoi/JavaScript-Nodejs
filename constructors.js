/* let Car = {
    make: 'bmw',
    model: '175li';
    year: 2010
}; */

/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar  new Car('bmw', '175li', 2010);
console.log(myCar);
 */

 function MyFunction() {
     console.log('I am a simple function');
 }

 let myFunction = new MyFunction();

 console.log(typeof myFunction);

 MyFunction();

 // Can't really do anything with this particular 
 // object ... it's certainly NOT a function
 // reference anymore!
 // myFunction();
