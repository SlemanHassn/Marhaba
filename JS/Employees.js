let filter = document.querySelector(".sidebar-box .filter");
let sidebar = document.querySelector(".sidebar-box");
filter.onclick = function () {
  sidebar.classList.toggle("open");
};

// new DataTable("#mytableE");
$(document).ready(function () {
  var table = $("#mytableE").DataTable({
    bPaginate: true,
    iDisplayLength: 100,
  });
});

// Duration Trial Period

$(document).ready(function () {
  $("#duration").change(function () {
    var selectedValue = $(this).val();
    $("#mytableE tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(6)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

// Progress Status
$(document).ready(function () {
  $("#progress").change(function () {
    var selectedValue = $(this).val();
    $("#mytableE tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(18)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

// Employee Status
$(document).ready(function () {
  $("#employee-status").change(function () {
    var selectedValue = $(this).val();
    $("#mytableE tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(19)").text() !== selectedValue;
        })
        .hide();
    }
  });
});
// deparment filter
$(document).ready(function () {
  $("#deparment").change(function () {
    var selectedValue = $(this).val();
    $("#mytableE tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(5)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

// clear filter
$(document).ready(function () {
  $("#clear").click(function () {
    return $("#mytableE tr").show();
  });
});

document.getElementById("clear").addEventListener("click", function () {
  const combobox = document.querySelectorAll("select");

  combobox.forEach((com) => (com.value = com.defaultValue));
  document.getElementById("searchField").value = "";
  document.getElementById("searchField1").value = "";
});

// filter Name
$(document).ready(function () {
  $("#searchField1").keyup(function () {
    var selectedValue = $(this).val();
    $("#mytableE tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(2)").text() !== selectedValue;
        })
        .hide();
    }

    $("#searchField1").on("keyup", function () {
      if ($(this).val() === "") {
        $("#mytableE tr").show();
      }
    });
  });
});

// Filter  ID
$(document).ready(function () {
  $("#searchField").keyup(function () {
    var selectedValue = $(this).val();
    $("#mytableE tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:first-child").text() !== selectedValue;
        })
        .hide();
    }

    $("#searchField").on("keyup", function () {
      if ($(this).val() === "") {
        $("#mytableE tr").show();
      }
    });
  });
});


