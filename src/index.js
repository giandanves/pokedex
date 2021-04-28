import './style.scss';
import buttons from './buttons.js';

const buttonsContainer = document.querySelector('#buttons-container');

function addButton(buttons) {
  buttons.forEach((button) => {
    const btn = document.createElement('div');
    if (button.title == '=') {
      btn.className = 'equal-button';
    } else {
      btn.className = 'button';
    }

    const title = document.createElement('p');
    title.className = 'text-button';
    const t = document.createTextNode(`${button.title}`);
    title.appendChild(t);
    btn.appendChild(title);
    buttonsContainer.appendChild(btn);
  });
}
addButton(buttons);
