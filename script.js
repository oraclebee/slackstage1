const clock = function (){
    const now = new Date();
    const weekDay = ['sun', 'mon', 'tues','wed','thurs','fri','sat'];
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const d = weekDay[now.getDay()];
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    

    
    let TOD;
    if (hour <= 12 && hour < 24){
        TOD = "AM";
    } else {
        TOD = "PM";
    } 
    if (second < 10){
        s = "0" + second;
    }
    if (minute < 10){
        m = "0" + minute;
    }
    // var currentTime = hour +':'+ minute +':'+ second + TOD;
    var currentTime = `${hour}:${minute}:${second}:${TOD}`;
    document.getElementById('currentTimeUTC').innerHTML = currentTime; 
    
    var currentDate = `${year}-${month}-${day}    ${d}`;
    document.getElementById('currentDay').innerHTML = currentDate; 
}
