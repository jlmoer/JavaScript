function calculate(num1, operator, num2) {
    if (operator === "+") {
        return parseInt(num1) + parseInt(num2);
    } else if (operator === "-") {
        return parseInt(num1) - parseInt(num2);
    } else if (operator === "*") {
        return parseInt(num1) * parseInt(num2);
    } else  if (operator === "/") {
        return parseInt(num1) / parseInt(num2);
    } else if (operator === "%") {
        return parseInt(num1) % parseInt(num2);
    }
}

// console.log(calculate(5, "+", 4));
// console.log(calculate(5, "-", 4));
// console.log(calculate(5, "*", 4));
// console.log(calculate(5, "/", 4));
// console.log(calculate(5, "%", 4));

console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
