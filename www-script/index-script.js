/**
 * 
        @url: http://www.roger-clarke.com
        @Author: Roger Clarke 
        @email: roger@roger-clarke.com
*/

/**
 * 
 */
// function clickOutsideForm() {
//         var modal = document.getElementById('loginform');
//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         };
// }
// /**
//  * 
//  */
// function loginForm() {
//         var modal = document.getElementById('loginform');
//         modal.style.display = 'block';
//         clickOutsideForm();
// }
function unlock() {
    if(document.getElementById('loginform').style.display ==='none'){
        document.getElementById('lock').classList.toggle('fa-lock');
    } else {
        document.getElementById('lock').classList.toggle('fa-lock-open');
    } 
}

function clickOutsideForm() {
    var modal = document.getElementById('loginform');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }  
    };
}

function loginForm() {
    unlock();
    var modal = document.getElementById('loginform');
    modal.style.display = 'block';
    clickOutsideForm();
}

function GetClock(){
        var d=new Date();
        var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
        var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
        var greet="";

        if(nhour==0){ap=" AM";nhour=12;}
        else if(nhour<12){ap=" AM";}
        else if(nhour==12){ap=" PM";}
        else if(nhour>12){ap=" PM";nhour-=12;}

        if(ap===" AM"){greet="Morning";} 
        if (ap===" PM") {greet="Day";}

        if(nmin<=9) nmin="0"+nmin; // put zeros in front of single digit numbers
        if(nsec<=9) nsec="0"+nsec;

        var clocktext= ""+nhour+":"+nmin+":"+nsec+ap+"";
        var datetext = ""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
        var mygreeting = "Good " + greet + ", Roger.";
        document.getElementById('datebox').innerHTML=datetext;
        document.getElementById('clockbox').innerHTML=clocktext;
        document.getElementById('greeting').innerHTML=mygreeting;

        var t = setTimeout(GetClock, 500);
    }
    var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

    function GetClock(){
        var d=new Date();
        var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
        var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
        var greet="";

        if(nhour==0){ap=" AM";nhour=12;}
        else if(nhour<12){ap=" AM";}
        else if(nhour==12){ap=" PM";}
        else if(nhour>12){ap=" PM";nhour-=12;}

        if(ap===" AM"){greet="Morning";} 
        if (ap===" PM") {greet="Day";}

        if(nmin<=9) nmin="0"+nmin; // put zeros in front of single digit numbers
        if(nsec<=9) nsec="0"+nsec;
    }