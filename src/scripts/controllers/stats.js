const filledStats = document.querySelector('#filled-stats-container');
const emptyStats = document.querySelector('#empty-stats-container');
import ReactDOM from 'react-dom';
import React from 'react';
import Slide from 'Components/glide.js';

function renderStatsPage(storage) {
  storage.history.then((r) => {
    if (r.length) {
      filledStats.style.display = 'block';
      emptyStats.style.display = 'none';
    } else {
      filledStats.style.display = 'none';
      emptyStats.style.display = 'block';
    }
  });
}

function updateStats(storage) {
  storage.history.then((r) => {
    const numbersAndOp = checkAllNumbersAndOperations(r);
    const dates = getDates(r);
    const favoriteNumbers = getFavorites(numbersAndOp.allNumbers);
    const favoriteOperations = getFavorites(
      numbersAndOp.allOperations,
    );
    const favoriteDay = getFavorites(dates);

    ReactDOM.render(
      <Slide
        favoriteOperations={favoriteOperations}
        totalOperations={r.length}
        favoriteNumbers={favoriteNumbers}
        favoriteDay={favoriteDay}
      />,
      document.querySelector('#filled-stats-container'),
    );
  });
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
  elementRepetitions.sort(function (a, b) {
    if (a.times > b.times) return -1;
    if (a.times < b.times) return 1;
    return 0;
  });

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

export { renderStatsPage, updateStats };
