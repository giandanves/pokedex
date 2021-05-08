import './style/style.scss';
import View from './scripts/views/calculator.js';
import Controller from './scripts/controllers/calculator.js';

let controller;
let view;

function onClick(btn) {
  view.renderCalculum(
    controller.updateState(btn),
    controller.getStateLog,
  );
}

function initApp() {
  controller = new Controller();
  view = new View(onClick);
  view.renderCalculum(controller.getState, controller.getStateLog);
}

initApp();
