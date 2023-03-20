const root = document.querySelector("#root");
const demo = document.querySelector("#demo");
const fail = document.querySelector("#fail");
const btn = document.querySelector(".btn");

const name = "LMD";
root.innerHTML += `<h2>Hi there, ${name}!</h2>`;

/////////////////////////////////////////////////////////////////

const emoji = ['🖐', '👦', '👨‍⚕️', '👑', '💼', '🧣']
const emojiTag = document.querySelector('#emoji')
emojiTag.innerHTML = emoji.map((emo) => `<option>${emo}</option>`)