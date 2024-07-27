// Sandy Demian
// responsive.js

profilePic = document.getElementById('profilePic');

mobileRow = document.getElementById('mobileRow');
resumeL = document.getElementById('resumeL');

window.addEventListener("load", function () 
{
  if (window.innerWidth < 960) 
  { 
    if (profilePic)
    {
      profilePic.style.width = '50%';
    }

    if (mobileRow)
    {
      mobileRow.appendChild(resumeL);
    }
  }
});