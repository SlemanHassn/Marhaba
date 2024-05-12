document.getElementById("upload").addEventListener("click", function () {
  var input = document.createElement("input");
  input.type = "file";
  input.click();
  input.addEventListener("change", function () {
    const filepath = input.files[0].path;
    console.log(input.files);

    document.getElementById("filename").value = filepath;
  });
});
