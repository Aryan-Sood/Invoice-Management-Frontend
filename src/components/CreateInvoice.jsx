import React, { useState } from 'react';
import '../styles/CreateInvoice.css';
import { createInvoice } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateInvoice = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    invoiceNumber: '',
    customerName: '',
    date: '',
    details: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.details];
    updatedItems[index][name] = value;
    setFormData((prevState) => ({ ...prevState, details: updatedItems }));
  };

  const addItem = () => {
    setFormData((prevState) => ({
      ...prevState,
      details: [...prevState.details, { description: '', quantity: '', unit_price: '' }],
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('form data', formData)
    await createInvoice(formData).then(response => navigate('/'));
  };

  return (
    <div className="create-invoice-page">
      <h1>Create Invoice</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Invoice Number:</label>
          <input
            type="text"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="items-section">
          <h2>Invoice Items</h2>
          {formData.details.map((item, index) => (
            <div key={index} className="item-row">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
              <input
                type="number"
                name="unit_price"
                placeholder="Unit Price"
                value={item.unit_price}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addItem}>
            Add Item
          </button>
        </div>
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};

export default CreateInvoice;