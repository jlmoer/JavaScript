// 01 - File System

const fs = require("fs");

fs.readFile("Jour07.txt", function (err, data) {
    if (err) {
    return;
    }
    


console.log("Lecture en différé : " + data.toString());
});