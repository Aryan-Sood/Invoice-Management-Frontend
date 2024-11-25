import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const InvoiceItem = ({ invoice }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${invoice.id}`);
  };

  return (
    <div className="invoice-card" onClick={handleClick}>
      <h2>{invoice.invoice_number}</h2>
      <p><strong>Customer:</strong> {invoice.customer_name}</p>
      <p><strong>Date:</strong> {new Date(invoice.date).toLocaleDateString()}</p>
      <p><strong>Quantity:</strong> {invoice.details.length}</p>
      <p>Click to view details</p>
    </div>
  );
};

// Type-checking the props with PropTypes
InvoiceItem.propTypes = {
  invoice: PropTypes.shape({
    invoice_number: PropTypes.string.isRequired,
    customer_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired
  }).isRequired,
};

export default InvoiceItem;