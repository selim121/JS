// :::::::::: SOLUTION 01 ::::::::::

//function
function mindGame(num) {
    if (typeof num === 'number') {
        return ((((num * 3) + 10) / 2) - 5);
    } else {
        return 'Please enter valid number!';
    }
}

//description
/*
The function "mindGame" takes in a single input "num" which could be a number.The function first checks the type of "num" and verifies that it is indeed a number.If it is a number, the operations are: first multiply num by 3, then add 10 to the result, divide the sum by 2, subtract 5 from the result and finally return.If the input argument is not a number, the function returns the message "Please enter a valid number!".
*/

// :::::::::: SOLUTION 02 ::::::::::

//function
function evenOdd(str) {
    if (typeof str === 'string') {
        if (str.length % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    } else {
        return 'Please enter valid string!';
    }
}

//description
/*
This function, "evenOdd", takes in a single argument "str" which could be a string. The function first checks the type of "str" and verifies that it is indeed a string. If it is a string, the function checks the length of the string and returns "Even" if the length is divisible by 2 and "Odd" otherwise. If the input argument is not a string, the function returns the message "Please enter valid string!".
*/


// :::::::::: SOLUTION 03 ::::::::::

//function
function isLGSeven(num) {
    if (typeof num === 'number') {
        let diff = num - 7;
        if (diff < 7) {
            return diff;
        } else {
            return 2 * num;
        }
    } else {
        return 'Please enter valid number!';
    }
}

//description
/*
The function "isLGSeven" takes in a single input "num" which could be a number.The function first checks the type of "num" and verifies that it is indeed a number.If it is a number, the function calculates the difference between the argument and 7, and depending on the difference value, returns either the difference or double of the difference value. If the input argument is not a number, the function returns the message "Please enter a valid number!".
*/


// :::::::::: SOLUTION 04 ::::::::::

//function
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

//description
/*
The function "findingBadData" takes in input "arr" which could be a array.The function first checks the type of "arr" and verifies that it is indeed a array.If it is a array, it iterates through the elements of the array, counting how many of them are less than zero. Finally, it returns the count of elements less than zero. If arr is not an array, it returns the message 'Please enter valid array!'.
*/


// :::::::::: SOLUTION 05 ::::::::::

//function
function gemsToDiamond(g1, g2, g3) {
    if (typeof g1 === 'number' && typeof g2 === 'number' && typeof g3 === 'number') {
        let total = (g1 * 21) + (g2 * 32) + (g3 * 43);
        if (total > 2000) {
            return total - 2000;
        }
        return total;
    } else {
        return 'Please enter valid number!';
    }
}

//description
/*
The function "gemsToDiamond" takes 3 numerical parameters "g1", "g2", and "g3". The function first checks if all the parameters are valid numbers. If true, it calculates the total of (g1 * 21) + (g2 * 32) + (g3 * 43). If the total is greater than 2000, it returns the difference between total and 2000, otherwise, it returns the total. If any of the parameters are not a valid number, the function returns the message "Please enter a valid number!".
*/