const parImpa = (num) => {
    return num.filter(num => num % 2 === 0);
}
console.log(parImpa([3, 5, 2, 7, 8]))