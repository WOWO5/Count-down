/*
 * @Author: WOWO
 * @Date: 2020-07-14 15:20:08
 * @LastEditTime: 2020-08-17 08:52:57
 * @LastEditors: Please set LastEditors
 * @Description: study javaScript
 * @FilePath: \Count-down\test\test1.js
 */

/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 */

//DOM事件
// var dev = 66 / 11;
// console.log(dev);

// var cli = document.getElementById("click_on");
// function clickMe(){
//     alert('Clicked!!!');
// }
// cli.addEventListener("click",clickMe,false);
// cli.removeEventListener("click",clickMe,false);

//for···in语句

// var num = new Array();

// num[0] = 'NUM0';
// num[1] = 'NUM1';
// num[2] = 'NUM2';

// for(var nums in num){
//     alert(num[nums]);
// }

//label语句

// var num=0;
// start:
// for(var i=0; i < 10; i++){
//     for(var j=0; j < 10; j++){
//         if(i==5&&j==5){
//             continue start;
//         }
//         num++;
//     }
// }
// alert(num);

//switch语句
// switch(num){
//     case 55:
//         alert('break start');
//         break;
//     case 95:
//         alert("break or continue start");
//         break;
//     case 99:
//         alert('continue');
//     default:
//         alert('err');
// }

//引用类型
// var person = new Object();
// person.name = "WOWO";
// person.age = 21;

// function dispalyInfo(args) {
//   var output = "";

//   if (typeof args.name == "string") {
//     output += "Name:" + args.name + "\n";
//   }

//   if (typeof args.age == "number") {
//     output += "Age:" + args.age + "\n";
//   }

//   alert(output);
// }

// dispalyInfo({
//   name: "WOWO",
//   age: 21,
// });

// dispalyInfo({
//   name: "student",
// });

// var num = new Array("1", "2", "3");
// alert(num[2]);

// num[4] = 1;
// alert(num[4]);

// alert(num[3]);

// num = [1, 2, 3, 4, 5, 6, 78, 7];
// alert(num[3]);
// if (Array.isArray(num)) {
//   alert(num[0]);
// }
// alert(num.toString());
// alert(num.valueOf());
// alert(num);

//*Array类型--转换方法

// var person1 = {
//   toString: function () {
//     return "NAVI 2020";
//   },
//   toLocalString: function () {
//     return "S1mple";
//   },
// };

// var person2 = {
//   toString: function () {
//     return "NAVI 2010";
//   },
//   toLocalString: function () {
//     return "Zeus";
//   },
// };

// var people = [person1, person2];
// alert(people);
// alert(people.toString());
// alert(people.toLocalString());

// var str = ["S1mple", "flamie", "electronic", "Perfecto", "Boombl4"];
// alert(str.join(" "));

//*Array类型--栈方法 LIFO

// var color = new Array();
// var count = color.push("red", "blue");
// alert(count);
// count = color.push("black");
// alert(count);
// var item = color.pop();
// alert(item);
// alert(count);

//*Array类型--队列方法

// var colors = new Array();
// var count = colors.push("red", "blue");
// alert(count);
// alert(colors);
// var item = colors.shift();
// alert(item);
// alert(colors);

//*Array类型--重排序方法

// var values = [0, 1, 5, 10, 15];

// function compare(value1, value2) {
//   if (value1 > value2) {
//     return 1;
//   } else if (value1 < value2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// values.sort();
// alert(values);
// values.sort(compare);
// alert(values);
// values.reverse();
// alert(values);

//*Array类型--操作方法

//var colors = ["red", "blue", "green", "black", "yellow"];
// var selectColor1 = colors.concat(["white", "purple"]);
// alert(selectColor1);

// var selcetColor2 = colors.slice(1, 4);
// alert(selcetColor2);

// var removed = colors.splice(0, 1);
// alert(removed);
// alert(colors);
// removed = colors.splice(1, 0, "white", "purple");
// alert(removed);
// alert(colors);
// removed = colors.splice(0, 1, "white", "purple");
// alert(removed);
// alert(colors);

//*Array类型--位置方法

// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// alert(nums.indexOf(3));
// alert(nums.lastIndexOf(3));

// alert(nums.indexOf(3, 1));
// alert(nums.lastIndexOf(3, 4));

//*Array类型--迭代方法

// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var everyResult = nums.every(function (item, index, array) {
//   return item > 2;
// });
// alert(everyResult);

