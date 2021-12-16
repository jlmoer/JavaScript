// 05 - Add Up

function addUp(num) { // Je déclare une fonction qui prend num comme paramètre
    let total = 0; // Je déclare la varible totale aved une valeur de 0
    for (let i = 1; i <= num; i++) { // Je créé une boucle for qui commence à 1 tant que i est inférieur ou égal à num et qui ajoute 1 à chaque tour de boucle
        total += i; // J'établis que total est égal à total + i
    }
    console.log(total); // J'affiche la valeur de total dans la console à la fin de ma boucle 
}

addUp(12); // J'appelle la fonction avec un paramètre ayant la valeur de 12 afin d'obtenir 78 dans la console