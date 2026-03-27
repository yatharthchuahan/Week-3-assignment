// Task 2
// function to get unique elements from 2 arrays

function getUniqueElements(array1, array2) {
    var newArray = [];
    
    
    for (var x = 0; x < array1.length; x++) {
        var alreadyThere = false;
        
        
        for (var y = 0; y < array2.length; y++) {
            if (array1[x] === array2[y]) {
                alreadyThere = true;
                break;
            }
        }
        
       
        if (!alreadyThere) {
            newArray.push(array1[x]);
        }
    }
    
    
    for (var p = 0; p < array2.length; p++) {
        var alreadyThere2 = false;
        
        
        for (var q = 0; q < array1.length; q++) {
            if (array2[p] === array1[q]) {
                alreadyThere2 = true;
                break;
            }
        }
        
        
        if (!alreadyThere2) {
            newArray.push(array2[p]);
        }
    }
    
    return newArray;
}

var arrA = [1, 2, 3, 4, 5, 6];
var arrB = [4, 5, 6, 7, 8, 9];

var resultArray = getUniqueElements(arrA, arrB);

console.log("Array A: " + arrA);
console.log("Array B: " + arrB);
console.log("Unique elements: " + resultArray);