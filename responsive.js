// Sandy Demian
// responsive.js


mobileImg = document.getElementById('mobileImg');
webImg = document.getElementById('webImg');

resumeL = document.getElementById('resumeL');

window.addEventListener("load", function () 
{
  if (window.innerWidth < 960) 
  { 
    if (mobileImg) mobileImg.style.display = 'block';
    if (webImg) webImg.style.display = 'none';

    if (resumeL) resumeL.width = '40px';
  }
  else
  {
    if (mobileImg) mobileImg.style.display = 'none';
    if (webImg) webImg.style.display = 'block';
  }
});