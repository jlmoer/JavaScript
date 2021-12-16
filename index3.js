// Objects

const user = { // les accolaes permettent de créer un objet
    firstname: "Jean", // mettre une virgule après la valeur
    lastname: "Moerdijk",
};

console.log(user);
console.log(user.firstname); // on accède à la valeur avec le nom de la clef
console.log(user.lastname);
console.log(user["firstname"]); // appelle la valeur d'une clef contenue dans une variable

// Functions

// Servent à grouper du code qui sera facilement réutilisable, le but étant d'optimiser le code

function sayHello() {
    console.log("Hello");
} // le nom de la fonction décrit ce qu'elle va faire, les paramètres viennent entre parenthèses, le code de la fonction vient entre les acolades
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

// Si on créé une varible à l'intérieur d'une fonction, elle n'existe que dans la fonction

function add (a, b) { // param1 = premier add, param2 = deuxième add
    console.log(a + b); // la fonction prend les paramètres et les additionne
}



add(5, 8); // La fonction devient dynamique avec les paramètres, n'affiche jamais la même chose
add(1, 2);
// les paramètres sont toujours récupérés dans l'ordre
// Si on modifie un tableau ou un objet dans une fonction on aura ce résultat en sortie de fonction.
// N'importe quelle variable déclarée avant la fonction peut être utilisée dans la fonction. La fonction peut aller chercher les variables qui sont déclarées avant.
// On n'utilise que les paramètres d'une fonction dans une fonction. On oeut utiliser une fonction dans une fonction, les fonctions peuvent s'appeler entre elles.

// Add two numbers and return the result
function addNumbers (a, b) {
    const res = a +b;
    return res; // on renvoie res, plus exactement la valeur de res
}

let addedNumbers = addNumbers(3, 4); // permet de récupérer le résultat et de le sauvegarder dans une variable
console.log("addedNumbers:", addedNumbers);

