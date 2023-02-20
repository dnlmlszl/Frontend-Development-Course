let x = 2;
let y = 3;
console.log(x + y);

let z = "Ez az első";
let b = "_JS_";
let c = "string txt";
console.log(`${z} ${b} ${c}`);

let d = "Szöveg és az int értéke:";
let g = 98;
console.log(`${d} ${g}`);

var első = 2;
var masodik = 2;
var harmadik = 1;
console.log(első + masodik + harmadik);

/////////////////////// Kovácsék esete a kutyákkal ////////////////////////


const lastName = "Kovács";
const firstNameA = "Anna";
const firstNameB = "Panna";
const firstNameC = "Hanna";

const dogs = {
    "Anna": "Dolly",
    "Panna": "Molly",
    "Hanna": "Fred"
} 

const cicák = ["Samu", "Alfréd"];

const first = `${lastName} ${firstNameA} kutyája ${dogs[firstNameA]}`;
const second = `${lastName} ${firstNameB} kutyája ${dogs[firstNameB]}`;
const third = `${lastName} ${firstNameC} kutyája ${dogs[firstNameC]}`;

console.log(first);
console.log(second);
console.log(third);
console.log("Kovács család állat állománya: ", cicák.length + Object.keys(dogs).length);

/////////////////////// Macskák Karmincs Dala ////////////////////////

let cica = 15;

if (cica == "15") {
    console.log("Lehet, hogy egyenlő");
} else if (cica === 15) {
    console.log("Biztos, hogy egyenlő");
} else {
    console.log("Szerintem nem egyenlő");
}

/////////////////////// Fizz Buzz A ////////////////////////

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("Fizz-Buzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
/////////////////////// Fizz Buzz B => ternary operator ////////////////////////

for (let i = 1; i < 101; i++) {
    (i % 3 === 0) ? ((i % 5 === 0) ? console.log("FizzBuzz") : console.log("Buzz")) : ((i % 5 === 0) ? console.log("Fizz") : console.log(i))
}

