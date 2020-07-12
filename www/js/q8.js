document.addEventListener('deviceready', init());
function init()
{
  var storage = window.localStorage;
  storage.setItem("q8",-1);
  document.getElementById("y").addEventListener('click',yes);
  document.getElementById("n").addEventListener('click',no);
  document.getElementById("i").addEventListener('click',no);
  document.getElementById("continue").addEventListener('click',next);
}
function yes()
{
  var storage = window.localStorage;
  storage.setItem("q8",1);
}
function no()
{
  var storage = window.localStorage;
  storage.setItem("q8",0);
}
function next()
{
  var storage = window.localStorage;
  if(storage.getItem("q8")==-1)
  {
    return;
  }
  window.location = "q9.html";
}
