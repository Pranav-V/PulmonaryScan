document.addEventListener('deviceready', init());

function init()
{
  document.getElementById("continue").addEventListener('click', effect);
}

function effect()
{

  window.location = "effect.html";
}
