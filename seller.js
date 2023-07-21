function toggleHide() {
  let add = document.getElementById("details");
  if (add.style.display != "flex") {
    add.style.display = "flex";
  } else {
    add.style.display = "none";
  }
}

function toggleHide2() {
  let add = document.getElementById("details2");
  if (add.style.display != "flex") {
    add.style.display = "flex";
  } else {
    add.style.display = "none";
  }
}

// seller.js
function addSeller() {
  var name = document.getElementById("seller-name").value;
  var contactInfo = document.getElementById("seller-contact").value;
  var location = document.getElementById("seller-location").value;
  var paymentOptions = document.getElementById("seller-payment").value;
  var registrationDate = document.getElementById("seller-reg").value;
  var sellerStatus = document.getElementById("seller-status").value;
  var shippingOptions = document.getElementById("seller-ship").value;
  var orderHistory = document.getElementById("seller-order").value;

  // Simulate the AJAX request
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert(xhr.responseText); // Display the response from the server
      } else {
        alert("Error: " + xhr.status);
      }
    }
  };

  // Simulate the server-side script that handles the data
  var url = "insert_seller.php"; // Replace with the actual server-side script URL
  var params =
    "name=" +
    encodeURIComponent(name) +
    "&contactInfo=" +
    encodeURIComponent(contactInfo) +
    "&location=" +
    encodeURIComponent(location) +
    "&paymentOptions=" +
    encodeURIComponent(paymentOptions) +
    "&registrationDate=" +
    encodeURIComponent(registrationDate) +
    "&sellerStatus=" +
    encodeURIComponent(sellerStatus) +
    "&shippingOptions=" +
    encodeURIComponent(shippingOptions) +
    "&orderHistory=" +
    encodeURIComponent(orderHistory);

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(params);
}
