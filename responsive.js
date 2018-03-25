// Sandy Demian
// responsive.js

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
  var y = document.getElementById("comment");
  if (y.className === "code")
  {
    y.className += " responsive";
  } 
  else 
  {
    y.className = "code";
  }
}