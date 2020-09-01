/*
 * @Author: your name
 * @Date: 2020-08-30 15:18:21
 * @LastEditTime: 2020-08-31 10:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Count-down\canvasDemo01\demo01.js
 */
var canvas = document.getElementById("canvas");

canvas.width = 600;
canvas.height = 600;

var context = canvas.getContext("2d");

context.beginPath();
context.lineTo(300, 0);
context.lineTo(110, 600);
context.lineTo(600, 210);
context.lineTo(0, 210);
context.lineTo(490, 600);
context.closePath();
context.lineWidth = 5;
context.fillStyle = "red";
context.fill();
context.strokeStyle = "#954";
context.stroke();

context.beginPath();
context.lineTo(300, 600);
context.lineTo(110, 0);
context.lineTo(600, 390);
context.lineTo(0, 390);
context.lineTo(490, 0);
context.closePath();
context.lineWidth = 5;
context.strokeStyle = "#857";
context.stroke();

//*绘制矩形函数
function drawRect(
  cxt,
  x,
  y,
  width,
  height,
  borderWidth,
  borderColor,
  fillColor
) {
  cxt.lineWidth = borderWidth;
  cxt.strokeStyle = borderColor;
  cxt.fillStyle = fillColor;

  cxt.fillRect(x, y, width, height);
  cxt.strokeRect(x, y, width, height);
}

drawRect(context, 200, 200, 200, 200, 5, "black", "black");
