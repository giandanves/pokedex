function calc(calcString) {
  const operators = [];
  const numbers = [];
  let numberFinder = '';
  for (let char of calcString) {
    if (isNaN(char)) {
      numbers.push(numberFinder);
      operators.push(char);
      numberFinder = '';
    } else {
      numberFinder += `${char}`;
    }
  }
  numbers.push(numberFinder);
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (i < operators.length) {
      result = operationMaker(result, operators[i], numbers[i + 1]);
    }
  }
  console.log(result);
}

function operationMaker(n1, op, n2) {
  if (op == '+') {
    return n1 * 1 + n2 * 1;
  }
  if (op == '-') {
    return n1 * 1 - n2 * 1;
  }

  if (op == '*') {
    return n1 * n2;
  }

  if (op == '/') {
    return n1 / n2;
  }
}

export default calc;
