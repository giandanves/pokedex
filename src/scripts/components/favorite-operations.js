import React from 'react';
import favOpImg from '../../img/fav-operations-img.svg';

class FavoriteOperations extends React.Component {
  constructor(props) {
    super(props);
  }

  checkTimes(times) {
    if (times == 1) {
      return 'vez';
    } else {
      return 'vezes';
    }
  }

  render() {
    const firstOperation = this.props.favoriteOperations[0];
    const secondOperation = this.props.favoriteOperations[1];
    const thirdOperation = this.props.favoriteOperations[2];
    const fourthOperation = this.props.favoriteOperations[3];
    return (
      <div className="slide">
        <p className="stats-screen__total-op-text">
          Operações Favoritas
        </p>
        <div id="favorite-operations">
          <div className="stats-screen__favorite-number-div">
            <p className="stats-screen__total-op-value">
              {firstOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {firstOperation.times}{' '}
              {this.checkTimes(firstOperation.times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-2">
            <p className="stats-screen__total-op-value">
              {secondOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {secondOperation.times}{' '}
              {this.checkTimes(secondOperation.times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-3">
            <p className="stats-screen__total-op-value">
              {thirdOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {thirdOperation.times}{' '}
              {this.checkTimes(thirdOperation.times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-4">
            <p className="stats-screen__total-op-value">
              {fourthOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {fourthOperation.times}{' '}
              {this.checkTimes(fourthOperation.times)}
            </p>
          </div>
        </div>
        <img
          className="stats-screen__fav-op-img"
          src={favOpImg}
        ></img>
      </div>
    );
  }
}

export default FavoriteOperations;
