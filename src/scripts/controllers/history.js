const emptyHistory = document.querySelector('#empty-history');
const filledHistory = document.querySelector('#filled-history');

function separateOperationAndResult(operation, result, calculum) {
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
  storage.history.then((r) => {
    if (r.length) {
      renderOperationsOnHistory(r);
      filledHistory.style.display = 'flex';
      emptyHistory.style.display = 'none';
    } else {
      filledHistory.style.display = 'none';
      emptyHistory.style.display = 'flex';
    }
  });
}

function renderOperationsOnHistory(history) {
  history.forEach((savedOperation) => {
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
}

export default checkStorageIsFilled;
