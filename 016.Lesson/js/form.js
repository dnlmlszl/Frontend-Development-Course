// reduce

const numbers = [1, 5, 3, 9, 11, 8, 4, 21, 2]
const length = numbers.length
const sum = numbers.reduce((acc, num) => {
    return acc + num
}, 0)
const average = sum / length
console.log(average.toFixed(2));

////////////////////////////////////////////////////

const emojis = ['🖐', '👦', '👨‍⚕️', '👑', '💼', '🧣']
const listEmo = emojis.reduce((acc, item) => {
    return acc + `<li>${item}</li>`
}, '')
document.querySelector('ul').innerHTML=listEmo;


