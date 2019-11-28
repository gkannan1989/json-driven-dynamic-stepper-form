import React from 'react';
import PropTypes from 'prop-types'; 

const SelectBox = ({ id, name, label, options, optionValue, onChange, isInvalid }) => (
  <div className={'form-card'}>
    <span>{label}</span>
    <select className="form-control" id={id} name={name} value={optionValue} onChange={onChange}>
      <option value="">Select</option>
      {options.map((option, idx) => <option key={idx} value={option} >{option}</option>)}
    </select>
  </div>
);

SelectBox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  optionValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

SelectBox.defaultProps = {
  id: 1,
  options: [],
  optionValue: '',
  label: '',
  isInvalid: false,
};

export default SelectBox;
