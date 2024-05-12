$(document).ready(function () {
  var table = $("#mytableUs").DataTable({
    bPaginate: false,
  });
});
// 



const tabSets = document.querySelectorAll(".set-tab");
const tabs = document.querySelectorAll(".tab-Dash");
const divs = document.querySelectorAll("div[data-tabId]");

for (const tabSet of tabSets) {
  tabSet.addEventListener("click", () => {
    tabSets.forEach((x) => {
      x.classList.remove("active");
    });
    tabSet.classList.add("active");
    localStorage.setItem("activeTabMain", tabSet.id);
  });
}
tabs.forEach((e) => {
  e.addEventListener("click", function () {
    divs.forEach((d) => {
      d.classList.remove("active1");
      if (d.dataset.tabid === e.id) {
        d.classList.add("active1");
        localStorage.setItem("activeTabCont", d.dataset.tabid);
      }
    });
  });
});

function saveActiveTab() {
  var activeTab1 = $(".tab-pane.active");
  var activeTab = $(".tab-set.active");
  var tabId = activeTab.attr("href");
  var tabId1 = activeTab1.attr("id");
  localStorage.setItem("activeTab", tabId);
  localStorage.setItem("activeTabC", tabId1);
}

window.onbeforeunload = saveActiveTab;

function getActiveTab() {
  var tabId1 = localStorage.getItem("activeTabC");
  document.querySelectorAll("tab-pane").forEach((e) => {
    console.log(e);
    e.classList.remove("active");
  });
  document.getElementById(tabId1).classList.add("active");

  var tabId = localStorage.getItem("activeTab");
  var activeTab = $(".tab-set[href='" + tabId + "']");
  activeTab.addClass("active");
  activeTab.tab("show");
  var tabContent = $(".tab-content").children(
    ".tab-pane." + activeTab.attr("class")
  );

  var tabIdM = localStorage.getItem("activeTabMain");
  var tabIds = localStorage.getItem("activeTabCont");
  document.querySelectorAll("tab-Dash").forEach((e) => {
    e.classList.remove("active");
  });
  document.getElementById(tabIdM).classList.add("active");
  divs.forEach((d) => {
    if (d.dataset.tabid === tabIds) {
      d.classList.add("active1");
    }
  });
}
window.onload = getActiveTab;

window.onbeforeunload = saveActiveTab;

window.onload = getActiveTab;

//

//
window.onload = function () {
  if (localStorage.getItem("activeTabs") !== null) {
    activeTabs = JSON.parse(localStorage.getItem("activeTabs"));
  }

  activeTabs.forEach((tab) => {
    tab.classList.add("active");
  });
};
//

document.getElementById("add-t").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
});

//

anychart.onDocumentReady(function () {
  var chartData = {
    title: "Chart Title",
    rows: [
      ["Category1", 1, 9, 6],
      ["Category2", 5, 2, 10],
      ["Category3", 10, 5, 9],
      ["Category4", 5, 4, 3],
    ],
  };
  var chart = anychart.column3d();

  chart.data(chartData);

  chart.animation(true);

  chart.yAxis().labels().format("{%Value}{groupsSeparator: }");

  chart
    .labels()
    .enabled(true)
    .fontColor("#60727b")
    .position("center-top")
    .anchor("center-bottom")
    .format("{%Value}{groupsSeparator: }");
  chart.hovered().labels(true);

  chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

  chart.interactivity().hoverMode("single");

  chart
    .tooltip()
    .positionMode("point")
    .position("center-bottom")
    .anchor("center-bottom")
    .offsetX(0)
    .offsetY(5)
    .format("{%SeriesName}: {%Value}{groupsSeparator: }");

  chart.container("container1");

  chart.draw();
});

anychart.onDocumentReady(function () {
  // create pie chart with passed data
  var chart = anychart.pie3d([
    ["Category1", 6, 7, 6],
    ["Category2", 9, 9, 3],
    ["Category3", 10, 2, 9],
    ["Category4", 2, 4, 3],
  ]);

  chart
    .title("Chart Title")

    .radius("43%");

  chart.container("container2");

  chart.draw();
});

