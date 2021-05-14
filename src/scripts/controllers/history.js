const emptyHistory = document.querySelector('#empty-history');
const filledHistory = document.querySelector('#filled-history');

function separateOperationAndResult(operation, result, calculum) {
  console.log(calculum);
  let equalsChecker = false;
  calculum.split('').forEach((char) => {
    if (char == '=') {
      equalsChecker = true;
    }

    if (equalsChecker && char != '=') {
      result.textContent += char;
    } else {
      operation.textContent += char;
    }
  });
}

function checkStorageIsFilled(storage) {
  if (storage.history) {
    storage.history.then((r) => {
      r.forEach((savedOperation) => {
        const calculumDiv = document.createElement('div');
        calculumDiv.className = 'history-container__calculum';
        const operation = document.createElement('h3');
        operation.className = 'calculum__operation';
        const result = document.createElement('h2');
        result.className = 'calculum__result';
        separateOperationAndResult(
          operation,
          result,
          savedOperation.operation,
        );
        calculumDiv.appendChild(operation);
        calculumDiv.appendChild(result);
        filledHistory.appendChild(calculumDiv);
      });
    });

    filledHistory.style.display = 'flex';
    emptyHistory.style.display = 'none';
  }
}

export default checkStorageIsFilled;
