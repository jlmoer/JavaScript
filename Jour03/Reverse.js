// 06 - reverse

const sentence = "Hello Konexio!";
let reverseSentence = "";
for (let i = sentence.length - 1; i >= 0; i--) {
    reverseSentence = reverseSentence + sentence [i];
}
console.log(reverseSentence);