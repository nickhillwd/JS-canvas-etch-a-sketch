window.onload = function(){
  console.log('App started');

  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');

  var x = 0;
  var y = 0;

    context.beginPath();
    context.moveTo(x, y);

  var draw = function(x, y){
    context.lineTo(x, y);
    context.stroke();
  }

  canvas.onclick = function(event){
    console.log('clicked', event);
    clickPic(event);
  }

  var left = document.getElementById('left');
  var right = document.getElementById('right');
  var up = document.getElementById('up');
  var down = document.getElementById('down');

  left.onclick = function(){
    x += 3;
    draw(x, y);
  }

  right.onclick = function(){
    x += 3;
    draw(x, y);
  }

  up.onclick = function(){
    y -= 3;
    draw(x, y);
  }

  down.onclick = function(){
    y +=3;
    draw(x, y);
  }

};


