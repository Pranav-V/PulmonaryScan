document.addEventListener('deviceready', init());
function init()
{
  var storage = window.localStorage;
  storage.setItem("q9",-1);
  document.getElementById("y").addEventListener('click',yes);
  document.getElementById("n").addEventListener('click',no);
  document.getElementById("continue").addEventListener('click',next);
}
function yes()
{
  var storage = window.localStorage;
  storage.setItem("q9",0);
}
function no()
{
  var storage = window.localStorage;
  storage.setItem("q9",2);
}
function next()
{
  var storage = window.localStorage;
  if(storage.getItem("q9")==-1)
  {
    return;
  }
  window.location = "results.html";
}
