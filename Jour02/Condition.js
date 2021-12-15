// 06 - Condition

let limit = 50;
let score = 64;
if (score >= limit){
    console.log("Ok good!"); 
} else {
    console.log("Oh nooo..."); 
}

let limite = 50
let scor = 40
if (scor >= limite){
    console.log("Ok good!");
} else {
    console.log("Oh nooo...");
}

// 07 - Condition II

let password = "azerty";
if (password.length > 5){
    console.log("The password is secure");
} else {
    console.log("You may get pawned");
}

// 08 - Condition III

if (score >= limit && password.length > 5){
    console.log("Everything is good");
} else if (score >= limit || password.length > 5){
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// * Bonus

let random = Math.floor(Math.random() * ( 6 - 1 + 1)+ 1) ;
if (random === 6){
    console.log("Yes I win!");
} else {
    console.log("So close...");
}
    

// ** Bonus II

let month = "January";
switch (month) {
    case "January":
        console.log("Winter");
        break;
    case "April":
        console.log("Spring");
        break;
    case "July":
        console.log("Summer");
        break;
    case "October":
        console.log("Fall");
}

// *** Bonus III

let roundedNumber = 3.6
if (roundedNumber - Math.floor(roundedNumber) >= 0.5){
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}

