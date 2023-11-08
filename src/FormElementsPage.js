import React, { useState } from 'react';
import './FormElementsPage.css';

function FormElementsPage() {
  const [textInput, setTextInput] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  const [fileValue, setFileValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState('');
  const [rangeValue, setRangeValue] = useState(50);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (checkboxValues.includes(value)) {
      setCheckboxValues(checkboxValues.filter((val) => val !== value));
    } else {
      setCheckboxValues([...checkboxValues, value]);
    }
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileValue(e.target.files[0]);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <div>
      <h1>Form Elements Page</h1>

      {/* Text Input */}
      <div>
        <label>Text Input:</label>
        <input type="text" value={textInput} onChange={handleTextInputChange} />
      </div>

      {/* Radio Buttons */}
      <div>
        <label>Radio Buttons:</label>
        <label>
          <input
            type="radio"
            value="Option 1"
            checked={radioValue === "Option 1"}
            onChange={handleRadioChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="Option 2"
            checked={radioValue === "Option 2"}
            onChange={handleRadioChange}
          />
          Option 2
        </label>
      </div>

      {/* Select Dropdown */}
      <div>
        <label>Select Dropdown:</label>
        <select value={selectValue} onChange={handleSelectChange}>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      {/* Checkboxes */}
      <div>
        <label>Checkboxes:</label>
        <label>
          <input
            type="checkbox"
            value="Checkbox 1"
            checked={checkboxValues.includes("Checkbox 1")}
            onChange={handleCheckboxChange}
          />
          Checkbox 1
        </label>
        <label>
          <input
            type="checkbox"
            value="Checkbox 2"
            checked={checkboxValues.includes("Checkbox 2")}
            onChange={handleCheckboxChange}
          />
          Checkbox 2
        </label>
      </div>

      {/* Textarea */}
      <div>
        <label>Textarea:</label>
        <textarea value={textareaValue} onChange={handleTextareaChange}></textarea>
      </div>

      {/* File Input */}
      <div>
        <label>File Input:</label>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
      </div>

      {/* Password Input */}
      <div>
        <label>Password Input:</label>
        <input type="password" value={passwordValue} onChange={handlePasswordChange} />
      </div>

      {/* Range Input */}
      <div>
        <label>Range Input:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
}

export default FormElementsPage;
