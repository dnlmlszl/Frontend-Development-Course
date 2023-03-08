root = document.querySelector("#root")
whileEl = document.querySelector("#whileEl")
btn = document.querySelector(".btn")

const name = "LMD"
root.innerHTML += `<h2>Hi there, ${name}!</h2>`

//////////////////////////// Functions ///////////////////////

// const randomFc = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) * min)
// }

let randomNum = randomFc(1,10)
console.log(randomNum);

for (let i = 1; i <= 3; i++) {
  let guess = +prompt('Guess a number: ')
  if (guess === randomNum) {
    alert('Congratulation!');
    break
  } else if (i === 3) {
    alert(`The correct number was: ${randomNum}`)
  }
  else {
    console.log('Nice try');
  }

}

// Önkioldó függvény

// (function összead(a, b) {
//   console.log(a, b);
// }) összead(4,3)

// const addition = (a, b) => {
//   return a + b
// }

//////////////////////////// Tömbök ///////////////////////
const fruits = ['apple', 'banana', 'orange', 'pineapple']
// hozzáadás a végére
fruits.push('lemon')

console.log(fruits[4]);
// tömb hossza
console.log(fruits.length);
// tömb utolsó eleme
console.log(fruits[fruits.length - 1]);
// tömb .at
console.log(fruits.at(-1));
console.log(fruits.at());

fruits.map((fruit) => {
  console.log(fruit);
})

// for ciklus tömbökön
// for
for (let i = 0; i < fruits.length; i++)  {
  console.log(`${i} - ${fruits[i]}`);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// for in
for (let i in fruits) {
  console.log(`${i} - ${fruits[i]}`);
}

const newArray = fruits
fruits.push('kakadu')
console.log(newArray);