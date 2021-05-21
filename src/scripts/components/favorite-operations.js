import React from 'react';
import favOpImg from 'Img/fav-operations-img.svg';

class FavoriteOperations extends React.Component {
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
    const [
      firstOperation,
      secondOperation,
      thirdOperation,
      fourthOperation,
    ] = this.props.favoriteOperations;
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
              {this.getSuffix(firstOperation.times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-2">
            <p className="stats-screen__total-op-value">
              {secondOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {secondOperation.times}{' '}
              {this.getSuffix(secondOperation.times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-3">
            <p className="stats-screen__total-op-value">
              {thirdOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {thirdOperation.times}{' '}
              {this.getSuffix(thirdOperation.times)}
            </p>
          </div>
          <div className="stats-screen__favorite-number-div favorite-numbers-4">
            <p className="stats-screen__total-op-value">
              {fourthOperation.element}
            </p>
            <p className="stats-screen__total-op-times">
              {fourthOperation.times}{' '}
              {this.getSuffix(fourthOperation.times)}
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
