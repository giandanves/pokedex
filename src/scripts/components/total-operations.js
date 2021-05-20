import React from 'react';
import totalOpImg from 'Img/total-operations-img.svg';

class TotalOperations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slide">
        <p className="stats-screen__total-op-text">
          Total de operações
        </p>
        <p className="stats-screen__total-op-value">
          {this.props.totalOperations}
        </p>
        <img
          className="stats-screen__total-op-img"
          src={totalOpImg}
        ></img>
      </div>
    );
  }
}

export default TotalOperations;
