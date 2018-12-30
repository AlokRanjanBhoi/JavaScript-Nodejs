function first() {
    return this;
}

console.log(first() === global);

function second() {
    'use strict'

    return this;
}

console.log(second() === global);
console.log(second() === undefined);

// this dependes on HOW a function is called.

// An object can be passed as the first argument to call
// or apply and this will be bound to it.

var myObject = { valu: ' My Object '};

// value is set on the global object
global.value = 'Global Object';

function third(name) {
    return this.value + name;
}
// console.log(third());

console.log(third.call(myObject, 'alok'));

console.log(third.apply(myObject, ['alok']));


function fifth(){
console.log(this.firstName + '' + this.lastName);
}

var customer1 = {
    firstName: 'Alok ',
    lastName: 'Bhoi',
    print: fifth
}

var customer2 = {
    firstName: 'Alisa Rani ',
    lastName: 'Bhoi',
    print: fifth
}

customer2.print();
customer1.print();