import React from 'react';
import PropTypes from 'prop-types'; 

const InputText = ({ id, name, label, value, onChange, isInvalid }) => (
  <div className={'form-card'}>
    <span>{label}</span>
    <input
      id={id}
      className="form-control"
      name={name}
      type="text"
      value={value}
      required="required"
      onChange={onChange} 
    />
  </div>
);

InputText.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

InputText.defaultProps = {
  id: 1,
  value: '',
  label: '',
  isInvalid: false,
};

export default InputText;
