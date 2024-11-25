import React from 'react';
import '../styles/topbar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-buttons">
        <button className="top-bar-button">Create</button>
        <button className="top-bar-button">Delete</button>
      </div>
      <h1 className="top-bar-title">Invoice Management</h1>
    </div>
  );
};

export default TopBar;