function findingBadData(arr) {
    if (Array.isArray(arr)) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                count++;
            }
        }
        return count;
    } else {
        return 'Please enter valid array!';
    }
}

/*
The function "findingBadData" takes in input "arr" which could be a array.The function first checks the type of "arr" and verifies that it is indeed a array.If it is a array, it iterates through the elements of the array, counting how many of them are less than zero. Finally, it returns the count of elements less than zero. If arr is not an array, it returns the message 'Please enter valid array!'.
*/

console.log(findingBadData([1,2,5]));
console.log(findingBadData([2,-5,-7,-13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));