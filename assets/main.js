// variable to store and loop through scheduler
var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
]

//show the date and time from the present moment
function getHeaderDate() {
    const timeNow = moment().format('dddd, MMMM Do');
    $("#currentDay").text(timeNow);
    console.log(timeNow);
}

getHeaderDate();

// creates visuals for the form
myDay.forEach(function(thisHour) {
 // makes timeblocks
 var hourRow = $("<form>").attr({
     "class": "row"

    });
    
    $(".container").append(hourRow);

     // creates time field
     var hourIndex = $("<div>")
     .text(`${thisHour.hour}${thisHour.meridiem}`)
     .attr({
         "class": "col-md-2 hour"
 });

 // creates area to add events
 var eventEntry = $("<div>")
    .attr({
        "class": "col-md-9 description p-0"
    });
    //shows if event is past, present or future
    var eventData = $("<textarea>");
    eventEntry.append(eventData);
    eventData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        eventData.attr ({
            "class": "past",
        })
    } else if (thisHour.time === moment().format("HH")) {
        eventData.attr ({
            "class": "present"
        })
    } else if (thisHour.time === moment().format("HH")) {
        eventData.attr({
            "class": "future"
        })
    }

    // Create save button   

let saveBtn = $("<i class='far fa-save fa-lg'></i>")
var savePlan = $("<button>")
.attr({
    "class": "col-md-1 saveBtn"
});
savePlan.append(saveBtn);
hourRow.append(hourIndex, eventEntry, savePlan);
})


// let nowHour24 = moment().format('H');
// console.log(nowHour24)
// let nowHour12 = moment().format('h');
// console.log(nowHour12)

// if (test) {
//     nowHour24 = 13;
//     nowHour12 = 1;
// }

//using a save icon to save the event in the daily calendar
// const saveIcon = $("#display-icon")

// // Get the stored items from the to-do list from local storage
// let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
// if (test) {console.log(storedPlans)}

// //If the plans were retrieved from local storage, update the plan array to it

// //set variable referencing planner element
// let $plannerDiv = $("#formPlanner");
// $plannerDiv.empty();


// // build the calendar by row for a fixed number of hours
// for (let hour =9; hour <=17; hour ++) {
//     let index = hour -9;
// }

// // build the row components in the calendar element

// let $rowDiv =$("<div>");
// $rowDiv.addClass("row");
// $rowDiv.addClass("plannerRow");
// $rowDiv.attr("hour-index", hour
