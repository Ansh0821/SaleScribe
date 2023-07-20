function toggleContent() {
  const currentContent = document.getElementById("current");
  const nextContent = document.getElementById("next");

  // Toggle the visibility of currentContent and nextContent
  if (currentContent.style.display === "flex") {
    currentContent.style.display = "none";
    nextContent.style.display = "flex";
  } else {
    currentContent.style.display = "flex";
    nextContent.style.display = "none";
  }
}
