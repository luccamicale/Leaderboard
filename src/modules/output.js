import { aplication } from "./variables";

const showRefresh = (e) => {
  for (let i = 0; i < e.result.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `${e.result[i].user} ${e.result[i].score}`;
    aplication.appendChild(li);
  }
};

const remov = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/22277/scores/')
  .then((response) => response.json())
  .then((json) => showRefresh(json))
  .catch((err) => console.log(err));
}
remov();

document.getElementById('refresh-button').addEventListener('click', () => {
  while(aplication.hasChildNodes()) {
    aplication.removeChild(aplication.firstChild)
  }
  remov();
});
