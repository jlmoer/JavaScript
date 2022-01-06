// 01 - Format

function formatDate(dateStr) {
    const date = new Date(dateStr);
    let month = date.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`
        }
    return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
}

formatDate("2022-01-06");
console.log(formatDate("2022-01-06"));