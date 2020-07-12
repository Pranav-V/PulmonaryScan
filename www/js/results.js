document.addEventListener('deviceready', init());
function init()
{
  var storage = window.localStorage;
  var score = (parseInt(storage.getItem("q1")) + parseInt(storage.getItem("q2")) + parseInt(storage.getItem("q3")) + parseInt(storage.getItem("q4")) + parseInt(storage.getItem("q5")) + parseInt(storage.getItem("q6")) + parseInt(storage.getItem("q7")) + parseInt(storage.getItem("q8")) + parseInt(storage.getItem("q9")));
  if(score>=6)
  {
    document.getElementById("results").innerHTML += "Our test has found that there is substantial evidence that you may have a COPD-related illness. Please contact a medical professional to have your pulmonary issue further examined.";
    document.getElementById("disclaimer").innerHTML += "This does not mean you have COPD or a COPD related illness. This answer serves as the best recommendation we can provide you on the basis of your answers to the screening test."
  }
  else
  {
    document.getElementById("results").innerHTML += "Our test has not found conclusive evidence indicating that you may have a COPD-related illness. Please re-take this test if new symptoms begin to develop, and please maintain healthy practices for your lungs and body.";
    document.getElementById("disclaimer").innerHTML += "This does not mean you do not have COPD or a COPD related illness. This answer serves as the best recommendation we can provide you on the basis of your answers to the screening test";
  }
}
