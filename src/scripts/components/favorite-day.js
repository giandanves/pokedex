import React from 'react';
import favDayImg from 'Img/calendar.svg';

class FavoriteDay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slide">
        <p className="stats-screen__total-op-text">
          Dia com mais operações
        </p>
        <p className="stats-screen__total-op-value">
          {this.props.favoriteDay[0].element}
        </p>
        <img
          className="stats-screen__total-op-img"
          src={favDayImg}
        ></img>
      </div>
    );
  }
}

export default FavoriteDay;
