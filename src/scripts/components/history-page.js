import React from 'react';
import EmptyHistoryContainer from 'Components/empty-history-container.js';
import FilledHistoryContainer from 'Components/filled-history-container.js';

class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  checkStorage(history) {
    if (history) {
      return <EmptyHistoryContainer></EmptyHistoryContainer>;
    } else {
      return <FilledHistoryContainer></FilledHistoryContainer>;
    }
  }

  render() {
    return (
      <div className="history-screen">
        <div className="history-screen__header"></div>
        <div className="history-screen__display">
          <img
            className="history-screen__display__back-button"
            onClick="window.location.href = '/'"
            src="<%= require('./img/back-button.svg').default %>"
          />
          <div className="nav-bar">
            <div className="nav-bar__button">
              <p className="nav-bar__button--text--onpage">
                Histórico
              </p>
            </div>
            <div
              className="nav-bar__button"
              onClick="window.location.href = '/stats.html'"
            >
              <p className="nav-bar__button--text">Estatísticas</p>
            </div>
          </div>
        </div>
        <div className="history-screen__history-container">
          {this.CheckStorage(this.props.history)};
        </div>
      </div>
    );
  }
}

export default HistoryContainer;
