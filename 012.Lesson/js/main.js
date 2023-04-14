root = document.querySelector("#root")
btn = document.querySelector(".btn")

const name = "LMD"
root.innerHTML += `<h2>Hi there, ${name}!</h2>`

//////////////////////////// Ciklusok ///////////////////////
// For ciklus

let text = ""
for (let i = 0; i < 10; i++) {
    text += `A szám: ${i + 1} </br>`;
}

document.getElementById("root").innerHTML = text

// for in
const person = {fname:"John", lname:"Doe", age:25};

let text1 = "";
for (let x in person) {
  text1 += `${person[x]} </br>`;
}

document.getElementById("person").innerHTML = text1

// forEach
const numbers = [45, 4, 9, 16, 25];

let txt = "";

numbers.forEach((value) => {
    txt += `${value} </br>`;
});

document.getElementById("numbers").innerHTML = txt

// for of
let language = "JavaScript";

let txt1 = "";
for (let x of language) {
txt1 += `${x} </br>`;
}

document.getElementById("text").innerHTML = txt1

// Examples
// 1
for (i = 1; i < 501; i++) {
    if (i % 2 === 0) {
        console.log(`Is an even number: ${i}`);
    } else {
        console.log(`Is an odd number: ${i}`);
    }
}

// 2

let modulus = []

for (let i = 500; i < 1000; i++) {
    if (i % 3 === 0) {
        modulus.push(i)
    } 
}
console.log(modulus.length)


// Prím számok
let number = ""
const prímek = (num) => {
    if (num <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

for (let i = 0; i <= 100; i++) {
    if (prímek(i)) {
        number += `${i} </br>`
    }
}

document.getElementById("prime").innerHTML = number

// Func divided by three

const divideIt = (num) => {
    if (num % 3 === 0) {
        alert(`This number ${num} is divisible by 3`)
    } else {
        alert("Please press the red button and rest in peace")
    }
}


document.querySelector(".btn").addEventListener('click', () => {
    const number2 = prompt("Please add your favorite number")
    divideIt(number2)
})