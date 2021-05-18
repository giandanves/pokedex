const totalOperations = document.querySelector('#total-operations');
const filledStats = document.querySelector('#filled-stats-container');
const emptyStats = document.querySelector('#empty-stats-container');
import Glide from '@glidejs/glide';

function renderStatsPage(storage) {
  storage.history.then((r) => {
    if (r.length) {
      filledStats.style.display = 'block';
      emptyStats.style.display = 'none';
      updateStats(storage);
    } else {
      filledStats.style.display = 'none';
      emptyStats.style.display = 'block';
    }
  });
}

function countTotalOperations(history) {
  return history.length;
}

function checkAllNumbersAndOperations(history) {
  let allNumbers = [];
  let allOperations = [];
  let filteredOp = '';

  history.forEach((savedOp) => {
    let i = true;
    savedOp.operation.split('').forEach((char) => {
      if (char == '=') {
        i = false;
        const numbers = filteredOp.split(/\D/);
        const operations = filteredOp.match(/\D/g);
        allNumbers = allNumbers.concat(numbers);
        allOperations = allOperations.concat(operations);
        filteredOp = '';
      }
      if (i) {
        filteredOp += char;
      }
    });
  });

  return { allNumbers, allOperations };
}

function getFavorites(elements) {
  elements.sort();

  const createElementRepeatCounter = (element, times) => ({
    element,
    times,
  });

  const elementRepetitions = [];
  let elementRepeatCounter;

  elements.forEach((element, index) => {
    const lastElement = elements[index - 1];

    if (element === lastElement) {
      elementRepeatCounter.times++;
    } else {
      elementRepetitions.push(elementRepeatCounter);
      elementRepeatCounter = createElementRepeatCounter(element, 1);
    }
  });

  elementRepetitions.push(elementRepeatCounter);
  elementRepetitions.sort();
  return elementRepetitions;
}

function getDates(history) {
  const dates = [];

  function twoDigitsMonthHandler(month) {
    if (month > 9) {
      return '';
    } else return 0;
  }
  history.forEach((operation) => {
    const dateConvertor = new Date(operation.date);
    const dateToString = `${dateConvertor.getDate()}/${twoDigitsMonthHandler(
      dateConvertor.getMonth(),
    )}${dateConvertor.getMonth() + 1}/${dateConvertor.getFullYear()}`;
    dates.push(dateToString);
  });

  return dates;
}
function timesGramaticalChecker(times) {
  if (times == 1) {
    return 'vez';
  } else return 'vezes';
}

function renderFavoriteNumbers(numbers) {
  const favoriteNumbers = document.querySelector('#favorite-numbers');
  numbers.forEach((number, i) => {
    if (i < 3) {
      const favoriteNumberDiv = document.createElement('div');
      favoriteNumberDiv.className =
        'stats-screen__favorite-number-div';
      if (i > 0) {
        favoriteNumberDiv.classList.add(`favorite-numbers-${i + 1}`);
      }
      const numberRendered = document.createElement('p');
      numberRendered.textContent = `${number.element}`;
      numberRendered.className = 'stats-screen__total-op-value';
      favoriteNumbers.appendChild(numberRendered);
      const timesRendered = document.createElement('p');
      timesRendered.textContent = `${
        number.times
      } ${timesGramaticalChecker(number.times)}`;
      timesRendered.className = 'stats-screen__total-op-times';
      favoriteNumberDiv.appendChild(numberRendered);
      favoriteNumberDiv.appendChild(timesRendered);
      favoriteNumbers.appendChild(favoriteNumberDiv);
    }
  });
}

function renderFavoriteOperations(operations) {
  const favoriteOperations = document.querySelector(
    '#favorite-operations',
  );

  operations.forEach((operation, i) => {
    if (operation) {
      const favoriteOperationDiv = document.createElement('div');
      favoriteOperationDiv.className =
        'stats-screen__favorite-number-div';
      if (i > 0) {
        favoriteOperationDiv.classList.add(
          `favorite-numbers-${i + 1}`,
        );
      }
      const operationRendered = document.createElement('p');
      operationRendered.textContent = `${operation.element}`;
      operationRendered.className = 'stats-screen__total-op-value';
      favoriteOperations.appendChild(operationRendered);
      const timesRendered = document.createElement('p');
      timesRendered.textContent = `${
        operation.times
      } ${timesGramaticalChecker(operation.times)}`;
      timesRendered.className = 'stats-screen__total-op-times';
      favoriteOperationDiv.appendChild(operationRendered);
      favoriteOperationDiv.appendChild(timesRendered);
      favoriteOperations.appendChild(favoriteOperationDiv);
    }
  });
}

function renderFavoriteDay(days) {
  const favoriteDays = document.querySelector('#favorite-days');
  favoriteDays.textContent = `${days[0].element}`;
}

function updateStats(storage) {
  storage.history.then((r) => {
    totalOperations.textContent = countTotalOperations(r);
    const numbersAndOp = checkAllNumbersAndOperations(r);
    const dates = getDates(r);
    const favoriteNumbers = getFavorites(numbersAndOp.allNumbers);
    const favoriteOperations = getFavorites(
      numbersAndOp.allOperations,
    );
    const favoriteDays = getFavorites(dates);
    renderFavoriteNumbers(favoriteNumbers);
    renderFavoriteOperations(favoriteOperations);
    renderFavoriteDay(favoriteDays);
    new Glide('.glide').mount();
  });
}

export default renderStatsPage;
