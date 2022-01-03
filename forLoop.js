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

// 04 - Des Boîtes

//  Le console.log à l'intérieur de la boucle affiche 10 dans la console
//  console.log(box1) affiche 18
//  console.log(box2) affiche également 18 dans la console puisque box1 et box2 sont égaux
//  console.log(i) affiche 13 dans la console

// 05 - Des setiob

// Le console.log(box1) à l'intérieur de la boucle affiche 12 dans la console
// Le console.log(box1) en dehors de la boucle affiche 42 dans la console
// Le console.log(i) affiche 0 dans la console

