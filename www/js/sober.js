document.addEventListener('deviceready', init());
var which = "sober";
function init()
{
  document.getElementById("mon").addEventListener('click',change);
  document.getElementById("sob").addEventListener('click',change2);
  document.getElementById("st").addEventListener('click',st);
  document.getElementById("extra").style.display = "none";
  main();
}
function st()
{
  if(which=="money")
  {
    change2();
  }
  if(document.getElementById("sd").innerHTML=="---")
  {
    var storage = window.localStorage;
    currentdate = new Date();
    storage.setItem("start",currentdate);
    var nextdate = new Date();
    document.getElementById("sd").innerHTML =Math.floor(((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24)))+ " Days";
    document.getElementById("st").value = "Relapse";
    storage.setItem("begin","y");
  }
  else
  {
    var nextdate = new Date();
    var storage = window.localStorage;
    if(storage.getItem("streak")==null)
    {
      storage.setItem("streak",Math.floor(((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24))));
    }
    else
    {
      if(Math.floor(((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24)))>storage.getItem("streak"))
      {
        storage.setItem("streak",Math.floor(((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24))));
      }
    }
    document.getElementById("sd").innerHTML="---";
    document.getElementById("st").value = "Start";
    storage.setItem("begin","n");
    if(storage.getItem("streak")==1)
    {
      document.getElementById("streak").innerHTML = "Longest Streak: " + storage.getItem("streak") + " Day";
    }
    else
    {
      document.getElementById("streak").innerHTML = "Longest Streak: " + storage.getItem("streak") + " Days";
    }
  }
}
function main()
{
  document.getElementById("money").style.display = "none";
  var storage = window.localStorage;
  console.log(storage.getItem("c")); 
  if(storage.getItem("streak")!=null)
  {
    if(storage.getItem("streak")==1)
    {
      document.getElementById("streak").innerHTML = "Longest Streak: " + storage.getItem("streak") + " Day";
    }
    else
    {
      document.getElementById("streak").innerHTML = "Longest Streak: " + storage.getItem("streak") + " Days";
    }
  }
  if(storage.getItem("begin")=="y")
  {
    var nextdate = new Date();
    document.getElementById("sd").innerHTML =Math.floor(((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24)))+ " Days";
    document.getElementById("st").value = "Relapse";
  }
}
function change()
{
  if(which=="sober")
  {
    document.getElementById("sob").style.color = "#000";
    document.getElementById("sob").style.background = "#fff";
    document.getElementById("mon").style.background = "#000";
    document.getElementById("mon").style.color = "#fff";
    which = "money";
    document.getElementById("money").style.display = "block";
    document.getElementById("sober").style.display = "none";
    var storage = window.localStorage;
    var nextdate = new Date();
    if(storage.getItem("start")!=null)
    {
      if(storage.getItem("which")=='c')
      {
        var value = ((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24))*(storage.getItem("c")*.33);
        document.getElementById("sd").innerHTML = "$" + value.toFixed(2);
        var annual = 365 * ((storage.getItem("c")*.33));
        var monthly = 30.5 * ((storage.getItem("c")*.33));
      }
      else if(storage.getItem("which")=='v')
      {
        var value = ((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24))*(storage.getItem("v")*3.99);
        document.getElementById("sd").innerHTML = "$" + value.toFixed(2);
        var annual = 365 * ((storage.getItem("v")*3.99));
        var monthly = 30.5 * ((storage.getItem("v")*3.99));
      }
      else
      {
        var value = ((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24))*((storage.getItem("v")*3.99)+(storage.getItem("c")*.33));
        document.getElementById("sd").innerHTML = "$" + value.toFixed(2);
        var annual = 365 * ((storage.getItem("c")*.33)+(storage.getItem("v")*3.99));
        var monthly = 30.5 * ((storage.getItem("c")*.33)+(storage.getItem("v")*3.99));
      }
      document.getElementById("streak").innerHTML = "Annual Money Saved: "+"$" + annual.toFixed(2);
      document.getElementById("extra").innerHTML = "Monthly Money Saved: "+"$" + monthly.toFixed(2);
    }
    else
    {
      document.getElementById("streak").innerHTML = "Annual Money Saved: "+"$0.00";
      document.getElementById("extra").innerHTML = "Monthly Money Saved: "+"$0.00";
      document.getElementById("sd").innerHTML = "$0.00";
    }
    document.getElementById("extra").style.display = "block";
  }
}
function change2()
{
  if(which =="money")
  {
    document.getElementById("extra").style.display = "none";
    document.getElementById("mon").style.color = "#000";
    document.getElementById("mon").style.background = "#fff";
    document.getElementById("sob").style.background = "#000";
    document.getElementById("sob").style.color = "#fff";
    which = "sober";
    document.getElementById("sober").style.display = "block";
    document.getElementById("money").style.display = "none";
    var storage = window.localStorage;
    if(storage.getItem("streak")!=null)
    {
      if(storage.getItem("streak")==1)
      {
        document.getElementById("streak").innerHTML = "Longest Streak: " + storage.getItem("streak") + " Day";
      }
      else
      {
        document.getElementById("streak").innerHTML = "Longest Streak: " + storage.getItem("streak") + " Days";
      }
    }
    else
    {
      document.getElementById("streak").innerHTML = "Longest Streak: ---";
    }
    if(storage.getItem("begin")=="y")
    {
      var nextdate = new Date();
      document.getElementById("sd").innerHTML =Math.floor(((nextdate.getTime()-new Date(storage.getItem("start")).getTime())/(1000*3600*24)))+ " Days";
      document.getElementById("st").value = "Relapse";
    }
    else
    {
      document.getElementById("sd").innerHTML = "---";
    }

  }
}
