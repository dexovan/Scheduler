$(document).ready(function(){


var getCurrentYearMonthDay = (function() {

    var months = ["January", "February","March","April","May","June","July","August", "September", "October", "November","December" ]
    var date = new Date();
    var year = date.getFullYear();
    var monthNum = date.getMonth();
    var dayNum = date.getDay();
   
    $('#yearMonth').html(months[monthNum] + ' ' + year);

    function ordinal_suffix_of(dayNum) {
        var j = dayNum % 10,
            k = dayNum % 100;
            if (j == 1 && k != 11) {
                return dayNum + "st";
            }
            if (j == 2 && k != 12) {
                return dayNum + "nd";
            }
            if (j == 3 && k != 13) {
                return dayNum + "rd";
            }
               return dayNum + "th";
            }

     $('#date').html(ordinal_suffix_of(dayNum))
   
}());



var daysOfInMonth = function(year, month){
    var numberOfDays = new Date(year, month, 0);
    return numberOfDays.getDate();
}

// $("#addEvent").click(function(){
//     if($('#addToCalander').val() == ''){
//         console.log("Please enter an event")
//     } else {
//       var addedEvent = $('#addToCalander').val()
//     }
// })


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

        }
       
};






daysOfTheWeek.init()



})  // document ready 