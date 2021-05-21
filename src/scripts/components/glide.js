import React from 'react';
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';
import FavoriteOperations from './favorite-operations.js';
import TotalOperations from './total-operations.js';
import FavoriteNumbers from './favorite-numbers.js';
import FavoriteDay from './favorite-day.js';
class Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Glide hideArrows={true} keyboard={true}>
        <TotalOperations
          totalOperations={this.props.totalOperations}
        ></TotalOperations>
        <FavoriteNumbers
          favoriteNumbers={this.props.favoriteNumbers}
        ></FavoriteNumbers>
        <FavoriteOperations
          favoriteOperations={this.props.favoriteOperations}
        ></FavoriteOperations>
        <FavoriteDay
          favoriteDay={this.props.favoriteDay}
        ></FavoriteDay>
      </Glide>
    );
  }
}

export default Slide;
