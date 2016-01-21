$(document).ready(function() {
    updateClock();
    setInterval('updateClock()', 500 );
});

function updateClock() {
    //Current Time Variables
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    //Zerolead the minutes for display
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

    jQuery("#clock-hours").html(currentHours);
    jQuery("#clock-minutes").html(currentMinutes);

};
