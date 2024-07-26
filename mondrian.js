// Sandy Demian
// mondrian art generator

var width = (document.documentElement.clientWidth)/2;
var height = (width*2)/3;
var minimum = width/5;
var mode = 0;
var colors = ["white", "yellow", "red", "white", "white", "white", "blue", "white"];
var c = 0;
var l = width/200;

var canvas = document.getElementById('art');
canvas.width = width;
canvas.height = height;
canvas.style.border = (2*l) + 'px solid #000';
var ctx = canvas.getContext('2d');

mond(0,width,0,height);

// called when the button is clicked
function draw(){
  mond(0,width,0,height);
}

// recursive mondrian function
function mond(x1, x2, y1, y2)
{
  var w = x2-x1;
  var h = y2-y1;
  var p;

  // randomly choose the mode, did not like it
  //mode = Math.floor(Math.random()*2);

  // stop dividing when the width and height are too small
  if (w<minimum && h<minimum)
  {
    return 1;
  }

  // change the mode if the height is too small and the section was supposed to be divided horizontally
  // or the oppisite case, if the width is too small and the section was supposed to be divided vertically
  if((mode%2 == 0 && h<minimum) || (mode%2 == 1 && w<minimum))
  {
    mode++;
  }

  // horizontal division if the mode is even
  if (mode%2 == 0)
  {
    // generate the division point
    p = Math.floor(Math.random()*((3*h)/5) + (1*h/5));

    // color the top section
    //c = Math.floor(Math.random()*8); // I tried to randomly choose the color but didn't like it
    ctx.fillStyle= colors[c%8];
    ctx.fillRect(x1,y1,w,p-l);
    c++;

    // draw the division line
    ctx.fillStyle= "black";
    ctx.fillRect(x1,y1+p-l,w,(2*l));

    // color the bottom section
    //c = Math.floor(Math.random()*8);
    ctx.fillStyle= colors[c%8];
    ctx.fillRect(x1,y1+p+l,w,h-(p+l));
    c++;

    // store the data that would be overwitten in the recursion process
    var xa=x1, xb=x2, ya=y1+p+l, yb=y2;

    // call mond() on the top section
    mode++;
    mond(x1,x2,y1,y1+p-l);

    // call mond() on the bottom section
    mode++;
    mond(xa,xb,ya,yb);

    return;
  }
  // vertiical division if the mode is odd
  else if (mode%2 == 1)
  {
    // generate the division point
    p = Math.floor(Math.random()*((3*w)/5) + (1*w/5));

    // color the left section
    //c = Math.floor(Math.random()*8);
    ctx.fillStyle= colors[c%8];
    ctx.fillRect(x1,y1,p-l,h);
    c++;

    // draw the division line
    ctx.fillStyle= "black";
    ctx.fillRect(x1+p-l,y1,(2*l),h);

    // color the right section
    //c = Math.floor(Math.random()*8);
    ctx.fillStyle= colors[c%8];
    ctx.fillRect(x1+p+l,y1,w-(p+l),h);
    c++;

    // store the data that would be overwitten in the recursion process
    var xa=x1+p+l, xb=x2, ya=y1, yb=y2;

    // call mond() on the left section
    mode++;
    mond(x1,x1+p-l,y1,y2);

    // call mond() on the right section
    mode++;
    mond(xa,xb,ya,yb);

    return;
  }
}