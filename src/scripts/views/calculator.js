import buttons from './buttons';

class View {
  constructor(onClick) {
    this.buttons = [];
    for (var prop in buttons) {
      const buttonID = document.querySelector(`#${prop}`);
      buttonID.addEventListener('click', this.onButtonClick);
      this.buttons.push(buttonID);
    }

    this.onClick = onClick;
  }

  onButtonClick = (e) => {
    const selection = buttons[e.currentTarget.id];
    console.log(selection);
    this.onClick(selection);
  };

  renderCalculum(state, stateLog) {
    this.calculumLog = document.querySelector('#calculum-log');
    this.calculumLog.textContent = stateLog;

    this.calculumRendered = document.querySelector(
      '#calculum-rendered',
    );
    this.calculumRendered.textContent = state;
  }
}

export default View;
