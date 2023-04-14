const messageBox = document.querySelector('#root')
let message
let myPoint = 110

if (myPoint >= 100) {
    message = "Gratulálok, jó eredmény!"
} else if (myPoint >= 50) {
    message = "Közel volt, probálkozz"
} else {
    message = "Nem elég ennyi"
}

messageBox.style = "color: blue; background-color: lightblue; width: 250px; text-align: center; padding: 0.45rem 0"

messageBox.innerHTML = `<h4>${message}</h4>`

/////////////////////////////////////////////////////////////
/* 
létszám: 22 fő
10 fiú
12 lány
5 fiú focizik
3 fiú röpizik
10 lány szurkoló
2 lány matek szakos

Feladat: 
DOM-ban kiírni p-tag közé hány lány ment el a focimeccsre, ha a szurkoló lányok fele van jelen, és a matek szakosok közül is 1 elment
*/

const girls = {
    "cheerGirls": 10,
    "mathGirls": 2
}

let boysScore = 10
let newMessage
let girlsSay
let shotOrGot = true

if (boysScore === 10) {
    newMessage = "Gratulálok"
} else if (boysScore === 5) {
    newMessage = "Húúúúúúúú"
}
if (shotOrGot) {
    girlsSay = "Úúúúúúúúúúúúúúúúúúúúú"
} else {
    girlsSay = "Ááááááááááááááááá"
}

messageBox.innerHTML = `
    <p>Jelen lévő lányok: ${girls.cheerGirls / 2} cheerleaders és ${girls.mathGirls / 2} math girl</p>
    <p>${newMessage}</p>
    <p>${girlsSay}</p>
`