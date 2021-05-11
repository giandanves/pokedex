const menuButton = document.querySelector(`#menu-button`);
menuButton.addEventListener('click', changePage);

function changePage(e) {
  if (e.currentTarget.id == 'menu-button') {
    window.location.href = '/history.html';
  }
}

export default changePage;
