
var allSaveButtons = $('.saveBtn')  // these are all the save buttons
var textAreas = $('.textColumn');  // these are my text fields
var hours = ["9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm, 5pm"]   // these are my hour fields
console.log (textAreas)
console.log(hours)
var hourIndex 


var toBeSaved = []                  // empty array for time and task to be saved
var storageArr = JSON.parse(localStorage.getItem(" ")) || []    // from locStorage to page upon load

$('.row').each( function (){
    var textId = $(this).children('.textColumn').attr('id')
    var task = localStorage.getItem(textId);
    $ (this).children('.textColumn').val(task)
})

allSaveButtons.on('click', function (event){
 // this is my event listener to put the time and text into local storage
var textValue = $(this).siblings('.textColumn').val()
var textId = $(this).siblings('.textColumn').attr('id')
// storageArr.push(textValue)
// localStorage.setItem('task', JSON.stringify(storageArr))
localStorage.setItem(textId, textValue)

    console.log (textId)
            

    
})

function getXandTxt(){
    var UserToDo = textColumn;  // this function is to obtian the hour list(9am-5pm) as well as the text enter by user to be saved.
    var hours =  hourColumn;
    var scheduleObject = {
        Time:hours,
        Task:UserToDo
    }
    storageArr.push(schduleObject)
    

    console.log (scheduleObject)
}


var todaysDate = new Date();
var monthDay = { weekday: "long", month: "long", day: "numeric" };
$("#currentDay").text(todaysDate.toLocaleDateString(undefined, monthDay));
function changeColor() {
    var timeTracker = new Date().getHours();
         function pastElement(i, timeblockEl) {
            return i + 9 < timeTracker;
         }
        function presentElement(i, timeblockEl) {
            return i + 9 === timeTracker;
         }
        function futureElement(i, timeblockEl) {
            return i + 9 > timeTracker;
        }
        $(".time-block")
            .filter(pastElement)
            .addClass("past")
            .removeClass("present future");
        $(".time-block")
            .filter(presentElement)
            .addClass("present")
            .removeClass("past future");
        $(".time-block")
            .filter(futureElement)
            .addClass("future")
            .removeClass("present past");
}
changeColor();
setInterval(changeColor, 1000);
