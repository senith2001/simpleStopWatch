

var seconds = 0;
var delts = 0;

var check = true;

var ltime = document.getElementById("hh1");
var rtime = document.getElementById("hh2");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
write();

function write(){
    if(delts==99){
        seconds+=1;
        delts =0;
    }
    ltime.innerHTML = `${seconds}`;
    rtime.innerHTML = `${delts}`;
  
    delts+=1;
  
}
function startListner(){
    
    if(check){  
         
         interval = setInterval(write,10);
    }
   check = false;
 
}


start.addEventListener("click",startListner);
stop.addEventListener("click",() => {clearInterval(interval);check = true;});
reset.addEventListener("click",() => {seconds = 0;delts=0; clearInterval(interval);write();check = true;});




    




