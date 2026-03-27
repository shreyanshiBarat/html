function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h <10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + h + "!" + "  "+ session;
    document.getElementById("MyClockDisplay").innrText = time;
    setTimeout(showTime, 1000);
}

showTime();