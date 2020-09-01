/*
 * @Author: your name
 * @Date: 2020-08-31 10:28:36
 * @LastEditTime: 2020-08-31 15:51:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Count-down\canvasDemo02\demo02.js
 */
var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 600;

var context = canvas.getContext("2d");

context.lineWidth = 50;
context.strokeStyle = "#058";

context.beginPath();
context.moveTo(100, 100);
context.lineTo(300, 100);
context.lineCap = "butt";
context.stroke();

context.beginPath();
context.moveTo(100, 200);
context.lineTo(300, 200);
context.lineCap = "round";
context.stroke();

context.beginPath();
context.moveTo(100, 300);
context.lineTo(300, 300);
context.lineCap = "square";
context.stroke();

//*五角星绘制函数
function drawStar(cxt, r, R, x, y, rot) {
  cxt.beginPath();
  for (var i = 0; i < 5; i++) {
    cxt.lineTo(
      Math.cos(((18 + i * 72) / 180 - rot) * Math.PI) * R + x,
      -Math.sin(((18 + i * 72) / 180 - rot) * Math.PI) * R + x
    );
    cxt.lineTo(
      Math.cos(((54 + i * 72) / 180 - rot) * Math.PI) * r + y,
      -Math.sin(((54 + i * 72) / 180 - rot) * Math.PI) * r + y
    );
  }
  cxt.closePath();
  cxt.lineWidth = 4;
  cxt.lineJoin = "round";
  cxt.stroke();
}
drawStar(context, 20, 100, 500, 500, 0);
