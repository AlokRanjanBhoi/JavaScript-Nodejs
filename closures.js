function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

var alok = sayHello('Alok');
var ranjan = sayHello('Ranjan');
var bhoi = sayHello('Bhoi');

alok();
ranjan();
bhoi();
