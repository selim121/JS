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

/*
The function "gemsToDiamond" takes 3 numerical parameters "g1", "g2", and "g3". The function first checks if all the parameters are valid numbers. If true, it calculates the total of (g1 * 21) + (g2 * 32) + (g3 * 43). If the total is greater than 2000, it returns the difference between total and 2000, otherwise, it returns the total. If any of the parameters are not a valid number, the function returns "Please enter valid number!".
*/

console.log(gemsToDiamond(1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));