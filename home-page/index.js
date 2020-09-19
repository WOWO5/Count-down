/*
 * @Author: your name
 * @Date: 2020-09-14 19:56:23
 * @LastEditTime: 2020-09-19 16:36:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Count-down\home-page\index.js
 */
var rotateval = 0; //旋转角度
var Interval; //定时
rotate();
document.getElementById('set-img').onmousemove = function () {
    clearInterval(Interval)
};
document.getElementById('set-img').onmouseleave = function () {
    rotate()
};
//定时函数
function rotate() {
    Interval = setInterval(function () {
        var img = document.getElementById('set-img');
        rotateval += 2;
        img.style.transform = 'rotate(' + rotateval + 'deg)';
        img.style.transition = '0.1s linear';
    }, 100)
}