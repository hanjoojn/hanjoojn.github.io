document.addEventListener("DOMContentLoaded", function () {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    document.body.classList.add("first-visit");
    localStorage.setItem("hasVisited", "true");
  }
});
