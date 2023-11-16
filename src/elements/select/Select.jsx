import React, { useEffect, useState } from 'react';
import './Select.css';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

const CustomSelect = ({
  options,
  option,
  setChooseItem,
  initialOption,
  isSetId = false,
}) => {
  const startState = `Выберите ${option}`;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    initialOption || startState,
  );

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (isSetId) {
      setChooseItem(option._id);
    } else {
      setChooseItem(option.name);
    }
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(initialOption || startState);
  }, [initialOption]);

  return (
    <div className='custom-select'>
      <div
        className={`selected-option ${isOpen && 'active-selected-option'}`}
        onClick={() => toggleOptions()}
      >
        {selectedOption}
        {isOpen ? (
          <ArrowDropUp className='icon-15 arrow' />
        ) : (
          <ArrowDropDown className='icon-15 arrow' />
        )}
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
