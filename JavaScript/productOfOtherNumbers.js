// The problem is an interview challenge from Interview Cake (https://www.interviewcake.com/question/javascript/product-of-other-numbers).
// The solution of the problem consists in manipulating the initial array by shifting it to the left.
// Always the last values from the array are multiplied (all values except for the first one), therefore by changing their positions
// (by shifting and pushing them) the product of all the combinations (except for one value - the first from the array) of the elements is obtained.
// The product from each step is pushed to a new array.


function getProductsOfAllIntsExceptAtIndex(arr) {
    var newArray = [];
    newArray.push(multiplication(arr));   // add the first element to the newArray - the product of all the elements except for the first one
    for(var j=1; j<arr.length; j++) {
        arr.push(arr.shift());   // shift the array to the left and add the shifted element to the end of the array
        newArray.push(multiplication(arr));   // call the multiplication() method on the current order of the elements
    }
    return newArray;
}

function multiplication(array) {   // get the product of the values from the array without including in the operation the first element
   var a = 1;
   for(var i = 1; i < array.length; i++) {
      a = a * array[i];
   }
   return a;
}
