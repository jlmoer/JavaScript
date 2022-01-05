function multiply(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(num * i);
    }
}

function addition(int) {
    for (let i = 0; i <= 10; i++) {
        console.log(int + i);
    }
}

module.exports = {
    multiply,
    addition,
}; 