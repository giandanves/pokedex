const emptyHistory = document.querySelector('#empty-history');
const filledHistory = document.querySelector('#filled-history');

function checkStorageIsFilled(storage) {
  if (storage.history) {
    filledHistory.style.display = 'flex';
    emptyHistory.style.display = 'none';
  }
}

export default checkStorageIsFilled;
