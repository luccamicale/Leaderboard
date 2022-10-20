import { input1, input2 } from './variables';

document.getElementById('submit-button').addEventListener('click', () => {
  const data = {
    user: input1.value,
    score: input2.value,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2727/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
});