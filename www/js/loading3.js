document.addEventListener('deviceready', init());

function init()
{
  document.getElementById("continue").addEventListener('click', pulmodaily);
}

function pulmodaily()
{

  var ref = window.open("https://sites.google.com/view/pulmodaily/home");
}
