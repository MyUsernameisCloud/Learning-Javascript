function myTime (){
t=document.getElementById("nowTime");
n = new Date().valueOf();
n=n/10; // second
n = n/60; //min
n = n/60; // hour
n = n / 24; //day
n = n/365; //year 
t.innerHTML = n-2019;
}