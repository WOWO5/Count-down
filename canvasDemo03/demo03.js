/*
 * @Author: your name
 * @Date: 2020-08-31 15:59:55
 * @LastEditTime: 2020-09-01 10:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Count-down\canvasDemo03\demo03.js
 */
var canvas = document.getElementById("canvas");

canvas.width = 600;
canvas.height = 600;

var context = canvas.getContext("2d");

context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
var stars = [];
for (var i = 0; i < 200; i++) {
  var R = Math.random() * 10 + 5;
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var a = Math.random() * 360;

  stars.push([x, y, R]);
  var flag = true;

  for (var j = 0; j < stars.length; j++) {
    var compareX = Math.abs(x - stars[j][0]);
    var compareY = Math.abs(y - stars[j][1]);
    var compareR = Math.sqrt(Math.pow(compareX, 2) + Math.pow(compareY, 2));

    if (compareR < R + stars[j][2] && compareR != 0) {
      flag = false;
    }
  }
  if (x > 20 && x < 580 && y > 20 && y < 580 && flag) {
    drawStar(context, R / 2, R, x, y, a);
  }
}
//*绘制五角星函数
function drawStar(cxt, r, R, x, y, rot) {
  cxt.beginPath();
  for (var i = 0; i < 5; i++) {
    cxt.lineTo(
      Math.cos(((18 + i * 72) / 180 - rot) * Math.PI) * R + x,
      -Math.sin(((18 + i * 72) / 180 - rot) * Math.PI) * R + y
    );
    cxt.lineTo(
      Math.cos(((54 + i * 72) / 180 - rot) * Math.PI) * r + x,
      -Math.sin(((54 + i * 72) / 180 - rot) * Math.PI) * r + y
    );
  }
  cxt.closePath();
  cxt.lineWidth = 1;
  cxt.strokeStyle = "#fd5";
  cxt.fillStyle = "#fb3";
  console.log("true");
  cxt.fill();
  cxt.stroke();
}

function aStar(cxt) {
  cxt.beginPath();
  for (var i = 0; i < 5; i++) {
    cxt.lineTo(
      Math.cos(((18 + i * 72) / 180) * Math.PI),
      -Math.sin(((18 + i * 72) / 180) * Math.PI)
    );
    cxt.lineTo(
      Math.cos(((54 + i * 72) / 180) * Math.PI),
      -Math.sin(((54 + i * 72) / 180) * Math.PI)
    );
  }
  cxt.closePath();
  cxt.stroke();
}
