function calc(calcString) {
  const operators = calcString.split(/\d+/, '');
  const numbers = calcString.split(/\D+/g, '');
  console.dir(numbers);
  console.dir(operators);
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

  const operations = {
    '+': (n1, n2) => n1 * 1 + n2 * 1,
    '-': (n1, n2) => n1 * 1 - n2 * 1,
    '*': (n1, n2) => n1 * n2,
    '/': (n1, n2) => n1 / n2,
  };

  for (let i = 0; i < operators.length; i++) {
    if (i < operators.length) {
      result = operations[operators[i]](result, numbers[i + 1]);
    }
  }
  return result;
}

export default calc;
