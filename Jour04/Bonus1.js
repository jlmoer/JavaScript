// Bonus 1
// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"

function generatePassword (num) { // Je déclare une fonction avec le paramètre num
    if (num < 6 || num > 15){
        return error;
    }
    let alphabet = "ABCDEFGHILMNOPQRSTUVWXYZ"; // Je créé une variable contenant les lettres de l'alohabet en majuscules
    let password = ""; // Je créé une variable pour stocker le mot de passe
    for (let i = 1; i <= num; i++){ // Je créé une boucle for qui va générer le mot de passe
            let index = Math.floor(Math.random() * (alphabet.length - 1 - 0)) + 0;
            password += alphabet[index];            
    }
    return password;
}
console.log(generatePassword(15));