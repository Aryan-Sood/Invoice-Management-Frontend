import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInvoiceById } from '../services/api';
import '../styles/invoicedetail.css';

const InvoiceDetailPage = () => {
  const { id } = useParams();
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);

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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InvoiceDetailPage;