import React from 'react';

class EmptyHistoryContainer extends React.Component {
  render() {
    return (
      <div
        className="history-screen__history-container__empty-history"
        id="empty-history"
      >
        <p className="empty-history--text">Ainda não há histórico</p>
        <img
          className="empty-history--img"
          src="<%= require('./img/empty-history-img.svg').default %>"
        />
      </div>
    );
  }
}

export default EmptyHistoryContainer;
