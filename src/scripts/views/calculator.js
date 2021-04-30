class View {
  constructor(onClick) {
    this.zero = document.querySelector('#n0');
    this.one = document.querySelector('#n1');
    this.two = document.querySelector('#n2');
    this.three = document.querySelector('#n3');
    this.four = document.querySelector('#n4');
    this.five = document.querySelector('#n5');
    this.six = document.querySelector('#n6');
    this.seven = document.querySelector('#n7');
    this.eight = document.querySelector('#n8');
    this.nine = document.querySelector('#n9');

    this.zero.addEventListener('click', this.onButtonClick);
    this.one.addEventListener('click', this.onButtonClick);
    this.two.addEventListener('click', this.onButtonClick);
    this.three.addEventListener('click', this.onButtonClick);
    this.four.addEventListener('click', this.onButtonClick);
    this.five.addEventListener('click', this.onButtonClick);
    this.six.addEventListener('click', this.onButtonClick);
    this.seven.addEventListener('click', this.onButtonClick);
    this.eight.addEventListener('click', this.onButtonClick);
    this.nine.addEventListener('click', this.onButtonClick);

    this.onClick = onClick;
  }

  onButtonClick = (e) => {
    const selection = e.currentTarget.id.replace(/\D/g, '');
    console.log(selection);
    this.onClick(selection);
  };

  setState(state) {
    this.state = document.querySelector('#calculum-rendered');
    this.state.textContent = state;
  }
}

export default View;
