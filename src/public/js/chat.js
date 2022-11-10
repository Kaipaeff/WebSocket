const ws = new WebSocket(window.location.href.replace(/^http/, 'ws'));
const divChat = document.querySelector('#divChat');
const users = document.querySelector('#users');


const { chatForm } = document.forms;

// ws.onopen = () => {
//   chatForm.chatBtn.disabled = false;
//   ws.send('Hello from fronend ');
// }

// ws.onmessage = (event) => {
//   console.log(event.data);
// }


ws.onopen = () => {
  chatForm.chatBtn.disabled = false;
}

const color = `#${(`${Math.random().toString(16)}000000`).substring(2, 8).toUpperCase()}`;

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = event.target.chatInput;
  const myMessage = JSON.stringify({value, color});
  ws.send(myMessage);
})

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const str = document.createElement('h3');
  str.innerText = data.value;
  str.style.color = data.color;
  divChat.appendChild(str);
  users.innerText = `Количество пользователей в чате: ${data.clientsSize}`
}
