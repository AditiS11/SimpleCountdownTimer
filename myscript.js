function getTimeRemaining(endtime){//Endtime return the time remaining in ms
var t=Date.parse(endtime)-Date.parse(new Date());
var seconds=Math.floor((t/1000)%60);
var minutes=Math.floor((t/1000/60)%60);
var hours=Math.floor((t/(1000*60*60))%24);
var days=Math.floor(t/(1000*60*60*24));

return{
    'total':t,
    'days':days,
    'hours':hours,
    'minutes':minutes,
    'seconds':seconds,

}

}

function initializeClock(id,endtime){
    var clock=document.getElementById(id);
    var daysSpan=clock.querySelector('.days');
    var hoursSpan=clock.querySelector('.hours');
    var minutesSpan=clock.querySelector('.minutes');
    var secondsSpan=clock.querySelector('.seconds');

    function updateClock(){
        var t=getTimeRemaining(endtime);
        daysSpan.innerHTML=t.days;
        hoursSpan.innerHTML=('0'+t.hours).slice(-2);//Extracts two characters from ned of string, end as a negative index is given
        minutesSpan.innerHTML=('0'+t.minutes).slice(-2);
        secondsSpan.innerHTML=('0'+t.seconds).slice(-2);

        if(t.total<=0){
            clearInterval(timeinterval);
        }
    



    }

    updateClock();
    var timeinterval=setInterval(updateClock,1000)//Update the clock every milisecond
    
}

var deadline=new Date(Date.parse(new Date())+7*24*60*60*1000);
initializeClock('clockdiv',deadline);
//Date.parse method parses the date as a string and returns the time in ms between Date string and the mindnight of Jan 1 1970