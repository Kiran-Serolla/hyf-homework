let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter((num) => num % 2 != 0).map((num) => num * 2);
console.log("The doubled numbers are", newNumbers);
