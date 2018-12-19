/*
setTimeout(function() {
    console.log('I waited 2 seconds');
    }, 2000);   

*/

/*

let counter = 0;
function Timeout() {
    setTimeout(function(){
        console.log('hii ' + counter++);
        Timeout();
    }, 2000);
}

Timeout();
// ctrl + c

*/

(function (){
    console.log('Immediately Invoked Function Expression (IIFE) ');
})();
