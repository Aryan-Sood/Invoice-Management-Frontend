import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchInvoiceById, deleteInvoiceByID } from '../services/api';
import '../styles/invoicedetail.css';

const InvoiceDetailPage = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);

  const [deleteText, setDeleteText] = useState('Delete Invoice')

  const handleDeleteInvoice = async() =>{
    setDeleteText('Deleting Invoice...')
    await deleteInvoiceByID(id).then((response) => navigate('/'));
  }

  useEffect(() => {
    fetchInvoiceById(id)
      .then((data) => {
        setInvoiceData(data);
      })
      .catch((error) => {
        setError(error)
      });
  }, [id]);

  if (!invoiceData) {
    return <p style={{textAlign: 'center'}}>Loading Invoice Data...</p>;
  }

  return (
    <div className="invoice-detail-page">
      {error && <p className="error">{error}</p>}

      {invoiceData ? (
        <div className="invoice-detail-container">
          <h2 className="invoice-title">Invoice #{invoiceData.invoice_number}</h2>

          <div className="invoice-info">
            <div><strong>Customer:</strong> {invoiceData.customer_name}</div>
            <div><strong>Date:</strong> {invoiceData.date}</div>
          </div>

          <div className="invoice-items">
            <h3>Items</h3>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.details.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit_price}</td>
                    <td>{item.quantity * item.unit_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br></br>
          <button className="top-bar-button" style={{backgroundColor: 'red'}} onClick={handleDeleteInvoice}>{deleteText}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InvoiceDetailPage;