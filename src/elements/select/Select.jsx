import React, { useState } from 'react';
import './Select.css';
import { IoIosArrowDown } from 'react-icons/io';
const CustomSelect = ({ options, option, setSelectedOptionId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(`Выберите ${option}`);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOptionId(option._id);
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  return (
    <div className='custom-select'>
      <div
        className={`selected-option margin-b-25 ${
          isOpen && 'active-selected-option'
        }`}
        onClick={() => toggleOptions()}
      >
        {selectedOption}
        <IoIosArrowDown className='icon-15 arrow' />
      </div>
      {isOpen && (
        <ul className='options'>
          {options.map((option) => (
            <li key={option._id} onClick={() => handleOptionClick(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
