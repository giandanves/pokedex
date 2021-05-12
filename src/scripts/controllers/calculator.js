import { calc, percent } from '../calc.js';

class Controller extends EventTarget {
  constructor() {
    super();
    this.state = '0';
    this.lastStateLog = 0;
    this.stateLog = '';
    this.store = '';
    this.opChecker = 0;
  }

  get _state() {
    return this.state;
  }

  get _stateLog() {
    return this.stateLog;
  }

  storeOperation(stateLog, state, viewState, calculum) {
    if (this.store) {
      if (viewState == '=') {
        this.store += `${stateLog.substr(
          -1,
        )}${state}${viewState}${calculum}`;
      } else {
        this.store += `${viewState}${state}`;
      }
    } else if (viewState == '=') {
      this.store = `${stateLog}${state}${viewState}${calculum}`;
    } else {
      this.store += `${stateLog}${state}`;
    }

    if (viewState == '=') {
      this.dispatchEvent(
        new CustomEvent('operationFinished', {
          detail: this.store,
        }),
      );
      this.store = '';
    }
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

  makeOperation(viewState) {
    if (this.stateLog) {
      let calculum = calc(this._stateLog + this.state);
      this.storeOperation(
        this.stateLog,
        this.state,
        viewState,
        calculum,
      );
      this.state = calculum;
    }
  }

  handleOperation(viewState) {
    this.opChecker++;

    if (isNaN(this.lastStateLog)) {
      this.changeOperation(viewState);
    } else {
      this.makeOperation(viewState);
    }
    this.updateStateLog(this.state, viewState);
  }

  updateState(viewState) {
    this.locallyStoredOperation = '';
    if (viewState == 'del') {
      this.state = this.state.slice(0, -1);
      return this._state;
    }

    if (viewState == '+/-') {
      this.state = this.state * -1;
      return this._state;
    }

    if (viewState == '.') {
      this.state += viewState;
      return this.state;
    }

    if (viewState == 'clear') {
      this.state = 0;
      this.stateLog = '';
      return this._state;
    }

    if (viewState == '=') {
      if (this.lastStateLog == viewState) {
        return this._state;
      }
      if (this.stateLog) {
        let calculum = `${this.stateLog} ${this.state}`;
        this.makeOperation(viewState);
        this.updateStateLog(calculum, viewState);
        this.lastStateLog = viewState;
      }
      return this._state;
    }

    if (viewState == '%') {
      this.calcPercent();
      return this._state;
    }

    if (
      (this.state == '0' || this.opChecker == 1) &&
      isNaN(viewState) == false
    ) {
      this.getSecondCalcArgument(viewState);
    } else if (isNaN(viewState)) {
      this.handleOperation(viewState);
    } else {
      this.state += viewState;
    }

    this.lastStateLog = viewState;

    return this._state;
  }
}

export default Controller;
