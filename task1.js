// Task 1 - second largest number

var numbers = [23, 45, 67, 89, 12, 90, 44];

var first = 0;
var second = 0;

for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] > first) {
        second = first;
        first = numbers[i];
    }
    else if(numbers[i] > second) {
        second = numbers[i];
    }
}

console.log("Array: " + numbers);
console.log("First largest: " + first);
console.log("Second largest: " + second);