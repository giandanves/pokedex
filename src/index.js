import './style/style.scss';
import View from './scripts/views/calculator.js';
import Controller from './scripts/controllers/calculator';

let controller;
let view;

function onClick(btn) {
  view.renderNumbers(controller.updateState(btn));
}

function initApp() {
  controller = new Controller();
  view = new View(onClick);
  view.renderNumbers(controller.getState);
}

initApp();
