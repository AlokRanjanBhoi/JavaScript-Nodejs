let a = [3,5,11,23,26,28,35,42]
let b = ["Alok", "Ranjan", "Bhoi", "Machine", "Learning"]

console.log(a[0]);
console.log(b[1]);

console.log(a);

a[0] = 7;
// Object
console.log(typeof a);

console.log(a.length);// Actual number, non Zero base Index

/*
Not a Good...
a[10]= 77;
console.log(a);
console.log(a.length);
*/


// Push() function add last from the array.
a.push(77);
console.log(a);
console.log(a.length);

// Pop() function remove from last of the array.
a.pop();
a.pop();
a.pop();
console.log();
console.log(a.length);

