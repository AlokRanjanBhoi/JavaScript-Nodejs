var counter = (function() {
// private stuff
var count =0;

function print(message) {
    console.log(message+'---' + count);
}
//return an  object
return {
    // value: count,
    get:function() {return count;},

    set: function(value) { count = value;},

    increment: function() {
        count +=1;
        print('After Increment: ')
    },

    reset: function() {
        print('before reset: ');
        count =0;
        print('After reset:');
    }
}


})();

counter.increment();
counter.increment();
counter.increment();

// Accidentally created a consure
// console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset();
