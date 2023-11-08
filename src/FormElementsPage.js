import React, { useState } from 'react';
import './FormElementsPage.css';

function FormElementsPage() {
  const [textInput, setTextInput] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
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

      {/* Buttons */}
      <div>
        <label>Buttons:</label>
        <button onClick={() => alert("Button clicked")}>Click Me</button>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </div>
    </div>
  );
}

export default FormElementsPage;
