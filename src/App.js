import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvoiceDetailPage from './components/InvoiceDetailItem';
import CreateInvoice from './components/CreateInvoice';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<InvoiceDetailPage/>}/>
        <Route path="/create" element = {<CreateInvoice/>}/>
      </Routes>
    </Router>
  );
};

export default App;