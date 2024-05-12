function calculateDays() {
  // Get the values of the two date input fields
  var fromDate = document.getElementById("from-date").value;
  var toDate = document.getElementById("To-date").value;

  // Convert the values to dates
  var fromDateObj = new Date(fromDate);
  var toDateObj = new Date(toDate);

  // Get the month from each date
  var fromDateMonth = fromDateObj.getMonth();
  var toDateMonth = toDateObj.getMonth();

  // Calculate the difference between the months
  var monthDifference = toDateMonth - fromDateMonth;

  // Check if the dates are equal
  if (fromDateObj.getTime() === toDateObj.getTime()) {
    daysDifference = 0;
  } else {
    // Calculate the difference between the days
    var daysDifference = Math.abs(toDateObj.getDate() - fromDateObj.getDate());

    // Add the difference between the months to the number of days
    daysDifference += monthDifference * 30;
  }

  // Set the value of the "Number Of Days" input field
  document.getElementById("number-of-days").value = daysDifference;
}
