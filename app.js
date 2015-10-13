$(document).ready(function(){

var getCurrentYearAndMonth = function(){
    var date = new Date();
    var year = date.getFullYear();
    var monthNum = date.getMonth();
    convertMonthTostring(monthNum)
    return year
}

var daysOfMonth = function(year, month){
    var numberOfDays = new Date(year, month, 0);
    return numberOfDays.getDate();
}

$("#addEvent").click(function(){
    if($('#addToCalander').val() == ''){
        console.log("Please enter an event")
    } else {
      var addedEvent = $('#addToCalander').val()
    }
})

 // convertMonthTostring: function(monthNum) {
 //            var monthsStringArray = ["January", "February" ,"March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
 //                var name = monthsStringArray[monthNum]
 //                return name 
 //        }



var daysOfTheWeek = {
        init: function() {
            this.startDate();
        },
        startDate: function() {
            var startDate = new Date()
            var monthNum = startDate.getMonth()
            this.nextSevenDays(startDate, 7)       
        }, 
        nextSevenDays: function(startDate, DaysToAdd){
          var arDates = [];
          var DayAsString = ['Sunday','Monday','Tuesday','Wednesday','Thursday',
          'Friday','Saturday']
            for(var i = 0; i <= DaysToAdd; i++){
                 var currentDate = new Date();
                 currentDate.setDate(startDate.getDate() + i);
                 arDates.push(currentDate.getDate() + ' ' + DayAsString[currentDate.getDay()] )
            }
            console.log(arDates)

        },
        Render: function() {

        }

       
};



// var d = new Date();
// var weekday = new Array(7);
// weekday[0]=  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];




daysOfTheWeek.init()



})  // document ready 