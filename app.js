$(document).ready(function(){

   var monthsArray = ["January", "February","March","April","May","June","July","August", "September", "October", "November","December" ]
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonthNumber = currentDate.getMonth();
    var currentDayNumber = currentDate.getDay();
   
 
   var suffix = function (currentDayNumber) {
        var j = currentDayNumber % 10,
            k = currentDayNumber % 100;
            if (j == 1 && k != 11) {
                return currentDayNumber + "st";
            }
            if (j == 2 && k != 12) {
                return currentDayNumber + "nd";
            }
            if (j == 3 && k != 13) {
                return currentDayNumber + "rd";
            }
               return currentDayNumber + "th";
            }


    $('#yearMonth').html(monthsArray[currentMonthNumber] + ' ' + suffix(currentDayNumber) + ' ' + currentYear);

     
  


var daysOfInMonth = function(year, month){
    var numberOfDays = new Date(year, month, 0);
    return numberOfDays.getDate();
}

$("#addEvent").click(function(){
    if($('#addToCalander').val() == ''){
        console.log("Please enter an event")
        $('#addToCalander').val('');
    } else {
      var addedEvent = $('#addToCalander').val()
      $('#addToCalander').val('');
    }
})


// var daysOfTheWeek = {
//         init: function() {
//             this.startDate();
//         },
//         startDate: function() {
//             var startDate = new Date()
//             var monthNum = startDate.getMonth()
//             this.nextSevenDays(startDate, 7)       
//         }, 
//         nextSevenDays: function(startDate, DaysToAdd){
//           var arDates = [];
//           var DayAsString = ['Sunday','Monday','Tuesday','Wednesday','Thursday',
//           'Friday','Saturday']
//             for(var i = 0; i <= DaysToAdd; i++){
//                  var currentDate = new Date();
//                  currentDate.setDate(startDate.getDate() + i);
//                  arDates.push(currentDate.getDate() + ' ' +DayAsString[currentDate.getDay()] )
//             }
//      }
// };



// daysOfTheWeek.init()



window.onload = function(){
  
};





})  // document ready 