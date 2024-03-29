$(document).ready(function(){


var currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
$("#current-time").html(currentTime);

displayEntries();
setColors();


setInterval(function(){
    currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#current-time").html(currentTime);

    if(moment().startOf('hour').fromNow()=="00 minutes ago"){
        setColors();
    }
    
},1000);

function displayEntries(){
    for(var i=0; i<localStorage.length; i++){
        if(localStorage.key(i).startsWith("dayPlanner")){
            var key=localStorage.key(i);
            var index=parseInt(key.slice(key.indexOf("_")+1));
            console.log("index: "+index);
            $("textarea").eq(index).text(localStorage.getItem(key));
    }
    }
}

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

$("button").on('click',function(){
var time=$(this).parent().parent().children().attr("id");
var value=$(this).parent().parent().children().val();
localStorage.setItem("dayPlanner_"+time,value);
});



});
