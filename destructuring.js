let a, b, c, d, e;

let name = ["ALOK", "Ranjan", "Bhoi", "Alisa", "Rani"];

[a, b, c, e, d] = name;
/* 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */

/* 
let others;

[a, b, ...others] = name;

console.log(a);
console.log(b);
console.log(others); */

let year, model ;

({year, model} = {
    make: 'bmw',
    model: '17io3',
    year: '2010',
    value: '550000'
});

console.log("year: ",year);
console.log( "Model: ",model);