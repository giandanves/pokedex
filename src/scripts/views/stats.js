import React from 'react';
import Img from '../../img/fav-operations-img.svg';
class FavoriteOperations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const firstOperation = this.props.operations[0];
    const secondOperation = this.props.operations[1];
    const thirdOperation = this.props.operations[2];
    const fourthOperation = this.props.operations[3];
    return (
      <div id="favorite-operations">
        <div className="stats-screen__favorite-number-div">
          <p className="stats-screen__total-op-value">
            {firstOperation.element}
          </p>
          <p className="stats-screen__total-op-times">
            {firstOperation.times}
          </p>
        </div>
        <div className="stats-screen__favorite-number-div favorite-numbers-2">
          <p className="stats-screen__total-op-value">
            {secondOperation.element}
          </p>
          <p className="stats-screen__total-op-times">
            {secondOperation.times}
          </p>
        </div>
        <div className="stats-screen__favorite-number-div favorite-numbers-3">
          <p className="stats-screen__total-op-value">
            {thirdOperation.element}
          </p>
          <p className="stats-screen__total-op-times">
            {thirdOperation.times}
          </p>
        </div>
        <div className="stats-screen__favorite-number-div favorite-numbers-4">
          <p className="stats-screen__total-op-value">
            {fourthOperation.element}
          </p>
          <p className="stats-screen__total-op-times">
            {fourthOperation.times}
          </p>
        </div>
      </div>
    );
  }
}

class FavoriteOperationsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const status = 'Operações Favoritas';

    return (
      <li className="glide__slide">
        <div className="slide">
          <p className="stats-screen__total-op-text">{status}</p>
          <FavoriteOperations
            operations={this.props.operations}
          ></FavoriteOperations>
          <img className="stats-screen__fav-op-img" src={Img} />
        </div>
      </li>
    );
  }
}

//src="<%= require('./img/fav-operations-img.svg').default %>"

export default FavoriteOperationsContainer;
