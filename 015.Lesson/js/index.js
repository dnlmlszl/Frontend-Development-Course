demo = document.querySelector("#demo");
parag = document.querySelector("p");

// console.log(parag);

let str = parag.innerText;
// console.log(str);

const counter = (myString, searchCar) => {
    let count = 0;
    let pos = 0;
    while (true) {
        pos = myString.indexOf(searchCar, pos);
        if (pos === -1) break;
        pos++;
        count++;
    }
    return count;
};
// console.log(counter(str, 'a'))

let nr = counter(str, "a") + counter(str, "en") + counter(str, "iu");

// console.log(nr);

// slice(), substring(), replace()

// szöveg levágása

const truncate = (myString, maxLength) => {
    return myString.length > maxLength
        ? myString.slice(0, maxLength) + "..."
        : myString;
};

// console.log((truncate(str, 100)));

// első szóköz

let space = str.indexOf(" ", 30); // 38

let info = document.querySelector(".info").innerHTML;

info = truncate(str, space);

// console.log(info);

const showDetails = () => {
    console.log("klikk");
    document.querySelector(".detail-info").innerHTML = str;
};

const randomString = () => Math.random().toString(32).slice(2);

console.log(randomString());
