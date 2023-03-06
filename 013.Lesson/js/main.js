root = document.querySelector("#root")
whileEl = document.querySelector("#whileEl")
btn = document.querySelector(".btn")

const name = "LMD"
root.innerHTML += `<h2>Hi there, ${name}!</h2>`

//////////////////////////// Ciklusok ///////////////////////
// While ciklus

// let i = 10
// while (i > 0) {
//     console.log(`${i}`);
//     i--
// }

// let birthDay

// while (true) {
//     birthDay = +prompt("Áruld el a születési éved: ")
//     if (birthDay && (birthDay >= 1950) && (birthDay < 2015)) break
// }
// const date = new Date()
// alert(`Te most ${date.getFullYear() - birthDay} éves vagy`);



// For ciklus
// let num = +prompt("Guess a number")
// for (let i = 1; i < 10; i++) {
//     num += i
// }
// console.log(num);


// Switch - case elágazás
// Egyezőséget vizsgál, csak sztring vagy szám esetén fut

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

//////////////////////////// Függvények ///////////////////////
const szoroz = (a, b, c = 3) => {
    return a * b * c
}

console.log(szoroz(1, 2, 4));
console.log(szoroz(1, 2)); // NaN, ha a, b vagy c nincs deklarálva default értéken

const bigNum = (a, b) => {
    if (a > b) {
        return a
    } else return b
}

console.log(bigNum(2, 4));

// Callback function

const greeting = (name) => {
    alert(`Hello ${name}`)
}

const processUserInput = (greeting) => {
    const name = prompt("Please add your name: ")
    greeting(name);
}

processUserInput(greeting)