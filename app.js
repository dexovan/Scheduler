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
                 arDates.push(currentDate.getDate() + ' ' +DayAsString[currentDate.getDay()] )
            }
            console.log(arDates)

        },
        Render: function() {

        }

       
};






daysOfTheWeek.init()



})  // document ready 