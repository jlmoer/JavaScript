// 04 - Filter Numbers

const array = [1, "toto", 34, "JavaScript", 8];
const numbers = array.filter(function(num) {
    if (Number.isInteger(num)) {
        return num;
    }
});
console.log(numbers);