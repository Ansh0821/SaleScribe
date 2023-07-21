function toggleHide() {
  let add = document.getElementById("details");
  if (add.style.display != "flex") {
    add.style.display = "flex";
  } else {
    add.style.display = "none";
  }
}

// function handleAddCustomer() {
//   // Check if the user is signed in (you can implement your own check here)
//   var userSignedIn = checkUserSignedIn(); // Replace checkUserSignedIn() with your own function to check sign-in status.

//   if (userSignedIn) {
//     // If the user is signed in, toggle the customer details form
//     toggleHide();
//   } else {
//     // If the user is not signed in, redirect to the sign-in page
//     window.location.href = "sign-in-up.html";
//   }
// }
