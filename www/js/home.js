document.addEventListener('deviceready', init());

function init()
{
  document.getElementById("title").addEventListener('click', home);
}

function home()
{

  window.location = "index.html";
}
