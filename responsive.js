// Sandy Demian
// responsive.js


profilePic = document.getElementById('profilePic');

resumeL = document.getElementById('resumeL');

window.addEventListener("load", function () 
{
  if (window.innerWidth < 960) 
  { 
    //if (mobileImg) mobileImg.style.display = 'block';
    //if (webImg) webImg.style.display = 'none';
    if (profilePic) profilePic.width = 20%;

    if (resumeL) resumeL.width = '30px';
  }
  else
  {
    //if (mobileImg) mobileImg.style.display = 'none';
    //if (webImg) webImg.style.display = 'block';
  }
});