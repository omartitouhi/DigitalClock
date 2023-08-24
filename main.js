$(document).ready(function (){
    function showTime(){
        //get current time date
        var date = new Date();

        //get hours min and sec
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        //AM, PM
        var session = "AM";

        //time behavior
        if(hours == 0){
            hours = 12;
        }

        if(hours >=12){
            session = "PM";
        }

        if(hours > 12){
            hours = hours-12;
        }

        hours = hours < 10 ? "0" + hours :hours;
        min = min < 10 ? "0" + min :min;
        sec = sec < 10 ? "0" + sec :sec;

        //set the variable to the span
        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#period").text(session);

        //change the time in every second
        setTimeout(showTime,1000);
    }
    showTime();
})