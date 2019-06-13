import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
  const { onClick, value } = props;
  
  const squareStyle = {
    outline: '5px solid #000',
    border: 'none',
    color: '#000',
    textAlign: 'center',
    width: '33.3333%',
    height: '200px',
    float: 'left',
    fontSize: '6rem'
  }

  return (
    <button style={squareStyle} onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};
 
export default Square;