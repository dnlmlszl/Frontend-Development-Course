let evenNum = []
let oddNum = []
let számok = [evenNum, oddNum ]

for (let i = 0; i < 50; i++) {
    if ((i + 1) % 2 ===0) {
        evenNum.push(i + 1)
    } else {
        oddNum.push(i + 1)
    }
}

console.log(számok);

const gyümölcsök = ["Alma", "Banán", "Szőlő", "Narancs", "Barack", "Kiwi", "Anananász", "Körte"]
const zöldségek = ["Répa", "Retek", "Hagyma", "Uborka", "Krumpli"]

const root = document.getElementById("root")
const zd = document.getElementById("zöldség")
const gym = document.getElementById("gyümölcs")
const szm = document.getElementById("szm")
 
// gyümöocsök összege
let sumGym = ""

gyümölcsök.forEach(item => {
    sumGym += item
})
console.log(sumGym);

// zöldségek összege
let sumZd = ""

zöldségek.forEach(item => {
    sumZd += item
})
console.log(sumZd);

// számok összege
let sumSzm = 0

oddNum.forEach(item => {
    sumSzm += item
})
evenNum.forEach(item => {
    sumSzm += item
})
console.log(sumSzm);


// tömbök hossza
root.innerHTML = `
    <p>${gyümölcsök.length} + ${zöldségek.length} + ${számok.length}</p>

`

// gyümölcsök tartalma
{gyümölcsök.map((gyümölcs) => {
    gym.innerHTML += `
        <li>${gyümölcs}</li>
    `
})}
gym.innerHTML += `<p>${sumGym}</p>`

// random elem + szám
gym.innerHTML += `<p>${gyümölcsök[2] + 3}</p>`


// zöldségek tartalma
{zöldségek.map((zöldség) => {
    zd.innerHTML += `
        <li>${zöldség}</li>

    `
})}
zd.innerHTML += `<p>${sumZd}</p>`

// zöldségek random elem + szám
zd.innerHTML += `<p>${zöldségek[4] + 5}</p>`


// számk tartalma
{számok.map((szám) => {
    szm.innerHTML += `
        <li>${szám}</li>
    `
})}

// számok összege
szm.innerHTML += `<p>${sumSzm}</p>`

// n[3] n[5]
szm.innerHTML += `<p>${számok[0][3] + számok[1][5]}</p>`