// var someResult = nums.some(function (item, index, array) {
//   return item > 2;
// });
// alert(someResult);

// var filterResult = nums.filter(function (item, index, array) {
//   return item > 2;
// });
// alert(filterResult);

// var mapResult = nums.map(function (item, index, array) {
//   return item * 2;
// });
// alert(mapResult);

// nums.forEach(function (item, index, array) {
//   alert(item); //遍历数组
// });

//* Array类型--归并方法

// var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = values.reduce(function (prev, cur, index, array) {
//   return prev + cur;
// });
// alert(sum);
// sum = values.reduceRight(function (prev, cur, index, array) {
//   return prev + cur;
// });
// alert(sum);

//* Date类型

// var now = new Date();
// alert(now);
// var someday = new Date(Date.parse("May 20 ,2020"));
// alert(someday);
// someday = new Date("May 15,2019");
// alert(someday);
// someday = new Date(Date.UTC(2005, 4, 5, 1, 55, 55));
// alert(someday);

// var start = +new Date();
// function testone() {
//   alert("hello!");
// }
// testone();
// var end = +new Date();

// var usedTime = end - start;
// alert(usedTime);

// var nowTime = new Date();
// alert(nowTime.toLocaleString());
// alert(nowTime.toString());
// alert(nowTime.valueOf());

//*RegExp类型
// var pattern1 = /at/g;
// alert(pattern1.test("some at"));
// var pattern2 = new RegExp("[bt]a", "i");
// if (pattern2.test("you ba")) {
//   alert("true");
// }

//*Function类型
// function createComparisonFunction(propertyName) {
//   return function (object1, object2) {
//     var value1 = object1[propertyName];
//     var value2 = object2[propertyName];

//     if (value1 > value2) {
//       return 1;
//     } else if (value1 < value2) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
// }

// var data = [
//   { name: "sdsdw", age: 18 },
//   { name: "asdwwd", age: 19 },
// ];

// data.sort(createComparisonFunction("name"));
// alert(data[0].name);
// data.sort(createComparisonFunction("age"));
// alert(data[0].age);

//*Function类型 函数内部属性 arguments,this

// function recursion(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   }
// }

// alert(recursion(5));

// function outer() {
//   inner();
// }

// function inner() {
//   alert(inner.caller);
// }

// outer();

// function outer() {
//   alert(arguments.callee.caller);
// }

// outer();

//*函数的属性和方法
//?length和prototype

// function sayName(name) {
//   alert(name);
// }

// function sum(num1, num2) {
//   alert(num1 + num2);
// }

// function sayhello() {
//   alert("Hi!");
// }

// alert(sayName.length);
// alert(sum.length);
// alert(sayhello.length);

//? apply()和call()

// function sum(num1, num2) {
//   return num1 + num2;
// }

// function callSum1(num1, num2) {
//   return sum.apply(this, arguments);
// }

// function callSum2(num1, num2) {
//   return sum.apply(this, [num1, num2]);
// }

// alert(callSum1(10, 10));
// alert(callSum2(10, 10));

//? bind()
// window.color = "red";
// var o = { color: "blue" };
// alert(typeof o);

// function sayColor() {
//   alert(this.color);
// }

// var objectSayColor = sayColor.bind(o);
// objectSayColor();

//*基本包装类型
//?Boolean类型
//!最好不要使用，易混淆

//?Number类型
//valueOf()返回数值  toString()  toLocalString()返回字符串
//toFixed(num)返回指定位数的字符串
//toExponential()格式化数值  100，1e+2
//toPrecision()自动判断使用toFixed还是toExponential，格式化数值

//?String类型
//valueOf(),toString(),toLocalString()
//charAt()返回指定位置的字符  charCodeAt()返回指定位置的字符的编码
//concat()字符串拼接
//slice() substr() substring()返回被操作字符串的子串
//indexOf() lastIndexOf()字符串位置方法
// var stringValue = "Hello World";
// alert(stringValue.indexOf("o"));
// alert(stringValue.lastIndexOf("o"));

// var str = new String("hello world");
// str.color = "red";
// strs = str.replace(/o/g, "t");
// alert(strs);
// alert(str.color);
// alert(typeof str);

//*单体内置对象
//?Global对象
//encodeURL() encodeURLComponet() decodeURL() decodeURLComponet()
//ebal()解释代码字符串
//?Math对象
//min() max() Math.ceil() Math.floor() Math.round() Math.random()
