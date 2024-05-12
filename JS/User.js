$(document).ready(function () {
  var table = $("#mytableUs").DataTable({
    bPaginate: false,
  });
});
document.getElementById("add-t").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
});



const tabSets = document.querySelectorAll(".set-tab");

for (const tabSet of tabSets) {
  tabSet.addEventListener("click", () => {
    tabSets.forEach((x) => {
      x.classList.remove("active");
    });
    tabSet.classList.add("active");
  });
}