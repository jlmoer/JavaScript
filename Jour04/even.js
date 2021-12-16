// 03 - Even

function checkIfEven(num) { // J'ai déclaré une fonction checkIfEven qui prend num comme paramètre
    if (num %2 === 0) { // J'ai testé si num est un chiffre pair 
        console.log("even"); // Si c'est le cas la console affiche even
    }
    else {
        console.log("odd"); // Si ce n'est pas le cas la console affiche odd
    } 
}

checkIfEven(2); // J'appelle la fonction avec un argument pair
checkIfEven(1); // J'appelle la fonction avec un argument impair 