//  3 //

anychart.onDocumentReady(function () {
  var chartData = {
    title: "Chart Title",
    rows: [
      ["Category1", 1, 9, 6],
      ["Category2", 5, 2, 10],
      ["Category3", 10, 5, 9],
      ["Category4", 5, 4, 3],
    ],
  };
  var chart = anychart.column();

  chart.data(chartData);

  chart.animation(true);

  chart.yAxis().labels().format("{%Value}{groupsSeparator: }");

  chart
    .labels()
    .enabled(true)
    .fontColor("#60727b")
    .position("center-top")
    .anchor("center-bottom")
    .format("{%Value}{groupsSeparator: }");
  chart.hovered().labels(true);

  chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

  chart.interactivity().hoverMode("single");

  chart
    .tooltip()
    .positionMode("point")
    .position("center-bottom")
    .anchor("center-bottom")
    .offsetX(0)
    .offsetY(5)
    .format("{%SeriesName}: {%Value}{groupsSeparator: }");

  chart.container("container3");

  chart.draw();
});

//  4  //

anychart.onDocumentReady(function () {
  var chartData = {
    title: "Chart Title",
    rows: [
      ["Category1", 1, 9, 6],
      ["Category2", 5, 2, 10],
      ["Category3", 10, 5, 9],
      ["Category4", 5, 4, 3],
    ],
  };
  var chart = anychart.column3d();

  chart.data(chartData);

  chart.animation(true);

  chart.yAxis().labels().format("{%Value}{groupsSeparator: }");

  chart
    .labels()
    .enabled(true)
    .fontColor("#60727b")
    .position("center-top")
    .anchor("center-bottom")
    .format("{%Value}{groupsSeparator: }");
  chart.hovered().labels(true);

  chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

  chart.interactivity().hoverMode("single");

  chart
    .tooltip()
    .positionMode("point")
    .position("center-bottom")
    .anchor("center-bottom")
    .offsetX(0)
    .offsetY(5)
    .format("{%SeriesName}: {%Value}{groupsSeparator: }");

  chart.container("container4");

  chart.draw();
});

$(document).ready(function () {
  var table = $("#mytable4").DataTable({
    bPaginate: false,
    dom: "lfrtip",
  });
});
$(document).ready(function () {
  var table = $("#mytable5").DataTable({
    bPaginate: false,
    dom: "lfrtip",
  });
});
$(document).ready(function () {
  var table = $("#mytable6").DataTable({
    bPaginate: false,
    dom: "lfrtip",
  });
});

$(document).ready(function () {
  var table = $("#mytable7").DataTable({
    bPaginate: false,
    dom: "lfrtip",
  });
});

$(document).ready(function () {
  var table = $("#mytable10").DataTable({
    bPaginate: false,
    dom: "lfrtip",
  });
});

$(document).ready(function () {
  var table = $("#mytable9").DataTable({
    bPaginate: false,
    dom: "lfrtip",
  });
});
document.getElementById("add-x").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay4");
  overlay.style.display = "block";
});

document.getElementById("close2x").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay4");
  overlay.style.display = "none";
});

document.getElementById("add-z2").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay6");
  overlay.style.display = "block";
});

document.getElementById("close2z2").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay6");
  overlay.style.display = "none";
});


document.getElementById("edit-t1").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE1");
  overlay.style.display = "block";
});

document.getElementById("close-E1").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE1");
  overlay.style.display = "none";
});

document.getElementById("edit-t2").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE2");
  overlay.style.display = "block";
});

document.getElementById("close-E2").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE2");
  overlay.style.display = "none";
});

document.getElementById("edit-t3").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE3");
  overlay.style.display = "block";
});

document.getElementById("close-E3").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE3");
  overlay.style.display = "none";
});

document.getElementById("edit-t4").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE4");
  overlay.style.display = "block";
});

document.getElementById("close-E4").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE4");
  overlay.style.display = "none";
});

document.getElementById("edit-t5").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE5");
  overlay.style.display = "block";
});

