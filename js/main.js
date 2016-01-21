$(document).ready(function() {
    updateClock();
    setInterval('updateClock()', 500 );
});

var dayLabels = ['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'];

function updateClock() {
    //Current Time Variables
    var currentTime = new Date ( );
    var currentWeekDay = currentTime.getDay();
    var currentDay = currentTime.getDate();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    //Zerolead the minutes for display
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

    jQuery("#clock-weekday").html(dayLabels[currentWeekDay]);
    jQuery("#clock-day").html(currentDay);
    jQuery("#clock-hours").html(currentHours);
    jQuery("#clock-hours").html(currentHours);
    jQuery("#clock-minutes").html(currentMinutes);
};
