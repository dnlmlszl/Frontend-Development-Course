let numbers = [1 ,25, 85, 45, 46, 64, 27, 72, 11, 18, 33]

numbers.forEach((numb) => {
    console.log(numb + 1); 
})

numbers.forEach((item, index) => {
    console.log(`index: ${index}, érték: ${item}`);
})

numbers.forEach((item) => {
    document.querySelector('ul').innerHTML += `<li>${item}<li>`
})

let listStr = ''
for (let num of numbers) {
    listStr += `<li>${num}</li>`
}
document.querySelector('.for-of').innerHTML = listStr

let parosSzamok = numbers.filter((number) => number % 2 === 0)

console.log(parosSzamok);

let parosTomb = []
for (let numb of numbers) {
    if (numb % 2 === 0) {
        parosTomb.push(numb)
    }
}
console.log(parosTomb);

let isOneBig = numbers.some((numb) => numb > 50)
console.log(isOneBig);

// map
let doubleNumb = numbers.map((numb) => numb * 2)
console.log(doubleNumb);

let liNumb = numbers.map((numb) => `<li>${numb}</li>`)
console.log(liNumb.join(''));