// The program represents a solution for the #15 problem from http://thatjsdude.com/interview/js1.html.
// The existing solution from the site is definetly the optmal one.
// This solution consists in creating a new array, setting all its elements to true,
// then setting the true values from the indexes represented by the values from
// the array given as argument (array to be checked) to false.
// Finally, the remaining index with true represents the missing element.


function missingNumber(arr) {
    var len = arr.length;
    var newArray = [];
    var existingNumber;

    if((arr instanceof Array) == false) {   // check if the parameter is an Array
        return;
    }
    else {
        for(var i = 0; i <= len; i++) {
            newArray[i] = true;
        }

        for(var j = 0; j < len; j++) {
            existingNumber = arr[j];
            newArray[existingNumber] = false;
        }

        for(var missingNumber = 0; missingNumber <= len; missingNumber++) {
            if( newArray.includes(undefined) == true ) {
                return;   // check if only one element is missing
            }
            if( (arr.includes(0) != true) && (newArray[missingNumber] == true) && (missingNumber != 0) ) {
                return missingNumber;   // check: - if "0" exists in the initial array
            }                           //        - if exists an element with true value and it is not "0"
        }                                       
    }
}
