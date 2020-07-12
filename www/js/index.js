var color = "blue";

document.addEventListener('deviceready', init());

function init()
{
  document.getElementById("b").addEventListener('click', load1);
  document.getElementById("s").addEventListener('click',sober);
  document.getElementById("t").addEventListener('click',teambio);
  document.getElementById("e").addEventListener('click',load2);
  document.getElementById("p").addEventListener('click',load3);
  document.getElementById("se").addEventListener('click',setting);
  document.getElementById("co").addEventListener('click',load5);
  main();

}
function setting()
{
  window.location = "setting.html";
}
function load5()
{
  window.location = "loading5.html"; 
}
function sober()
{
  var storage = window.localStorage;
  if(storage.getItem("which")!=null)
  {
    window.location = "sober.html";
  }
  else
  {
    window.location = "loading4.html";
  }
}
function load1()
{
  window.location = "loading1.html";
}
function load2()
{
  window.location = "loading2.html";
}
function teambio()
{
  window.location = "team.html";
}
function load3()
{
  window.location = "loading3.html";
}
function contact()
{

  var ref = window.open("https://sites.google.com/view/pulmonaryscan/home?read_current=1");
}
function main()
{
  console.log("hi");
}
