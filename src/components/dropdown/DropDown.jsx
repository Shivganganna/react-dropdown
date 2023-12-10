import React from 'react'
import { useState } from 'react';
import '../dropdown/DropDown.css'

const DropDown = () => {

    const [selectedOption, setSelectedOption] = useState('');

    // Options for the dropdown
    const options = ['Yes', 'Probably Not'];
  
    // Event handler for when the dropdown value changes
    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className='dropdown'>
        <select className="dropdown-select" value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

export default DropDown