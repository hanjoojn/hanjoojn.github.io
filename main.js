document.addEventListener("DOMContentLoaded", function () {
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    document.body.classList.add("first-visit");
    sessionStorage.setItem("hasVisited", "true");
  }
});

function navToggle() {
  var x = document.getElementById("mobile-header-btn");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
