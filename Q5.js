// Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops 
// to iterate through array elements.
// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.o In each iteration, add a new incrementing value (starting
//  from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.
// 4. Use the for loop to iterate through the array:
// o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.
var myArray = [];
// for loop for adding value to the array
for (var v = 1; v <= 10; v++) {
    myArray.push(v);
}
console.log(myArray);
// for loop to iterate through array length and display array element with its index
for (var i = 0; i < myArray.length; i++) {
    console.log("Value ".concat(myArray[i], ", and it's index is ").concat(i));
}
;
// for of loop to print value of array
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var element = myArray_1[_i];
    console.log(element);
}
;
