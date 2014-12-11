
var d = document,
canvas = d.body.appendChild( d.createElement('canvas')),
ctx = canvas.getContext('2d'),
w = canvas.width = innerWidth,
h = canvas.height = innerHeight,
m = Math,
sin = m.sin,
cos = m.cos,
PI = m.PI,
t = 0;
var a = 0;
var b = 0;
var c = 0;
var sliderVal; //feel free to set it to a default
setInterval(function(){
  a = d.getElementById("a").value;
  b = d.getElementById("b").value;
  c = d.getElementById("c").value;

  canvas.width = canvas.width;
  t+=0.01;
  var i = 2000;
  while(i--){
    var  r = 200*cos(t+i/b);
    var ang = a*t + 2*PI* sin(i/c + t/10);
    var color =0;
    ctx.fillStyle = "rgb("+color+","+color+",128)";
    ctx.fillRect(w/2+r*cos(ang),h/2+r*sin(ang),2,2,10,255,255);
  }
},16);
