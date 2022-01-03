function format (num) {
    let hours = Math.floor(num / 3600);
    let minutes = Math.floor((num % 3600) / 60);
    let seconds = Math.floor (num % 60);

console.log((hours + ":" + minutes + ":" + seconds));
console.log(`${hours}:${minutes}:${seconds}`);
}