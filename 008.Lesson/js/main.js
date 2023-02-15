let name, admin 
name = "Danny Boy"
admin = "Valaki Más"

btnEl = document.querySelector("#btn")
rootEl = document.querySelector("#root")
const styles = `
    font-size: 1.5rem;
    font-weight: bold;
    background: #e5e5e5;
    color: blue;
    width: 180px;
    height: 45px;
    display: grid;
    place-content: center;
    border-radius: 12px;
    border: 2px dashed gray;
    padding: 0.5em 1em;
    margin: 2em 1em
`

btnEl.addEventListener("click", (e) => {
    rootEl.innerHTML = `
        <p>Hello ${name}</p>
    `
    rootEl.style = styles
})

const age1 = 18
const age2 = 25


console.log(age1 > age2 ? "User 1 is older" : "User 2 is older");

let userName = prompt("Mi a neved: ")
alert(`Szervusz ${userName}, jó hogy itt vagy!`)
let age = prompt("Hány éves vagy?")
alert(age >= 18 ? `Beléphetsz, mivel ${age} éves vagy már` : `Nem léphetsz be, mivel csak ${age} éves vagy` )
if (age < 18) {
    setTimeout(() => {
        alert("Na, séta van kisgyerek! Anyád tudja hogy itt vagy?")
    }, 2000)
}

// operátorok +, -, /, *, sum
// incrementálás c++, dekrementálás c--
// else / if kondicionálás
// logikai operátorok
