import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ toggleDarkMode }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
