const frameworks=['NodeJS','ReactJS','jQuery','Express','Angular','VueJS','Django','Laravel']

const show = (objDOM) => {
    document.querySelector('.list').innerHTML = ''
    console.log(objDOM.id);
    let id = objDOM.id
    let newObj = document.createElement(id)
    if (id === 'select') {
        newObj.innerHTML = frameworks.map((item) => `<option>${item}</option>`).join('')
    } else {
        newObj.innerHTML = frameworks.map((item) => `<li>${item}</li>`).join('')
    }
    document.querySelector('.list').appendChild(newObj)
}