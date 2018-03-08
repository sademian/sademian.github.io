// Sandy Demian

function myFunction() 
{
  var x = document.getElementById("nav");
  if (x.className === "navigation") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "navigation";
  }
  var y = document.getElementById("code");
  if (y.className === "leftcolumn")
  {
    y.className += " responsive";
  } 
  else 
  {
    y.className = "leftcolumn";
  }
}