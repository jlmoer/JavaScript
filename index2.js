// Boucles et tableaux (loops and arrays)

const ingredients = ["milk", "sugar", "eggs"]; // milk a la position 0, sugar la position 1 et  eggs la position 2

console.log(ingredients.length);
console.log(ingredients[1]); // Renverra l'élément à la position 1 (sugar)
console.log(ingredients[ingredients.length - 1]);


ingredients.push("flower"); // Ajoute un élément dans le tableau
console.log(ingredients);

// Boucles (loops)

// Boucle while

const limit = 100;
let position = 0;
while (position < limit) {
    console.log("You are not done", position)
    position = position + 1;
}

// Boucle for, s'éxecute un noombre x de fois que l'on choisira

for (let i = 0; i <= limit; i++) {
    console.log("Boucle for:", i);
}

for (let j = 0; j < ingredients.length; j++) {
    console.log(ingredients[j]);
}
