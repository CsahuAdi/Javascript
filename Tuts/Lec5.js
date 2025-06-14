// function numVowels(s) {
//     let count = 0;
//     s = s.toLowerCase();
//     s.split('').forEach((char) =>{
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     });
//     return count;
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((num) =>{
//     console.log(num*num);
// })

// let newArr = arr.filter((num) => {
//     return num % 2 !== 0;
// })
// console.log(newArr);

// let avg = arr.reduce(
//     (acc, currVal) => (acc + currVal)
// )/arr.length;
// console.log(avg);

// marks = [100, 20, 40, 90, 91];
// let newArr = marks.filter((score) => {
//     if(score > 90) return score;
//     }
// )
// console.log(newArr)

let n = parseInt(prompt("Enter a number: "));
let arr = Array.from({length : n}, (_, i) => i+1);

let sum = arr.reduce((acc, val) => acc+val, 0);
let prod = arr.reduce((acc, val) => acc*val, 1);

console.log(sum, prod);