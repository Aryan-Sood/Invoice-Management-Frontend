import React from 'react';
import '../styles/topbar.css';
import { useNavigate } from 'react-router-dom';
import { deleteAllInvoices } from '../services/api';

const TopBar = () => {

    const navigate = useNavigate();

    const handleDeleteInvoices = async() => {
        await deleteAllInvoices();
    }

  return (
    <div className="top-bar">
      <div className="top-bar-buttons">
        <button className="top-bar-button" onClick={()=>{navigate('/create')}}>Create</button>
        <button className="top-bar-button" style={{backgroundColor: 'red'}} onClick={handleDeleteInvoices}>Delete</button>
      </div>
      <h1 className="top-bar-title">Invoice Management</h1>
    </div>
  );
};

export default TopBar;