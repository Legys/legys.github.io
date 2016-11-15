/**
 * Created by legys on 14.11.2016.
 */
var deadline = new Date();
deadline.setMinutes(deadline.getMinutes() + 40);
console.log(deadline);

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    console.log(t);
    console.log(seconds)
    console.log(minutes)
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

getTimeRemaining(deadline).minutes;
function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);

        clock.innerHTML =
        '' + t.hours + '' +
        ':' + t.minutes + '' +
        ':' + t.seconds;

       /* clock.innerHTML = 'days: ' + t.days + ' '
            + 'hours: ' + t.hours + ' ' +
            'minutes: ' + t.minutes + ' ' +
            'seconds: ' + t.seconds;*/

        if(t.total<=0){
            clearInterval(timeinterval);
        }
    },1000);
}
initializeClock('clockdivMain', deadline);
initializeClock('clockdivBottom', deadline);

