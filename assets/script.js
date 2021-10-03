
var allSaveButtons = $('.saveBtn')  // these are all the save buttons linked as one
var textAreas = $('.textColumn');  // these are my text fields to incorparate to local storage


//Function for retrieving scheduled item from local storage
$('.row').each( function (){
    var textId = $(this).children('.textColumn').attr('id')
    var task = localStorage.getItem(textId);
    $ (this).children('.textColumn').val(task)
})

//Eventlistener for saving scheduled item to local storage
allSaveButtons.on('click', function (event){
    var textValue = $(this).siblings('.textColumn').val()
    var textId = $(this).siblings('.textColumn').attr('id')

        localStorage.setItem(textId, textValue)
    
})

//Function to retrieve time and date, link to page and other functions
var todaysDate = new Date();
var monthDay = { weekday: "long", month: "long", day: "numeric" };
$("#currentDay").text(todaysDate.toLocaleDateString(undefined, monthDay));
    function changeColor() {
        var timeTracker = new Date().getHours();
            function pastElement(i) {
            return i + 9 < timeTracker;
            }
            function presentElement(i) {
            return i + 9 === timeTracker;
            }
            function futureElement(i) {
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
