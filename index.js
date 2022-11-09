function startTime(){
    let today=new Date();
    let hr=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    ap=(hr<12)? "<span>AM</span>":"<span>PM</span>";
    hr=(hr==12)? 12:hr;
    hr=(hr>12)? hr-12:hr;

    hr=checkTime(hr);
    min=checkTime(min);
    sec=checkTime(sec);
    document.getElementById("clock").innerHTML=hr+" : "+min+" : "+sec+" "+ap;
    
    let time=setTimeout(function(){startTime()},500);

}
function checkTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}