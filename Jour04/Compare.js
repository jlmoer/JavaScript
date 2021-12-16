// 04 - Compare

function compare(num1, num2) { // J'ai déclaré une fonction qui contient les paramètres num1 et num2
    if (num1 > num2) { // J'ai une condition qui vérifie que num1 est supérieur à num2
        console.log("num1 is bigger"); // Si c'est le cas la console affiche num1 is bigger
    } else if (num2 > num1) {
        console.log("num2 is bigger"); // Si ce n'est pas le cas la deuxième condition est vérifiée et affichera num2 is bigger
    } else {
        console.log("both are the same"); // Si ce n'est toujours pas le cas la console affichera both are the same 
    }
}

compare(4, 3); // J'appelle la fonction avec les paramètres qui donnent des valeurs différentes 
compare(3); // J'appelle la fonction avec des arguments à valeur égale
