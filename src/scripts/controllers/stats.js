const totalOperations = document.querySelector('#total-operations');
const favoriteNumbers = document.querySelector('#favorite-numbers');
const favoriteOperations = document.querySelector(
  '#favorite-operations',
);
//const favoriteDays = document.querySelector('#favorite-days');

function countTotalOperations(history) {
  return history.length;
}

function checkAllNumbersAndOperations(history) {
  let numberIterate = '';
  let allNumbers = [];
  let allOperations = [];
  history.forEach((savedOp) => {
    let stopIterate = false;
    savedOp.operation.split('').forEach((char) => {
      let number;

      if (stopIterate) {
        return;
      } else {
        if (char == '=') {
          stopIterate = true;
          let number = numberIterate;
          numberIterate = '';
          allNumbers.push(number);
          return number;
        }

        if (isNaN(char)) {
          allOperations.push(char);
          number = numberIterate;
          numberIterate = '';
          allNumbers.push(number);
          return number;
        } else {
          numberIterate += char;
        }
      }
    });
  });
  return { allNumbers, allOperations };
}

function renderFavoriteNumbers(numbers) {
  numbers.sort();

  const NumberRepeatCounter = (number, times) => {
    return { number, times };
  };

  let arrayNumberRepeatitions = [];
  let objNumber;
  let lastNumber;
  numbers.forEach((number) => {
    if (number == lastNumber) {
      objNumber.times++;
    } else {
      arrayNumberRepeatitions.push(objNumber);
      objNumber = NumberRepeatCounter(number, 1);
    }

    lastNumber = number;
  });
  arrayNumberRepeatitions.push(objNumber);
  arrayNumberRepeatitions.sort(function (a, b) {
    if (a.times > b.times) return -1;
    if (a.times < b.times) return 1;
    return 0;
  });
  favoriteNumbers.textContent = `1º: ${arrayNumberRepeatitions[0].number}(${arrayNumberRepeatitions[0].times} vezes) | 2º: ${arrayNumberRepeatitions[1].number}(${arrayNumberRepeatitions[1].times} vezes) | 3º: ${arrayNumberRepeatitions[2].number}(${arrayNumberRepeatitions[2].times} vezes)`;
}

function renderFavoriteOperations(operations) {
  operations.sort();
  const OperationRepeatCounter = (operation, times) => {
    return { operation, times };
  };

  let arrayOperationRepeatitions = [];
  let objOperation;
  let lastOperation;
  operations.forEach((operation) => {
    if (operation == lastOperation) {
      objOperation.times++;
    } else {
      arrayOperationRepeatitions.push(objOperation);
      objOperation = OperationRepeatCounter(operation, 1);
    }

    lastOperation = operation;
  });
  arrayOperationRepeatitions.push(objOperation);
  arrayOperationRepeatitions.sort(function (a, b) {
    if (a.times > b.times) return -1;
    if (a.times < b.times) return 1;
    return 0;
  });
  favoriteOperations.textContent = `1º: ${arrayOperationRepeatitions[0].operation}(${arrayOperationRepeatitions[0].times} vezes) | 2º: ${arrayOperationRepeatitions[1].operation}(${arrayOperationRepeatitions[1].times} vezes) | 3º: ${arrayOperationRepeatitions[2].operation}(${arrayOperationRepeatitions[2].times} vezes)`;
}

function updateStats(storage) {
  storage.history.then((r) => {
    totalOperations.textContent = countTotalOperations(r);
    let numbersAndOp = checkAllNumbersAndOperations(r);
    renderFavoriteNumbers(numbersAndOp.allNumbers);
    renderFavoriteOperations(numbersAndOp.allOperations);
  });
}

export default updateStats;
