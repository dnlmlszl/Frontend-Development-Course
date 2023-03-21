const frameworks=['NodeJS','ReactJS','jQuery','Express','Angular','VueJS','Django','Laravel']

const showList = (e) => {
    const buttonId = e.target.id

    const listItem = frameworks.map((framework) => `<li>${framework}</li>`)
    let listHtml = ''
    if (buttonId === 'btn-unordered'){
        listHtml = `<ul id='ul'>${listItem.join('')}</ul>`
    }
    else if (buttonId === 'btn-ordered'){
        listHtml = `<ol id='ol'>${listItem.join('')}</ol>`
    }
    else if (buttonId === 'btn-select'){
        const options = frameworks.map((framework) => `<option>${framework}</option>`)
        listHtml = `<select>${options.join('')}</select>`
    }
    document.querySelector('.show-list').innerHTML = listHtml 
}

const buttons = document.querySelectorAll('button');

// Végigmegyünk az összes gombon, és hozzáadjuk a handleButtonClick függvényt az "onclick" eseményhez
buttons.forEach((button) => {
  button.onclick = showList;
});
