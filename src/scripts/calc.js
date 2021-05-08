function calc(calcString) {
  const numbers = calcString.split(/\D+/g);
  const operators = calcString.split(/\d+/).filter((obj) => {
    if (obj == '+' || obj == '/' || obj == '-' || obj == '*') {
      return obj;
    }
  });

  let result = numbers[0];

  operators.forEach((operator, i) => {
    result = operations[operator](result, numbers[i + 1]);
  });

  return result;
}

function percent(n1, n2) {
  return (n2 * n1.split(/\D+/g)[0]) / 100;
}
const operations = {
  '+': (n1, n2) => n1 * 1 + n2 * 1,
  '-': (n1, n2) => n1 * 1 - n2 * 1,
  '*': (n1, n2) => n1 * n2,
  '/': (n1, n2) => n1 / n2,
};

export { calc, percent };
