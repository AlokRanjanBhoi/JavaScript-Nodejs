/*
function sayHello(){
    console.log('-------------------');
    console.log('Hello');
    console.log('-------------------');
}

// sayHello();
let a = sayHello;
a();
a();
a();

*/

/*
//Eg-2:

function sayHello(){
    console.log('-------------------');
    console.log('Hello'+ name + '!');
    console.log('-------------------');
}
 sayHello('Alok');
 sayHello('Ranjan');
 */

 //Eg-3:
 function calculateTex(amount) {
     let result = amount + 0.0825;
     return result;
 }

 let tax = calculateTex(100);
 console.log(tax);