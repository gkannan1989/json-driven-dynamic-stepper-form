import React from 'react';
import PropTypes from 'prop-types'; 

const Button = ({ onClick, text }) => (
  <div className={'form-card'}>
    <button className="btn btn-success" onClick={onClick}>{text}</button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};

export default Button;
