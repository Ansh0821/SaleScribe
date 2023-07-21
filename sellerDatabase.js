function addSeller() {
  // Get form elements by their id names
  const sellerName = document.getElementById("seller-name").value;
  const sellerContact = document.getElementById("seller-contact").value;
  const sellerLocation = document.getElementById("seller-location").value;
  const sellerPayment = document.getElementById("seller-payment").value;
  const sellerStatus = document.getElementById("seller-status").value;
  const sellerShip = document.getElementById("seller-ship").value;
  const sellerPerf = document.getElementById("seller-perf").value;
  const sellerOrder = document.getElementById("seller-order").value;
  const registrationDate = document.getElementById("seller-reg").value;

  // Create an object with the seller data
  const sellerData = {
    name: sellerName,
    contactInfo: sellerContact,
    location: sellerLocation,
    paymentOptions: sellerPayment,
    sellerStatus: sellerStatus,
    registrationDate: registrationDate,
    shippingDelivery: sellerShip,
    salesPerformance: sellerPerf,
    orderHistory: sellerOrder,
  };

  console.log(sellerData);

  // Now you can use the 'sellerData' object to perform further actions, such as sending it to the server to add the seller to the database.
  // For example, you can make an AJAX request to send the seller data to the server.

  // Replace the following lines with your actual AJAX request or other logic to send the data to the server.

  // Example AJAX request using fetch API:
  fetch("http://localhost:8000/addSeller", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sellerData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message); // The response from the server
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// function cancelEdit() {
//   const details = document.getElementById('details');
//   details.style.display = 'none';
// }

// Function to handle the form submission when the "Save" button is clicked
// function saveSeller() {
//   addSeller();
// //   cancelEdit();
// }

// Function to fetch the list of sellers from the server
// Function to fetch the list of sellers from the server
async function fetchSellersList() {
  try {
    const response = await fetch("http://localhost:8000/getsellerlists");
    if (!response.ok) {
      throw new Error("Failed to fetch sellers");
    }
    const sellersList = await response.json();
    return sellersList;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// Function to populate the table with sellers' data
async function populateSellersTable() {
  // Fetch the list of sellers from the server
  const sellersList = await fetchSellersList();
  // Get the table body element
  const tableBody = document.querySelector("#sellersTable tbody");

  // Clear any existing table rows
  tableBody.innerHTML = "";

  sellersList.reverse();

  // Check if the fetch was successful and the data is available
  if (sellersList) {
    // Loop through each seller and add a row to the table
    sellersList.forEach((seller) => {
      console.log(seller);
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${seller.Id}</td>
          <td>${seller.Name}</td>
          <td>${seller.ContactInfo}</td>
          <td>${seller.Location}</td>
        `;
      tableBody.appendChild(row);
    });
  } else {
    console.log("Failed to fetch sellers list.");
  }
}

// Call the function to populate the sellers table
populateSellersTable();
