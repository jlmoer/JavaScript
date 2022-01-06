// 01 - Format

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
}

formatDate("2022-01-06");
console.log(formatDate("2022-01-06"));