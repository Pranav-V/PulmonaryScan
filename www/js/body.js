document.addEventListener('deviceready', init());

function init()
{
  document.getElementById("brain").addEventListener('click', brain);
  document.getElementById("mouth").addEventListener('click',mouth);
  document.getElementById("repro").addEventListener('click',repro);
  document.getElementById("heart").addEventListener('click',heart);
  document.getElementById("lung").addEventListener('click',lung);
  document.getElementById("stom").addEventListener('click',stom);
}
function stom()
{
  window.location = "stomach.html"; 
}
function brain()
{

  window.location = "brain.html";
}
function mouth()
{
  window.location = "mouth.html";
}
function repro()
{
  window.location = "repro.html";
}
function heart()
{
  window.location = "heart.html";
}
function lung()
{
  window.location = "lung.html";
}
