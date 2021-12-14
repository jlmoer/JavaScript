// 01 - Hello World
console.log("Hello World !"); //log est une méthode de l'objet console

// 02 - String
var test = "My name is Jean"; //Let et var sont réassignables, const ne l'est pas car c'est une constante
console.log(test);

// 03 - Concatenation
var name = "Jean";
console.log("Nice to meet you" + name);
console.log(`Nice to meet you ${name}`);
// 04 - String Length
var testLength = "I'm very long !";
console.log(testLength.length);

// 05 - Replace
var food = "croissant is meh";
food = food.replace("meh", "so good"); //Mutation de données, food et so good entre parenthèses sont des paramètres
console.log(food);
console.log(food.replace("meh", "so good"));

// 06 - Up And Down
var basic = "This is Cool";
var basicUp = basic.toUpperCase("This is Cool");
var basicDown = basic.toLowerCase("This is Cool");
console.log(basic.toUpperCase()); //Les parenthèses violettes sont vides sur les 2 lignes car elles n'ont pas besoin de praramètres. Les parenthèses signfient exécuter le contenu de cette méthode ou de cette fonction. Le | signifie "ou".
console.log(basic.toLowerCase());


// 07 - Split
var word = "banana";
var letters = word.split ("");
console.log(letters);

// 08 - Template
var age = 31;
console.log(`I'm ${age} years old`);

// Bonus
var changed = "Bonjour";
changed = changed.replace(/o/g, "a");
console.log(changed);
