document.addEventListener('deviceready', init());
var which = "";
function init()
{
  document.getElementById("cigarettes").style.display = "none";
  document.getElementById("vape").style.display = "none";
  document.getElementById("c").addEventListener('click',cigs);
  document.getElementById("v").addEventListener('click',vape);
  document.getElementById("b").addEventListener('click',both);
  document.getElementById("continue").addEventListener('click', sober);
}
function cigs()
{
  document.getElementById("cigarettes").style.display = "block";
  document.getElementById("vape").style.display = "none";
  which = "c";
}
function vape()
{
  document.getElementById("cigarettes").style.display = "none";
  document.getElementById("vape").style.display = "block";
  which = "v";
}
function both()
{
  document.getElementById("cigarettes").style.display = "block";
  document.getElementById("vape").style.display = "block";
  which = "b";
}
function sober()
{
  if(which=="")
  {
    return;
  }
  if(which=="c" && (document.getElementById("cig").value=="" || isNaN(document.getElementById("cig").value)))
  {
    return;
  }
  if((which=="c" || which=="b") && (parseInt(document.getElementById("cig").value)>200 || parseInt(document.getElementById("cig").value)<0))
  {
    return;
  }
  if(which=="v" && (document.getElementById("vap").value=="" || isNaN(document.getElementById("vap").value)))
  {
    return;
  }
  if((which=="v" || which=="b") && (parseInt(document.getElementById("vap").value)>50 || parseInt(document.getElementById("vap").value)<0))
  {
    return;
  }
  console.log(isNaN(document.getElementById("vap").value));
  console.log(isNaN(document.getElementById("cig").value));
  console.log(document.getElementById("vap").value=="");
  console.log(document.getElementById("cig").value =="");
  if(which=="b" && ((document.getElementById("vap").value=="" || document.getElementById("cig").value =="" || isNaN(document.getElementById("cig").value) || isNaN(document.getElementById("vap").value))))
  {
    console.log("hi");
    return;
  }
  var cmany = document.getElementById("cig").value;
  var vmany = document.getElementById("vap").value;
  var storage = window.localStorage;
  storage.setItem("c",parseFloat(cmany)/7);
  storage.setItem("v",parseFloat(vmany)/7);
  storage.setItem("which",which);
  window.location = "setting.html";
}
