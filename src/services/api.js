import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000/api/invoices";

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