document.getElementById("close-E5").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE5");
  overlay.style.display = "none";
});

document.getElementById("edit-t6").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE6");
  overlay.style.display = "block";
});

document.getElementById("close-E6").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayE6");
  overlay.style.display = "none";
});

// 

document.getElementById("add-t1").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay1");
  overlay.style.display = "block";
});

document.getElementById("close1").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay1");
  overlay.style.display = "none";
});

document.querySelector(".add-Det").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayDet");
  overlay.style.display = "block";
});

document.getElementById("closeDet").addEventListener("click", () => {
  const overlay = document.querySelector(".overlayDet ");
  overlay.style.display = "none";
});

///
document.getElementById("add-t2").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay2");
  overlay.style.display = "block";
});

document.getElementById("close2").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay2");
  overlay.style.display = "none";
});

document.getElementById("add-t3").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay3");
  overlay.style.display = "block";
});

document.getElementById("close3").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay3");
  overlay.style.display = "none";
});

$(document).on("click", "#clear", function () {
  var inputs = $("input");

  inputs.each(function () {
    if (this.type !== "button" && this.type !== "submit") {
      this.value = "";
    }
  });
});

document.getElementById("add-t5").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay5");
  overlay.style.display = "block";
});

document.getElementById("close-5").addEventListener("click", () => {
  const overlay = document.querySelector(".overlay5");
  overlay.style.display = "none";
});
//
//
//

function saveActiveTab() {
  var activeTab1 = $(".tab-pane.active");
  var activeTab = $(".tab-set.active");
  var tabId = activeTab.attr("href");
  var tabId1 = activeTab1.attr("id");
  localStorage.setItem("activeTab", tabId);
  localStorage.setItem("activeTabC", tabId1);
}

window.onbeforeunload = saveActiveTab;

function getActiveTab() {
  var tabId1 = localStorage.getItem("activeTabC");
  document.querySelectorAll("tab-pane").forEach((e) => {
    console.log(e);
    e.classList.remove("active");
  });
  document.getElementById(tabId1).classList.add("active");

  var tabId = localStorage.getItem("activeTab");
  var activeTab = $(".tab-set[href='" + tabId + "']");
  activeTab.addClass("active");
  activeTab.tab("show");
  var tabContent = $(".tab-content").children(
    ".tab-pane." + activeTab.attr("class")
  );

  var tabIdM = localStorage.getItem("activeTabMain");
  var tabIds = localStorage.getItem("activeTabCont");
  document.querySelectorAll("tab-Dash").forEach((e) => {
    e.classList.remove("active");
  });
  document.getElementById(tabIdM).classList.add("active");
  divs.forEach((d) => {
    if (d.dataset.tabid === tabIds) {
      d.classList.add("active1");
    }
  });
}
window.onload = getActiveTab;

window.onbeforeunload = saveActiveTab;

window.onload = getActiveTab;
// 
// 
// 
// 

$(document).ready(function () {
  var table = $("#mytableSystemLogs").DataTable({
    bPaginate: false,
  });
});

$(document).ready(function () {
  var table = $("#mytableP").DataTable({
    bPaginate: false,
  });
});

// document.getElementById("add-p").addEventListener("click", () => {
//   const overlay = document.querySelector(".overlayP");
//   overlay.style.display = "block";
// });

// document.getElementById("close-p").addEventListener("click", () => {
//   const overlay = document.querySelector(".overlayP");
//   overlay.style.display = "none";
// });

// document.getElementById("add-pe").addEventListener("click", () => {
//   const overlay = document.querySelector(".overlayPE");
//   overlay.style.display = "block";
// });

// document.getElementById("close-pe").addEventListener("click", () => {
//   const overlay = document.querySelector(".overlayPE");
//   overlay.style.display = "none";
// });

function myFunction() {
  event.preventDefault();

  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;

  if (title === "" || description === "") {
    alert("يجب ملء جميع الحقول المطلوبة!");
  } else {
  }
}

// إنشاء زر
var button = document.getElementById("submit-dep");
button.addEventListener("click", myFunction);