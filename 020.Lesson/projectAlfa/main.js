const words=['alma','programozás','narancs','keretrendszer','tanfolyam','hétvége','tél','iskola']
const abc=['A','Á','B','C','D','E','É','F','G','H','I','Í','J','K','L','M','N','O','Ó','Ö','Ő','P','Q','R','S','T','U','Ú','Ü','Ű','V','W','X','Y','Z']

document.querySelector('.letters-holder').innerHTML = abc.map((char) => {
    return (
        `<span>${char}</span>`

    )
}).join('') 

const randomWord = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

let secretWord = randomWord(words)
console.log(secretWord);