function multiply(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(num * i);
    }
}
multiply(process.argv[2]);