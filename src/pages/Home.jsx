import React, { useEffect, useState } from 'react';
import InvoiceItem from '../components/InvoiceItem';
import { fetchInvoices } from '../services/api';
import '../styles/styles.css';
import TopBar from '../components/TopBar';

const Home = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const data = await fetchInvoices();
        setInvoices(data);
      } catch (err) {
        setError("Failed to load invoices.");
      } finally {
        setLoading(false);
      }
    };

    getInvoices();
  }, []);

  if (loading) {
    return <p style={{textAlign: 'center'}}>Loading invoices...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <TopBar/>
      {invoices.length == 0 ? <p style={{textAlign: 'center'}}>No invoices created</p> :<div style={{ maxWidth: '600px', margin: '0 auto', paddingTop:'30px'}}>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </div> }
      
    </div>
  );
};

export default Home;