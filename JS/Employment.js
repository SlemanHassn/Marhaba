$("#mytable").DataTable();

$("#group").on("change", function () {
  let group = document.getElementById("group").value;
  if (group != "no") {
    $("#mytable").DataTable().destroy();
    $("#mytable").DataTable({
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
    $("#mytable").DataTable().destroy();

    $("#mytable").DataTable();
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
    $("#mytable tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(8)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

// opening state filter
$(document).ready(function () {
  $("#opening-state").change(function () {
    var selectedValue = $(this).val();
    $("#mytable tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(9)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

// grouparment filter
$(document).ready(function () {
  $("#grouparment").change(function () {
    var selectedValue = $(this).val();
    $("#mytable tr").show();
    if (selectedValue !== "all") {
      $("table tbody tr")
        .filter(function () {
          return $(this).find("td:nth-child(2)").text() !== selectedValue;
        })
        .hide();
    }
  });
});

//  clear filter
$(document).ready(function () {
  $("#clear").click(function () {
    return $("#mytable tr").show();
  });
});
document.getElementById("clear").addEventListener("click", function () {
  const combobox = document.querySelectorAll("select");

  combobox.forEach((com) => (com.value = com.defaultValue));
});

$("#date").on("change", function () {
  var date = $(this).val();

  $("#mytable").DataTable().search(date).draw();
});
$("#clear").on("click", function () {
  $("#date").val("");
});
