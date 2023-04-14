root = document.querySelector("#root")
demo = document.querySelector("#demo")
btn = document.querySelector(".btn")

const name = "LMD"
root.innerHTML += `<h2>Hi there, ${name}!</h2>`

//////////////////////////// Functions ///////////////////////

let fruits = ['apple', 'banana', 'orange', 'pineapple']
// hozzáadás a végére
fruits.push('lemon')

// Spread operator
let newFruit = "kiwi"
fruits = [...fruits, newFruit]

fruits.map((fruit) => {

  demo.innerHTML += `
    <ul>
      <li style="list-style-type: none; font-size: 1.5rem; text-align: left"}>${fruit}</li>
    </ul>
  `;
})

// let strLi
// for (let fruit of fruits) {
//   strLi += `<li>${fruit}</li>`
// }
// demo.innerHTML = strLi

// legnagyobb számok

let numbers = [1, 52, 6, 8, 88, 100, 26, 9 ]

let maxNum = numbers[0]
for (num of numbers) {
  if (num > maxNum) {
    maxNum = num
  }
}

console.log(maxNum);

let bigNums = [1, 52, 6, 8, 88, 100, 26, 9 ]
let maxItem = Math.max(...bigNums)
console.log(maxItem);


const randomFc = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomArr = []

for (let i = 0; i < 10; ) {
  let randomNum = randomFc(1, 10);
  if (!randomArr.includes(randomNum)) {
    randomArr.push(randomNum);
    i++;
  }
}

console.log(randomArr);


let uniqueArr = []
for (let szam of randomArr) {
  if (uniqueArr.indexOf(szam) == -1)
  uniqueArr.push(szam)
}
console.log(uniqueArr);

let egyediTomb = [...new Set(randomArr)]
egyediTomb.sort()
console.log(egyediTomb);
egyediTomb.sort((a,b) => a - b)
console.log(egyediTomb);
egyediTomb.sort((a,b) => b - a)
console.log(egyediTomb);
egyediTomb.sort((a,b) => Math.random() - 0.5)
console.log(egyediTomb);

let letters = ['a', 'd', 'k', 'e', 'c', 'r', 'n', 'ü', 'é', 'á']
letters.sort()
console.log(letters);
letters.sort((a, b) => a.localeCompare(b))
console.log(letters);

let a = 100
let b = 26
let c = b
b = a
a = c

console.log(a, b);
// destrukturálás
[a, b] = [b, a]
console.log(a, b);

