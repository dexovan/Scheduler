$(document).ready(function(){

var date = {

  monthsArray: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  init: function() {
    var fullDate = new Date();
    this.dateParsed(fullDate);

    this.view(fullDate.getMonth());
  },
  stringifyMonth: function(monthNumber) {
    var monthName = this.monthsArray[monthNumber]
    return monthName
  },
  dateParsed: function(fullDate) {
    var fullDate = new Date();
    var monthNumber = fullDate.getMonth();
    var dayNumber = fullDate.getDate();
    var calanderYear = fullDate.getFullYear();
    this.stringifyMonth(monthNumber)
    return calanderYear
  },
  view: function(monthName) {
    console.log(this.stringifyMonth(monthName));
  }
}.init();


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




// $("#tomorrow").click(function(){
// var date = new Date();
// var 





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



window.onload = function(){


};





})  // document ready 