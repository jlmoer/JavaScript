// 02 - Combine

var cat = { // j'ai créé une variable cat qui contient un objet avec 3 clefs valeur
    name: "Garfield",
    age: "3",
    isCute: true,
}

var cat2 = { // j'ai créé une variable cat qui contient un objet avec 3 clefs valeur
    name: "Jean",
    age: "31",
    isCute: false,
}

var cats = [ // J'ai créé une variable qui contient un tableau avec les 2 premières variables
    cat,
    cat2,
]
    
//console.log(cats); J'ai affiché la valeur de cats dans la console

//console.log(cats[1].isCute); J'ai affiché la valeur de la clef isCute de l'objet cat2 à partir du tableau de cats
//console.log(cats[1]["isCute"]); J'ai effectué la même action d'une autre manière
