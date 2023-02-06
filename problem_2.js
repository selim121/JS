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

/*
This function, "evenOdd", takes in a single argument "str" which could be a string. The function first checks the type of "str" and verifies that it is indeed a string. If it is a string, the function checks the length of the string and returns "Even" if the length is divisible by 2 and "Odd" otherwise. If the input argument is not a string, the function returns the message "Please enter valid string!".
*/

console.log(evenOdd('Phero'));
console.log(evenOdd('Batch7'));
console.log(evenOdd('chatgpt'));