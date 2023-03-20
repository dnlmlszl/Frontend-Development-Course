const temperatures = [20, 18, 21, 22, 23, 24, 20, 22, 23, 24, 20, 22, 25, 26, 22, 21, 23, 19, 25, 23, 23, 22, 22, 25, 26, 27, 26, 25 ,23, 28 ,27]

// a nap és hozzá tartozó érték
const dailyTemp = temperatures.forEach((day, index) => {
    return console.log(`Nap: ${index + 1}; Hőmérséklet: ${day} °C`);
})

let temp = ''
for (let tmp in temperatures) {
    temp+=`
        <tr>
            <td>${Number(tmp)+1}</td>
            <td>${temperatures[tmp]}</td>
        </tr>
    `
    document.querySelector('#temp1').innerHTML=temp
}

const tbody = document.querySelector('#temp2')
tbody.innerHTML = temperatures.map((tempx, index) => {
    return `
        <tr>
            <td>${Number(index+1)}</td>
            <td>${temperatures[index]}</td>
        </tr>
    `
}).join('')


const tbody3 = document.querySelector('#temp3')
tbody3.innerHTML = temperatures.reduce((acc, tempy, index) => {
    return acc + `
    <tr>
        <td>${Number(index+1)}</td>
        <td>${tempy}</td>
    </tr>
`
}, '')

const average = temperatures.reduce((acc, avg) => {
    return acc + avg
}, 0) / temperatures.length

let spanArr = document.querySelectorAll('span')
for (let obj of spanArr) {
    obj.innerHTML = `${average.toFixed(2)} °C`;

}

// Napok, amikor a hőm több volt 26 foknál
const maxTemp = Math.max(...temperatures)
const checkTemp = (temp) => {
    if (maxTemp > 26) {
        return true
    }
}
console.log(checkTemp(maxTemp));
document.querySelector('#a').innerHTML += `${checkTemp(maxTemp)}`

// hány ilyen nap volt
const newArray = []
for (temp of temperatures) {
    if (temp > 26) {
        newArray.push(temp)
    }
}
console.log(newArray.length);
document.querySelector('#b').innerHTML += `${newArray.length} alkalommal`

// legkisebb érték
let result = temperatures.reduce((acc, num) => num > 26 ? acc + 1 : acc, 0)

console.log(result);
document.querySelector('#b').innerHTML += ` / ${result} alkalommal`

// legkisebb érték
const minTemp = Math.min(...temperatures)
document.querySelector('#c').innerHTML += `${minTemp} °C`

// hányadik nap volt a leghidegebb
document.querySelector('#d').innerHTML += temperatures.findIndex((érték) => érték === minTemp) + 1