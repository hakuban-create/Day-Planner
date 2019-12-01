$(document).ready(function(){


var currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
$("#current-time").html(currentTime);
setColors();


setInterval(function(){
    currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#current-time").html(currentTime);

    if(moment().startOf('hour').fromNow()=="00 minutes ago"){
        setColors();
    }
    
},1000);

function setColors(){
    var currentTime=moment().hour();
    var currentTimeIndex=currentTime-9;

    for(var i=0; i<9; i++){
        if(i<currentTimeIndex){
            $("textarea").eq(i).css("background-color","#868585a6");
        }else if(i==currentTimeIndex){
            $("textarea").eq(i).css("background-color","#ea5b5b");
        }else{
            $("textarea").eq(i).css("background-color","rgb(143, 241, 141)");
        }
    }
}




});
