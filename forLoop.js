// 01 - Somme des carrés

let result = 0;
for (let i = 5; i <= 10; i++) {
    result += i * i;
}
console.log(result);

// 02 - Comptons

let multiples = 0;
for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        multiples++;
    }
}
console.log(multiples);

// 03 - Chanceux

let sum = 0;
for (let i = 1; i <= 20; i++) {
    let lance = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if (lance >= 5) {
        sum += lance;
    }
}
console.log(sum);