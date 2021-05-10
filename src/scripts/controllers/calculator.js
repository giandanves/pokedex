import {
  calc,
  percent,
} from '/home/giandanves/coding/xarlinhos-academy/src/scripts/calc.js';

class Controller {
  constructor() {
    this.state = '0';
    this.lastStateLog = 0;
    this.stateLog = '';
    this.opChecker = 0;
  }

  get getState() {
    return this.state;
  }

  get getStateLog() {
    return this.stateLog;
  }

  updateStateLog(state, viewState) {
    this.stateLog = state + viewState;
  }

  calcPercent() {
    if (this.stateLog) {
      this.state = percent(this.stateLog, this.state);
    } else {
      this.state = 0;
    }
  }

  getSecondCalcArgument(viewState) {
    this.state = viewState;
    this.opChecker = 0;
  }

  changeOperation(viewState) {
    this.opChecker = 1;
    this.stateLog = this.stateLog.replace(
      `${this.stateLog.substr(length - 1, 1)}`,
      `${viewState}`,
    );
  }

  makeOperation() {
    if (this.stateLog) {
      console.log(this.getStateLog);
      console.log(this.state);
      this.state = calc(this.getStateLog + this.state);
    }
  }

  handleOperation(viewState) {
    this.opChecker++;

    if (isNaN(this.lastStateLog)) {
      this.changeOperation(viewState);
    } else {
      this.makeOperation();
    }
    this.updateStateLog(this.state, viewState);
  }

  updateState(viewState) {
    if (viewState == '+/-') {
      this.state = this.state * -1;
      return this.getState;
    }

    if (viewState == '.') {
      this.state += viewState;
      return this.state;
    }

    if (viewState == 'clear') {
      this.state = 0;
      this.stateLog = '';
      return this.getState;
    }

    if (viewState == '=') {
      let calculum = `${this.stateLog} ${this.state}`;
      this.makeOperation();
      this.updateStateLog(calculum, viewState);
      this.lastStateLog = viewState;
      return this.getState;
    }

    if (viewState == '%') {
      this.calcPercent();
      return this.getState;
    }

    if (
      (this.state == 0 || this.opChecker == 1) &&
      isNaN(viewState) == false
    ) {
      this.getSecondCalcArgument(viewState);
    } else if (isNaN(viewState)) {
      this.handleOperation(viewState);
    } else {
      this.state += viewState;
    }

    this.lastStateLog = viewState;

    return this.getState;
  }
}

export default Controller;
