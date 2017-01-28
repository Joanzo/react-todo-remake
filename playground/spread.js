/*function add(a,b) {
    return a + b;
}
console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));*/

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [3, groupA];
var finalspread = [3, ...groupA];

console.log(final);
console.log(finalspread);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

// Hi Andrew, you are 25
function greet(name,age) {
    console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew
function greetName(names){
    names.forEach(function(name) {
        console.log('Hi ' + name);
    });
}
greetName(final);


