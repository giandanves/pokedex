import './style/style.scss';
import View from './scripts/views/calculator.js';
import Controller from './scripts/controllers/calculator.js';
import Storage from './scripts/storage/storage.js';

let controller;
let view;
let storage = new Storage();

function onClick(btn) {
  view.renderCalculum(
    controller.updateState(btn),
    controller._stateLog,
  );

  if (controller.storedOperation) {
    storage.save(controller.storedOperation);
    console.dir(storage);
  }
}

function initApp() {
  controller = new Controller();
  view = new View(onClick);
  view.renderCalculum(controller._state, controller._stateLog);
}

initApp();
