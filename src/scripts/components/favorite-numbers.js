import React from 'react';
import favNumbersImg from 'Img/podium.svg';

class FavoriteNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  getSuffix(times) {
    if (times == 1) {
      return 'vez';
    } else {
      return 'vezes';
    }
  }
  render() {
    return (
      <div className="slide">
        <p className="stats-screen__total-op-text">
          Números favoritos
        </p>
        <div id="favorite-numbers">
          <div className="stats-screen__favorite-number-div">
            <p className="stats-screen__total-op-value">
              {this.props.favoriteNumbers[0].element}
            </p>
            <p className="stats-screen__total-op-times">
              {this.props.favoriteNumbers[0].times}{' '}
              {this.getSuffix(this.props.favoriteNumbers[0].times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-2">
            <p className="stats-screen__total-op-value">
              {this.props.favoriteNumbers[1].element}
            </p>
            <p className="stats-screen__total-op-times">
              {this.props.favoriteNumbers[1].times}{' '}
              {this.getSuffix(this.props.favoriteNumbers[1].times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-3">
            <p className="stats-screen__total-op-value">
              {this.props.favoriteNumbers[2].element}
            </p>
            <p className="stats-screen__total-op-times">
              {this.props.favoriteNumbers[2].times}{' '}
              {this.getSuffix(this.props.favoriteNumbers[2].times)}
            </p>
          </div>
        </div>
        <img
          className="stats-screen__fav-op-img"
          src={favNumbersImg}
        ></img>
      </div>
    );
  }
}

export default FavoriteNumbers;
