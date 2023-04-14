/* Objects */

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
}

document.querySelector("#root").innerHTML = `Az autó típusa: ${car.type} ${car.model}`

const ipse = {
    name: "John",
    age: "42",
    color: "kék"
}

document.querySelector("#john").innerHTML = `${ipse.name} egy ${ipse.age} éves férfi, akinek ${ipse.color} színű a szeme`

/////////////////////////// Event handling /////////////////////////////////
let timeoutId

btnEl = document.querySelector("button")
const click = btnEl.addEventListener("click", () => {
    timeoutId = setTimeout(() => {
        document.querySelector("#root").innerHTML = `<h1>Megnyomtak</h1>`
    }, 1500)
    timeoutId = setTimeout(() => {
        document.querySelector("#root").innerHTML = ``
    }, 5000)
})


