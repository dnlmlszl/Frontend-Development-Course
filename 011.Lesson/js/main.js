root = document.querySelector("#root")
btn = document.querySelector(".btn")

const languages = ["HTML", "CSS", "JS"]

btn.addEventListener("click", () => {
    languages.map((language) => {
        root.innerHTML += `
            <li>${language}</li>
            `
            console.log(language);
        })
})

const x = languages[0]
console.log(x);

const tömbNév = new Array("Elem1", "Elem2", "Elem3")

// push
tömbNév.push("újElem")
console.log(tömbNév);
console.log(tömbNév.length);
console.log(languages[2]);

const fruits = ["Banana", "Orange", "Apple", "Mango"]
document.getElementById("root").innerHTML = fruits.toString()

const numbers = [1, 2, 3, 4]
document.getElementById("container").innerHTML = numbers.toString()

const y = numbers[1] * numbers[2]
document.getElementById("demo").innerHTML = y.toString()

// pop - a helye / indexe megmarad
tömbNév.pop()
console.log(tömbNév);

const arr = [[1, 2, 4], [6, 5, 23]]
console.log(arr);
console.log(arr[1].length);
console.log(arr[0][2]);

////////////////////////////////// Függvények ///////////////////////////////////////////////

const addition = (a, b) => {
    return a + b
}
console.log(addition(2, 3))

const extraction = (a, b) => {
    return a - b
}

console.log(extraction(3, 2));

const multiply = (a, b) => {
    return a * b
}

console.log(multiply(3, 2));

const divide = (a, b) => {
    return a / b
}

console.log(divide(6, 2));

document.getElementById("functions").innerHTML = `
    <h3 style="padding: 1.5rem 0">Összeadás: ${addition(2, 3)}</h3>
    <hr style="width: 130px"> 
    <h3 style="padding: 1.5rem 0">Kivonás: ${extraction(5, 4)}</h3> 
    <hr style="width: 130px"> 
    <h3 style="padding: 1.5rem 0">Szorzat: ${multiply(3,5)}</h3> 
    <hr style="width: 130px"> 
    <h3 style="padding: 1.5rem 0">Osztás: ${divide(10, 4)}</h3>
`