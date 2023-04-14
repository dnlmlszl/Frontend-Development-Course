root = document.querySelector("#root");
demo = document.querySelector("#demo");
btn = document.querySelector(".btn");

const name = "LMD";
root.innerHTML += `<h2>Hi there, ${name}!</h2>`;

//////////////////////////// Arrays ///////////////////////
const startNumb = +prompt("Az intervallum kezdete:");
const endNumb = +prompt("Az intervallum vége:");
const numbers = Array.from(
    { length: endNumb - startNumb + 1 },
    (value, index) => startNumb + index
);
// console.log(numbers);

// let numbers2 = []
// for (let i = startNumb; i <= endNumb; i++) {
//   numbers2.push(i)
// }
// console.log(numbers2);



// hány darab prímszám
const isPrime = (numb) => {
    if (numb < 2) return false;

    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i === 0) {
            return false;
        }
    }

    return true;
};

// console.log(13, isPrime(13));
// console.log((33, isPrime(33)));

let primCount2 = 0;
let primArr = []
for (let nr of numbers) {
  if (isPrime(nr)) {
    primCount2++
    primArr.push(nr) 
  }
}
console.log(primArr);

let primCount = 0
for (let nr of numbers) {
    primCount = isPrime(nr) ? ++primCount : primCount;
}

console.log(`${primCount} darab prímszám van`);


