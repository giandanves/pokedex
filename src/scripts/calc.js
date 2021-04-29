function calc(calcString) {
  const numbers = calcString.split(/\D+/g);
  const operators = calcString.split(/\d+/).filter((obj) => obj);

  let result = numbers[0];

  operators.forEach((operator, i) => {
    result = operations[operator](result, numbers[i + 1]);
  });

  return result;
}

const operations = {
  '+': (n1, n2) => n1 * 1 + n2 * 1,
  '-': (n1, n2) => n1 * 1 - n2 * 1,
  '*': (n1, n2) => n1 * n2,
  '/': (n1, n2) => n1 / n2,
};

export default calc;
