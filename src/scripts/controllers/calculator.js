class Controller {
  constructor() {
    this.state = '0';
  }

  get getState() {
    return this.state;
  }

  updateState(viewState) {
    if (this.state == 0) {
      this.state = viewState;
    } else {
      this.state += viewState;
    }
    return this.getState;
  }
}

export default Controller;
