const root = document.querySelector("#root");
const demo = document.querySelector("#demo");
const fail = document.querySelector("#fail");
const btn = document.querySelector(".btn");

const name = "LMD";
root.innerHTML += `<h2>Hi there, ${name}!</h2>`;

//////////////////////////// Arrays ///////////////////////

let email = prompt('Kérlek add meg az email címedet: ')
const errors = []
const verifyEmail = (email) => {
    if (!email.includes('@')) {
        errors.push(`Nem tartalmaz '@' karaktert`)
    }
    if (!email.includes('.')) {
        errors.push(`Nem tartalmaz '.' karaktert`)
    }
    if (!email.length < 6) {
        errors.push(`Túl rövid email cím`)
    }

}

verifyEmail(email)

if (errors) {
    errors.map((error) => {
        fail.innerHTML += `<li>${error}</li>`
    })
} else {
    fail.innerHTML = `Köszönjük hogy feliratkoztál a hírlevelünkre. Email címed: ${email}`
}


