//Display Date and time 
$(document).ready(function() {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("MMM, DD YYYY - hh:mm:ss a"));
});

Var timeTrackObject =

var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

var tomorrow = moment().add(1, "day").format("dddd, MM-D-YYYY [at] hh:mm:ss A");
console.log(tomorrow);

var pastDate = moment("12-01-1999", "MM-DD-YYYY").format("dddd, MM/DD/YY");
console.log(pastDate);

var auditTask = function(taskEl) {
  // to ensure element is getting to the function
  console.log(taskEl);
};

function mySave() {
  var content = localStorage.getItem("content");

  document.getElementById("textarea").value = content;
}

//Style Reference for Present
var presentHour= moment().format("hA");
$(".hour:contains(" + presentHour + ")").addClass("present");

//Style Reference for past
let pastHour = moment().format("hA");
$(".hour:contains(" + pastHour + ")").addClass("past");

//Style Reference for future
var futuretHour = moment().format("hA");
$(".hour:contains(" + futureHour + ")").addClass("future");


var saveTasks = function() {
  localStorage.setItem("task", JSON.stringify(tasks))
}

let timeTrackObject = {};
  //2. Checks if local storage exists, if it doesn't load preset data to array.
  if (localStorage.getItem('timeTrackObject')) {
      timeTrackObject = JSON.parse(localStorage.getItem('timeTrackObject'));
  }else{
    timeTrackObject = {
      'nine': { time: "9", value: ""},
      'ten':{ time: "10", value: ""},
      'eleven':{ time: "11", value: ""},
      'twelve':{ time: "12", value: ""},
      'thriteen':{ time: "13", value: ""},
      'fourteen':{ time: "14", value: ""},
      'fifthteen':{ time: "15", value: ""},
      'sixteen':{ time: "16", value: ""},
      'seventeen':{ time: "17", value: ""}
    };
  }

  var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl).find("span").text().trim();
    // ensure it worked
    console.log(date); 
  
    // convert to moment object at 5:00pm
    var time = moment(date, "L").set("hour", 17);
    // this should print out an object for the value of the date variable, but at 5:00pm of that date
    console.log(time);
  
  }

  document.getEventListner("click", saveTasks);