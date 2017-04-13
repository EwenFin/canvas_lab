window.onload = function () {

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  var buttonSmallBrush = document.querySelector('#smallBrush')
  var buttonMediumBrush = document.querySelector('#mediumBrush');
  var buttonBigBrush = document.querySelector('#bigBrush');
  var stickerButton = document.querySelector('#sticker');

  var img = document.createElement('img')
  img.src = 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjwsKGhyKHTAhVC8RQKHR6eD8UQjRwIBw&url=http%3A%2F%2Fwallpaper-gallery.net%2Fwallpapers%2Ffun-pictures.html&psig=AFQjCNG-C3hO49jHB9W5DPyxeVUQ6llixg&ust=1492177432743581'

  stickerButton.onclick = function(){  
      context.drawImage(img, 200, 200, 100, 100)
  }  


  buttonSmallBrush.onclick = function(){
    canvas.onmousemove = function(event) {
      paintSmall(event.x, event.y)
      console.log(event)
    }
  }
  
  buttonMediumBrush.onclick = function(){
    canvas.onmousemove = function(event) {
      paintMedium(event.x, event.y)
      console.log(event)
    }
  }

  buttonBigBrush.onclick = function(){
    canvas.onmousemove = function(event) {
      paintBig(event.x, event.y)
      console.log(event)
    }
  }  
  var colourPicker = document.querySelector('input');
  colourPicker.onchange = function(){
    context.strokeStyle = this.value
    context.fillStyle = this.value

  };


  


  var paintSmall = function(x, y) {
    context.fillStyle = colourPicker;
    context.beginPath();
    context.arc(x, y, 1, 0, (2*Math.PI));
    context.stroke();
    context.fill();
  };

  var paintMedium = function(x, y){
    context.fillStyle = colourPicker;
    context.beginPath();
    context.arc(x, y, 7, 0, (2*Math.PI));
    context.stroke();
    context.fill();

  };

  var paintBig = function(x, y){
    context.fillStyle = colourPicker;
    context.beginPath();
    context.arc(x, y, 15, 0, (2*Math.PI));
    context.stroke();
    context.fill();

  }



}