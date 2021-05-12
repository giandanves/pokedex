import uniqid from 'uniqid';
import './style/style.scss';
import View from './scripts/views/calculator.js';
import Controller from './scripts/controllers/calculator.js';
import LocalStorage from './scripts/storage/localstorage.js';

let controller = new Controller();
let view;
let storage = new LocalStorage();

controller.addEventListener('operationFinished', (e) => {
  storage.save({
    id: uniqid(),
    operation: e.detail,
    date: new Date(),
  });
  storage.history.then((r) => {
    console.log(r);
  });
});

function onClick(btn) {
  view.renderCalculum(
    controller.updateState(btn),
    controller._stateLog,
  );
}

function initApp() {
  view = new View(onClick);
  view.renderCalculum(controller._state, controller._stateLog);
}

initApp();
