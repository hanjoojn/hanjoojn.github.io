document.addEventListener("DOMContentLoaded", function () {
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    document.body.classList.add("first-visit");
    sessionStorage.setItem("hasVisited", "true");
  }
});

function navToggle() {
  var x = document.getElementById("mobileHeader");
  var y = document.getElementById("mobileHeaderBtn");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
  if (y.style.position === "sticky") {
    y.style.display = "fixed";
  } else {
    y.style.display = "sticky";
  }
}
