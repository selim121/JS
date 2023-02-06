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

console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));