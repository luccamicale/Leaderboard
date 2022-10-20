import {aplication} from './variables.js';

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/777/scores/')
    .then((response) => response.json())
    .then((json) => showRefresh(json))
    .catch((err) => console.log(err));
  
  document.querySelector('.refresh-button').addEventListener('click', () => {
    location.reload();
  });

const showRefresh = (val) => {
    for (let i = 0; i < val.result.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = val.result[i].user + val.result[i].score;
      aplication.appendChild(li);
    }
  };
  
