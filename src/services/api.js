import axios from 'axios';

// const API_BASE_URL = "http://127.0.0.1:8000/api/invoices";
const API_BASE_URL = "http://invoice-system-backend-production.up.railway.app/api/invoices";

export const fetchInvoices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;
  }
};

export const fetchInvoiceById = async (id) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/detail`, {
      id: id
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching invoice with id ${id}:`, error);
    throw error;
  }
};

export const createInvoice = async (invoiceData) => {
  try{
    console.log(invoiceData)
    let details = []
    invoiceData.details.forEach((item) => details.push({
      description: item.description,
      quantity: parseInt(item.quantity),
      unit_price: parseFloat(item.unit_price)
    }));
    await axios.post(`${API_BASE_URL}/create`, {
      invoice_number: invoiceData.invoiceNumber,
      customer_name: invoiceData.customerName,
      date: invoiceData.date,
      details: details
    })
  }
  catch(error){
    console.error(`Error creating invoice`, error);
  }
}

export const deleteAllInvoices = async() => {
  try{
    await axios.delete(`${API_BASE_URL}/deleteall`)
  }
  catch(error){
    console.log('Error deleting all invoices', error);
  }
}

export const deleteInvoiceByID = async(id) => {
  try{
    await axios.delete(`${API_BASE_URL}/deletebyid`, {
      data : {
        id: id
      }
    })
  }
  catch(error){
    console.log(`error deleting invoice with id ${id}`, error)
  }
}