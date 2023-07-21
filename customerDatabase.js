function saveCustomer() {
    // Get the customer details from the input fields
    const customerId = document.getElementById("customer-id").value;
    const customerName = document.getElementById("customer-name").value;
    const customerContact = document.getElementById("customer-contact").value;
    const customerLocation1 = document.getElementById("customer-location1").value;
    const customerLocation2 = document.getElementById("customer-location2").value;
    const customerBill = document.getElementById("customer-bill").value;
    const customerPay = document.getElementById("customer-pay").value;
    const customerShop = document.getElementById("customer-shop").value;
    const customerLoyalty = document.getElementById("customer-loyalty").value;
    const customerFeedback = document.getElementById("customer-feedback").value;
    const customerSubs = document.getElementById("customer-subs").value;
  
    // Here, you can perform any further processing or validation before saving the customer details to the database.
    // For example, you can send the data to the server using an HTTP request (e.g., fetch or XMLHttpRequest) to save it to the database.
    // Since you are using Node.js, you can set up a route in your server to handle saving customer details to the database.
  
    // Example of sending the data to the server using fetch (assuming you have a route in the server to handle saving customer details):
    const customerData = {
      name: customerName,
      contactInfo: customerContact,
      billingAddress: customerLocation1,
      shippingAddress: customerLocation2,
      totalAmountSpent: customerBill,
      preferredPayments: customerPay,
      preferredCategories: customerShop,
      loyaltyPoints: customerLoyalty,
      feedbacks: customerFeedback,
      subscriptions: customerSubs,
    };
  
    fetch('http://localhost:8000/addCustomer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save customer details.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Customer details saved successfully:', data);
        // Perform any actions you want to take after saving the customer details
      })
      .catch((error) => {
        console.error('Error:', error.message);
        // Handle the error or display an error message to the user
      });
  }
  
//   function cancelEdit() {
//     // Implement the cancel logic if needed
//   }
  

async function fetchCustomerList() {
    try {
      const response = await fetch("http://localhost:8000/getcustomerlists");
      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }
      const customerList = await response.json();
      return customerList;
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  }
  
  // Function to populate the table with sellers' data
  async function populateCustomerTable() {
    // Fetch the list of sellers from the server
    const customerList = await fetchCustomerList();
    // Get the table body element
    const tableBody = document.querySelector("#customersTable tbody");
  
    // Clear any existing table rows
    tableBody.innerHTML = "";
  
    customerList.reverse();
  
    // Check if the fetch was successful and the data is available
    if (customerList) {
      // Loop through each seller and add a row to the table
      customerList.forEach((customer) => {
        console.log(customer);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.CustomerId}</td>
            <td>${customer.Name}</td>
            <td>${customer.ContactInfo}</td>
            <td>${customer.BillingAddress}</td>
          `;
        tableBody.appendChild(row);
      });
    } else {
      console.log("Failed to fetch sellers list.");
    }
  }
  
  // Call the function to populate the sellers table
  populateCustomerTable();