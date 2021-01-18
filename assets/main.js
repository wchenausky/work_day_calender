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

//saves data entry to localStorage
function saveSchedule() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
    console.log(myDay)
}

// sets entered data in local storage to view
function displaySchedule() {
    myDay.forEach(function (_thisHour) {
        console.log(_thisHour.id)
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
        console.log(_thisHour.reminder)
    })
}

function storage() {
    var savedDay = JSON.parse(localStorage.getItem("myDay"));
    console.log(savedDay)
    if (savedDay != null) {
        myDay = savedDay;
        console.log(myDay)
    }
    displaySchedule();

}


displaySchedule();


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
        hourRow.attr ({
            "class": "row past",
        })
    } else if (thisHour.time === moment().format("HH")) {
       hourRow.attr ({
            "class": "row present"
        })
    } else if (thisHour.time === moment().format("HH")) {
        hourRow.attr({
            "class": "row future"
        })
    }

    // Create save button   
let saveButton = $("<i class='far fa-save fa-lg'></i>")
var saveEvent = $("<button>")
.attr({
    "class": "col-md-1 saveBtn"
});
saveEvent.append(saveButton);
hourRow.append(hourIndex, eventEntry, saveEvent);
})

// Loads saved localStorage data
storage();

// saved data used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children("textarea").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children("textarea").val();
    console.log(saveIndex);
    saveSchedule();
    displaySchedule();

})

