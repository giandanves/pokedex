import './style/style.scss';
import View from './scripts/views/calculator.js';
import Controller from './scripts/controllers/calculator.js';

let controller;
let view;

function onClick(btn) {
  view.renderCalculum(
    controller.updateState(btn),
    controller._stateLog,
  );
}

function initApp() {
  controller = new Controller();
  view = new View(onClick);
  view.renderCalculum(controller._state, controller._stateLog);
}

initApp();
