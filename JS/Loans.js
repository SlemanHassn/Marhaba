$("#mytableLoa").DataTable();

$("#group").on("change", function () {
  let group = document.getElementById("group").value;
  if (group != "no") {
    $("#mytableLoa").DataTable().destroy();
    $("#mytableLoa").DataTable({
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
    $("#mytableLoa").DataTable().destroy();

    $("#mytableLoa").DataTable();
  }
});

let filter = document.querySelector(".sidebar-box .filter");
let sidebar = document.querySelector(".sidebar-box");
filter.onclick = function () {
  sidebar.classList.toggle("open");
};

$(document).ready(function () {
  $("#state").change(function () {
    var selectedValue = $(this).val();
    $("#mytableLoa tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(8)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

$(document).ready(function () {
  $("#paidstatus").change(function () {
    var selectedValue = $(this).val();
    $("#mytableLoa tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(8)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

$(document).ready(function () {
  $("#loan-type").change(function () {
    var selectedValue = $(this).val();
    $("#mytableLoa tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(4)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

//  clear filter
$(document).ready(function () {
  $("#clear").click(function () {
    return $("#mytableLoa tr").show();
  });
});
document.getElementById("clear").addEventListener("click", function () {
  const combobox = document.querySelectorAll("select");

  combobox.forEach((com) => (com.value = com.defaultValue));
  document.getElementById("searchField").value = "";
  document.getElementById("searchField1").value = "";
});

$(document).ready(function () {
  $("#searchField").keyup(function () {
    var selectedValue = $(this).val();
    $("#mytableF tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:first-child").text() !== selectedValue;
        })
        .hide();
    }

    $("#searchField").on("keyup", function () {
      if ($(this).val() === "") {
        $("#mytableF tr").show();
      }
    });
  });
});

$(document).ready(function () {
  $("#searchField1").keyup(function () {
    var selectedValue = $(this).val();
    $("#mytableF tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(2)").text() !== selectedValue;
        })
        .hide();
    }

    $("#searchField1").on("keyup", function () {
      if ($(this).val() === "") {
        $("#mytableF tr").show();
      }
    });
  });
});
