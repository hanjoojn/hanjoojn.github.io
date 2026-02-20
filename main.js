document.addEventListener("DOMContentLoaded", function () {
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    document.body.classList.add("first-visit");
    sessionStorage.setItem("hasVisited", "true");
  }
});
