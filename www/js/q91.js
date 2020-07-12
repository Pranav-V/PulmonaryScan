document.addEventListener('deviceready', init());
var can = true;
function init()
{
  document.getElementById("continue").style.display = "none";
  document.getElementById("re").addEventListener('click',yes);
  document.getElementById("re").addEventListener('click',dot);

}
function yes()
{
  can = false;
}
function dot()
{
  document.getElementById("re").style.display = "none";
  var countDownDate = new Date();
  countDownDate.setSeconds(countDownDate.getSeconds() + 1);
  var countDownDate = countDownDate.getTime();
// Update the count down every 1 second
  var x = setInterval(function(){
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var milli = (((distance % (1000 * 60)) / 1000)*1000)%1000;
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = seconds + "s "; 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME EXPIRED";

    document.getElementById("continue").style.display = "inline-block";
  }

  // Get today's date and time

}, 1);
}
