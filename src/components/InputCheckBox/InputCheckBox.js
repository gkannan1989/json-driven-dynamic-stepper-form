import React from 'react';
import PropTypes from 'prop-types';

const InputCheckBox = ({ id, name, label, isChecked, onClick }) => (
  <div className={'form-card'}>
    <div className={'checkbox'}>
      <span>{label}</span>
      <input
        className={'checkboxCls'}
        id={id}
        name={name}
        type="checkbox" 
        defaultChecked={isChecked} 
        onClick={onClick}
      /> 
    </div> 
  </div>
);

InputCheckBox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

InputCheckBox.defaultProps = {
  id: 1,
  isChecked: false,
  label: '',
  isInvalid: false,
};

export default InputCheckBox;
