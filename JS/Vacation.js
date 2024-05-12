$("#mytableV").DataTable();

$("#group").on("change", function () {
  let group = document.getElementById("group").value;
  if (group != "no") {
    $("#mytableV").DataTable().destroy();
    $("#mytableV").DataTable({
      columnDefs: [{ visible: false, targets: group }],
      order: [[group, "asc"]],
      displayLength: 25,
      drawCallback: function (settings) {
        var api = this.api();
        var rows = api.rows({ page: "current" }).nodes();
        var last = null;

        api
          .column(group, { page: "current" })
          .data()
          .each(function (group, i) {
            if (last !== group) {
              $(rows)
                .eq(i)
                .before(
                  '<tr class="group"><td colspan="11">' + group + "</td></tr>"
                );

              last = group;
            }
          });
      },
    });
  } else if (group === "no") {
    $("#mytableV").DataTable().destroy();

    $("#mytableV").DataTable();
  }
});

$(document).ready(function () {
  var table = $("#mytableVV").DataTable({
    bPaginate: true,
    iDisplayLength: 100,
  });
});

let filter = document.querySelector(".sidebar-box .filter");
let sidebar = document.querySelector(".sidebar-box");
filter.onclick = function () {
  sidebar.classList.toggle("open");
};

// Filter  ID
$(document).ready(function () {
  $("#searchField").keyup(function () {
    var selectedValue = $(this).val();
    $("#mytableVV tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:first-child").text() !== selectedValue;
        })
        .hide();
    }

    $("#searchField").on("keyup", function () {
      if ($(this).val() === "") {
        $("#mytableVV tr").show();
      }
    });
  });
});


// Filter  Name
$(document).ready(function () {
  $("#searchField1").keyup(function () {
    var selectedValue = $(this).val();
    $("#mytableVV tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(3)").text() !== selectedValue;
        })
        .hide();
    }

    $("#searchField1").on("keyup", function () {
      if ($(this).val() === "") {
        $("#mytableVV tr").show();
      }
    });
  });
});




$(document).ready(function () {
  $("#staff-leave-status").change(function () {
    var selectedValue = $(this).val();
    $("#mytableVV tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(5)").text() !== selectedValue;
        })
        .hide();
    }
  });
});




// deparment filter
$(document).ready(function () {
  $("#staff-dep").change(function () {
    var selectedValue = $(this).val();
    $("#mytableVV tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(4)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

// clear filter
$(document).ready(function () {
  $("#clear").click(function () {
    return $("#mytableVV tr").show();
  });
});

document.getElementById("clear").addEventListener("click", function () {
  const combobox = document.querySelectorAll("select");

  combobox.forEach((com) => (com.value = com.defaultValue));
  document.getElementById("searchField").value = "";
  document.getElementById("searchField1").value = "";
});

// filter Name



