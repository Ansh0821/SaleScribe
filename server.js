const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' package

const app = express();
const port = 8000;

// MySQL database configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'SaleScribeDB',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

// Parse incoming request bodies (for handling form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors()); // Add this line to enable CORS

// Serve the static HTML file
app.use(express.static('public'));

app.get('/getsellerlists', (req, res) => {
  const query = 'SELECT * FROM sellers';
  connection.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch sellers' });
    }
    return res.status(200).json(rows);
  });
});

// Define a route to add a new seller
app.post('/addSeller', (req, res) => {
  const seller = {
    name: req.body.name,
    contactInfo: req.body.contactInfo,
    location: req.body.location,
    paymentOptions: req.body.paymentOptions,
    registrationDate: req.body.registrationDate,
    sellerStatus: req.body.sellerStatus,
    shippingDelivery: req.body.shippingOptions,
    orderHistory: req.body.orderHistory,
  };

  // Insert the seller data into the database
  const query = 'INSERT INTO sellers SET ?';
  connection.query(query, seller, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert seller' });
    }
    console.log('Seller added successfully!');
    return res.status(200).json({ message: 'Seller added successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/getcustomerlists', (req, res) => {
  const query = 'SELECT * FROM customers';
  connection.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch customers' });
    }
    return res.status(200).json(rows);
  });
});

app.post('/addCustomer', (req, res) => {
  const customer = {
    name: req.body.name,
    contactInfo: req.body.contactInfo,
    billingAddress: req.body.billingAddress,
    shippingAddress: req.body.shippingAddress,
    totalAmountSpent: req.body.totalAmountSpent,
    preferredPayments: req.body.preferredPayments,
    preferredCategories: req.body.preferredCategories,
    loyaltyPoints: req.body.loyaltyPoints,
    feedbacks: req.body.feedbacks,
    subscriptions: req.body.subscriptions
  };

  // Insert the customer data into the database
  const query = 'INSERT INTO customers SET ?';
  connection.query(query, customer, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert seller' });
    }
    console.log('Customer added successfully!');
    return res.status(200).json({ message: 'Customer added successfully' });
  });
});