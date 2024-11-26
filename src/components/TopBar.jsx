import React from 'react';
import '../styles/topbar.css';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {

    const navigate = useNavigate();

  return (
    <div className="top-bar">
      <div className="top-bar-buttons">
        <button className="top-bar-button" onClick={()=>{navigate('/create')}}>Create</button>
        <button className="top-bar-button">Delete</button>
      </div>
      <h1 className="top-bar-title">Invoice Management</h1>
    </div>
  );
};

export default TopBar;