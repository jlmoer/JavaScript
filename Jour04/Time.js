function format (num){ // Je déclare une fonction ayant num comme paramètre
    let hrs = Math.floor(num / 3600); // Je créé une variable qui va arrondir à l'inférieur le résultat de la division num / 3600 car il y a 3600 secondes dans une heure
    let hrsRest = num - (hrs * 3600); // Je créé une variable qui va soustraire le nombre d'heures miltiplié par 3600 (nombre de secondes dans une heure), qui donne le reste de secondes une fois que j'ai trouvé les heures
    let min = Math.floor(hrsRest / 60); //  Je créé une variable qui va contenir le nombre de minutes calculées par rapport au reste divisé par 60 et arrondi à l'inférieur (1 minute = 60 secondes)
    let sec = hrsRest - (min * 60); // Je créé une variable sec qui contient les secondes où je vais soustraire du reste le nombre de minutes multipliées par 60
    console.log(`${hrs} : ${min} : ${sec}`); // J'affiche les variables dans la console au format demandé dans l'énoncé
};

    format(3700); // J'appelle la fonction ave un paramètre valant 3700 comme demandé dans l'énoncé 

