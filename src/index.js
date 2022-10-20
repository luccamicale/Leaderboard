import './style.css';
import { input1, input2 } from './modules/variables.js';
import './modules/output.js';

document.querySelector('#submit-button').addEventListener('click', () => {
  const data = {
    user: input1.value,
    score: input2.value,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/777/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
