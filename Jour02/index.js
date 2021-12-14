// Partie 1
// déclarer une variable
//On peut aussi utiliser let et const
var hello = 'Bonjour';
// Il existe dfifférents types de données
// Texte, nombres, booléens, tableaux, etc
var age = 52;
var adulte = true; // true ou false
var isAdult = true; // Camel case, une façon de nommer ses variables
var isConnected = false;
var liste = ['bonjour', 'hello', '87', 'false']; // Tableau ou liste, tableau se dit array en anglais, strings signifie chaîne de caractères
const obj = {
    name: 'Jessica',
    age: 21
};


console.log(hello.toUpperCase());
console.log(hello);

// Modifier la variable, changer son contenu
hello = 'Bonjour';


console.log(hello);
console.log(age);
console.log(obj.name, obj.age); // Pour afficher plusisuers objets il faut mettre une virgule et retaper objet.nom de la valeur
// Concaténation
const greeting = 'Bonjour' + obj.name
console.log('bonjour' + obj.name);

var address; 
console.log('Adresse:', address);
address = '1 rue machin...';
console.log('Adresse:', address);

// Pour vider une variable
address = null;
console.log('Adresse:', address)

// Partie 2
console.log(`Bonjour ${obj.name} tu as : ${obj.age} ans`);
console.log('Bonjour se dit "Hello" en anglais');

// Méthodes des strings
console.log(hello.length);
let test ="coding is hard";
test = test.replace("hard", "fun"); // Fun remplace hard à l'affichage
//console.log(test);
//console.log(test.replace("hard", "fun") );
console.log(test);

console.log("Lettre en position 2:", );

//${} avec une variable ne marche quand dans les ``

//Numbers
//parseInt est utilisé pour transformer un string en nombre et toString pour transformer un nombre en string.
//Utiliser Math.min pour déterminer le nombre le plus petit.
Math.min(); 
Math.max();
const n = 3.14;
console.log(Math.round(n)) //Arrondi la valeur de n
const n = Math.random(); // Génère un nombre aléatoire. En combinant ça avec Math.round on peut génèrer un nombre aléatoire entre un minimum et un maximum établis.
const n = Math.floor(Math.random() * 100) + 1; //Génère un nombre aléatoire entre 0 ou 1 et 100.

//Conditions
const isAdult = false;

console.log("You are an adult");
console.log("You are a child");

if (isAdult === true){
    console.log("You are an adult"); //Pour vérifier si is Adult est  égal à true
} else {
    console.log("You are a child"); //Si ce n'est pas égal à "You are an adult" le programme vérifie si c'est égal à "You are a child"
}

console.log("END OF THE PROGRAM");

// Switch

switch (firstname) {
    case "Caroline":
        console.log("It's Caroline");
        break;
    case "Adrien":
        console.log("Hello Adrien");
        break;
}

//Opérateurs, toujours mettre ===. Cela évite les bughs quand on fait une comparaison.
//Et se dit && ou se dit ||
