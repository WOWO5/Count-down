window.onload = function(){
    var canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(500,500);
    context.closePath();
    context.stroke();
    drawRect(context,10,10,100,100,3,"blue","red");
}

function drawRect(cxt,x,y,width,height,borderWidth,borderColor,fillColor){
    cxt.beginPath();
    cxt.rect(x,y,width,height);
    cxt.closePath();

    cxt.lineWidth = borderWidth;
    cxt.fillStyle = fillColor;
    cxt.strokeStyle = borderColor;

    cxt.fill();
    cxt.stroke();
}