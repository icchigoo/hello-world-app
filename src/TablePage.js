// TablePage.js

import React, { useState } from 'react';
import './TablePage.css';

function TablePage() {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState({ id: '', name: '', description: '' });

  const openAddDialog = () => {
    setIsAddDialogOpen(true);
  };

  const closeAddDialog = () => {
    setIsAddDialogOpen(false);
    // Clear the newItem state when the dialog is closed
    setNewItem({ id: '', name: '', description: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddItem = () => {
    // Check if all fields are filled
    if (newItem.id && newItem.name && newItem.description) {
      setTableData((prevData) => [...prevData, newItem]);
      closeAddDialog();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="table-page-container">
      <h1 className="table-page-title">Table Page</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="action-button" onClick={openAddDialog}>
        Add New Item
      </button>

      {/* Add New Item Dialog */}
      {isAddDialogOpen && (
        <div className="dialog-overlay">
          <div className="add-dialog">
            <h2>Add New Item</h2>
            <label>
              ID:
              <input type="text" name="id" value={newItem.id} onChange={handleInputChange} />
            </label>
            <label>
              Name:
              <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
              />
            </label>
            <div className="dialog-buttons">
              <button onClick={handleAddItem}>OK</button>
              <button onClick={closeAddDialog}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TablePage;
