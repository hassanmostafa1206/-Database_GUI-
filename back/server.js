const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Server is running and ready ✅");
});

// Branch
app.post('/branch', (req, res) => {
  console.log('Branch data received:', req.body);
  res.send("Branch data received");
});

// Website
app.post('/website', (req, res) => {
  console.log('Website data received:', req.body);
  res.send("Website data received");
});

// Categories
app.post('/categories', (req, res) => {
  console.log('Category data received:', req.body);
  res.send("Category data received");
});

// Cashier
app.post('/casher', (req, res) => {
  console.log('Cashier data received:', req.body);
  res.send("Cashier data received");
});

// Customers
app.post('/customers', (req, res) => {
  console.log('Customer data received:', req.body);
  res.send("Customer data received");
});

// Employees
app.post('/employees', (req, res) => {
  console.log('Employee data received:', req.body);
  res.send("Employee data received");
});

// Products
app.post('/products', (req, res) => {
  console.log('Product data received:', req.body);
  res.send("Product data received");
});

// Invoices
app.post('/invoices', (req, res) => {
  console.log('Invoice data received:', req.body);
  res.send("Invoice data received");
});

// ProductsInvoice
app.post('/products-invoice', (req, res) => {
  console.log('ProductsInvoice data received:', req.body);
  res.send("ProductsInvoice data received");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});