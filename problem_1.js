function mindGame(num) {
    if (typeof num === 'number') {
        return ((((num * 3) + 10) / 2) - 5);
    } else {
        return 'Please enter valid number!';
    }
}

/*
The function "mindGame" takes in a single input "num" which could be a number.The function first checks the type of "num" and verifies that it is indeed a number.If it is a number, the operations are: first multiply num by 3, then add 10 to the result, divide the sum by 2, subtract 5 from the result and finally return.If the input argument is not a number, the function returns the message "Please enter a valid number!".
*/

console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));