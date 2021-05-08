import calc from '/home/giandanves/coding/xarlinhos-academy/src/scripts/calc.js';
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

  updateState(viewState) {
    if (
      (this.state == 0 || this.opChecker == 1) &&
      isNaN(viewState) == false
    ) {
      this.state = viewState;
      this.opChecker = 0;
    } else if (isNaN(viewState)) {
      this.opChecker++;

      if (isNaN(this.lastStateLog)) {
        this.opChecker = 1;
        this.stateLog = this.stateLog.replace(
          `${this.stateLog.substr(length - 1, 1)}`,
          `${viewState}`,
        );
      } else {
        if (this.stateLog) {
          this.state = calc(this.getStateLog + this.state);
        }
      }
      this.updateStateLog(this.state, viewState);
    } else {
      this.state += viewState;
    }
    this.lastStateLog = viewState;
    return this.getState;
  }
}

export default Controller;
