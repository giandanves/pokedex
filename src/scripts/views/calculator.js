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
    let selection = buttons[e.currentTarget.id];
    console.log(selection);
    if (selection == ',') {
      selection = '.';
      console.log(selection);
    }
    this.onClick(selection);
  };

  renderCalculum(state, stateLog) {
    const stateRender = state.toString().replace('.', ',');
    const stateLogRender = stateLog.toString().replace('.', ',');
    this.calculumLog = document.querySelector('#calculum-log');
    this.calculumLog.textContent = stateLogRender;

    this.calculumRendered = document.querySelector(
      '#calculum-rendered',
    );
    this.calculumRendered.textContent = stateRender;
  }
}

export default View;
