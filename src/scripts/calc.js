function calc(calcString) {
  const numbers = calcString.match(/[]{0,1}[\d]*[.]{0,1}[\d]+/g);

  console.dir(numbers);
  let operators = calcString.split(/\d+/).filter((obj) => {
    if (obj == '+' || obj == '/' || obj == '-' || obj == '*') {
      return obj;
    }
  });
  let result = numbers[0];

  if (calcString[0] == '-') {
    result = operators[0] + numbers[0];
    operators.splice(0, 1);
  }

  operators.forEach((operator, i) => {
    if (i < numbers.length) {
      result = operations[operator](result, numbers[i + 1]);
    }
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
