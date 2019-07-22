
//复选框多选与取消多选
function checkboxed(objName) {
    var objNameList = document.getElementsByName(objName);

    if (null != objNameList) {
        alert("全选操作");
        for (var i = 0; i < objNameList.length; i++) {
            objNameList[i].checked = "checked";
        }
    }
}
function uncheckboxed(objName) {
    var objNameList = document.getElementsByName(objName);

    if (null != objNameList) {
        alert("取消全选操作");
        for (var i = 0; i < objNameList.length; i++) {
            objNameList[i].checked = "";
        }
    }
}
//
function allcheck() {
    var checkFlag = false;    //默认执行的操作是取消全选
    var inputs = document.getElementsByName('checkbox');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].checked) {    //如果存在未勾选的状态则要做的是全选
            checkFlag = true;
            break;    //可加可不加，加了可能能减少遍历的时间，不加也不会对结果有影响
        }
    }
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = checkFlag;
    }
}

//不推荐使用 HTML 元素中可以添加事件属性 的方式来添加属性。
//例子：
<button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
//因为遵从“高内聚，低耦合”的编程原则。
/*  高内聚是说模块内部要高度聚合，低耦合是说模块与模块之间的藕合度要尽量低。
    前者是说模块内部的关系，后者是说模块与模块间的关系。*/
//很形象的比拟：严于律己，宽以待人。
//添加事件句柄实例：

//<input id="test" type="button" value="提交"/>
window.onload = function(){
    var test = document.getElementById("test");
    test.addEventListener("click",myfun2);
    test.addEventListener("click",myfun1);
}
function myfun1(){
    alert("你好1");
}
function myfun2(){
    alert("你好2");
}
//  DOM    
var a   = document.getElementById("dom");          //id 获取  
var box = document.getElementsByClassName("box");  //类名获取
var b   = document.getElementsByTagName("div")     //标签名 
//初级版  交换法
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//原始数组
var result = [];//新数组
var ranNum = 5; //与for循环里的变量i比较，来控制循环次数。
for (var i = 0; i < ranNum; i++) {  //赋值i等于0； 条件 i 小于等于 ranNum； 每次循环i递增 1；
    var ran = Math.floor(Math.random() * arr.length);
    //变量ran= 取整（零到一之间的随机数 * 变量arr数组的目数（数组 里 数组的个数））
    result.push(arr[ran]); //将生成的随机数推送到变量 result （新数组最后一位）
    var center = arr[ran];  //暂时存储新生成的变量   
    arr[ran] = arr[arr.length - 1];  //将随机抽取的 数 赋值给原始数组的最后一位
    arr[arr.length - 1] = center;    //将原始数组的最后一位赋值给随机抽取的随机数
    arr = arr.slice(0, arr.length - 1);//原数组的长度减一 也就是排除最后一位。
};
//精简版 交换法
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
var ranNum = 5;
for (var i = 0; i < ranNum; i++) {
    var ran = Math.floor(Math.random() * (arr.length - i));
    result.push(arr[ran]);
    //
    arr[ran] = arr[arr.length - i - 1];
};
//获取颜色数组
var colors = [];
while (colors.length < 3) {
    var color = "#";
    for (var i = 0; i < 3; i++) {
        var n = Math.round((Math.random() * 255));
        if (n <= 16) {
            color += "0";
            color += n.toString(16);
        } else {
            color += Math.round((Math.random() * 255)).toString(16);
        }
    }
    colors.push(color);
}
//为div赋值颜色
document.getElementById("d1").style.background = colors[0];
document.getElementById("d2").style.background = colors[1];
document.getElementById("d3").style.background = colors[2];
//随机生成颜色的方法
//   <button id="btn1">调用第一种</button>
//   <button id="bnt2">调用第二种</button>
//   <button id="btn3">调用第三种</button>
var btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    document.body.style.background = bg1()
};
var btn2 = document.getElementById('bnt2');
btn2.onclick = function () {
    document.body.style.background = bg2();
};
var btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    document.body.style.background = bg3();
};
//随机生成颜色的方法
//RGB 色
function bg3() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")";    
//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}
function bg1() {
    return '#' + Math.floor(Math.random() * 256).toString(10);
}
//16进制
function bg2() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
//
var getRandomColor = function () {
    return '#' + (Math.random() * 0xffffff << 0).toString(16);
}
/*
其它一切应该都是不言自明的
random() 生成[0, 1)
乘以0xffffff 变成[0, 0xffffff)
这样会产生一个bug, 因为0xffffff 不会产生
然后取整rounded/floored, 转换成前缀为#的字符串
//
js中的tostring()方法
toString()方法，在JS中，定义的所有对象都具有toString()方法。
Number类型的toString()方法比较特殊，

有默认模式       基模式两种。

默认模式的例子：无论你用什么表示法声明数字，默认模式只是按十进制返回。*/
var num1 = 10;
var num2 = 10.0;
alert(num1.toString());//输出10
alert(num2.toString());//输出10
//基模式的例子：很明显，基模式就是把数值型转换成相应的进制。
var num1 = 10;
alert(num1.toString(2));//输出1010
alert(num1.toString(8));//输出12
alert(num1.toString(16));//输出A
//
//
//     定时器重置
{
var t = setInterval(fun1, 500)//fun1是你的函数
fun1 = function () {
    //写入你的函数
}
clearInterval(t)//清除定时器
t = setInterval(fun1, 500)//重新开始定时器
}
//
var z;//定义一个名叫z的全局变量
function start() {//触发变色
    clearInterval(z);//停止周期调用函数
    z = setInterval("change()", 1000);//将周期调用函数放入z变量并直接触发
}
/*结束闪*/
function stop() {//停止变色并重置
    clearInterval(z);//停止周期调用函数
    reset();
}
//
{
var hid = document.getElementById("hid");
var num = 1;
var sid = null; // 存放setInterval
function myTime() {
    hid.innerHTML = num;
    if (num == 5) {
        clearInterval(sid);
    }
    num++;
}
sid = setInterval("myTime()", 1000); //存储起来
}
//
//设置定时运行函数Shuffle(a)和clear()
function Timer() {
    Shuffle(a);
    clear();
    t = setTimeout("Timer()", 1000);
}
//开始闪
function start() {
    if (status == 0) {
        Timer();
        status = 1;
    } else {
        return;
    }
}
/*首先取出这九个格子*/
var box = document.getElementsByClassName("box");
/*遍历9个格子重置颜色*/
function reset() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.background = "#fea500";
    }
}
/*做一个随机颜色函数返回随机颜色*/
function color() {
    var r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
/*开始闪*/
function change() {//随机抽取三个格子变色
    reset();
    var a = [];//定义一个放格子下标的空数组
    for (var i = 0; i < 3; i++) {//遍历空数组并在空数组存放格子下标0~8中任意的三个
        a[i] = Math.floor(Math.random() * 9);
    }
    if (a[0] != a[1] && a[0] != a[2] && a[1] != a[2]) {//如果抽出的任意三个下标互不相等则将这三个下标所对应的格子变色
        box[a[0]].style.background = color();
        box[a[1]].style.background = color();
        box[a[2]].style.background = color();
    }
}
/*首先取出这九个格子*/
var box = document.getElementsByClassName("box");
/*遍历9个格子重置颜色*/
function reset() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.background = "#fea500";
    }
}
var z;//定义一个名叫z的全局变量
function start() {//触发变色
    clearInterval(z);//停止周期调用函数
    z = setInterval("change()", 1000);//将周期调用函数放入z变量并直接触发
}
function stop() {//停止变色并重置/*结束闪*/
    clearInterval(z);//停止周期调用函数
    reset();
}
//
var timer=null;
obtn1.onclick=function()
{
    timer=setInterval(function()   //开启循环：每秒出现一次提示框
    {
        alert('a');
    },1000);
}
obtn2.onclick=function()
{
    clearInterval(timer);        //关闭循环

}
//
var swi = "off";
var Start = function () {
    if (swi === "off"){    // 判断开关状态，关着的话可以点击开始闪烁
        init = setInterval("flashing()",1000);
    }
    swi = "on";    // 打开开关
};

var Stop = function () {
    clearInterval(init);     // 清除定时器
    for (var i = 0; i < box.length; i ++){    // 循环遍历每个盒子，将背景颜色清除
        box[i].style.backgroundColor = "";
    }
    swi = "off";    // 关闭开关
};




 //获取rgb的随机颜色
function color(){
    var rgb;
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    rgb ="rgb("+r+","+g+","+b+")"
    console.log(rgb);
    return rgb;
}
//获取三个随机盒子
function box(){
     //当第一个盒子和第二个盒子相同的时候，或者第……，会重新获取三个盒子
    while(first == second || second == third || first==third){
        var first = Math.floor(Math.random()*9);
        var second =  Math.floor(Math.random()*9);
        var third =  Math.floor(Math.random()*9);
        console.log(first,second,third);
    }
    //给随机的三个盒子赋值上随机背景颜色rgb
    itme[first].style.backgroundColor = color()
    itme[second].style.backgroundColor = color()
    itme[third].style.backgroundColor = color()
}
//
//
//获取子元素  dom  节点
//js代码
var div=document.getElementById('a');
var ul=div.childNodes.item(0);
var lis=ul.childNodes;
for(var i=0;i<lis.length;i++){
alert("Item "+i+": "+lis.item(i).innerHTML);
}
//原生js
var a = document.getElementById("dom"); 
      del_space(a); //清理空格 
      var b = a.childNodes; //获取a的全部子节点； 
      var c = a.parentNode; //获取a的父节点； 
      var d = a.nextSibling; //获取a的下一个兄弟节点 
      var e = a.previousSibling; //获取a的上一个兄弟节点 
      var f = a.firstChild; //获取a的第一个子节点 
      var g = a.lastChild; //获取a的最后一个子节点 
//使用jQuery
jQuery.parent(expr) //找父亲节点，可以传入expr进行过滤，比如$("span").parent()或者$("span").parent(".class")

jQuery.parents(expr) //类似于jQuery.parents(expr),但是是查找所有祖先元素，不限于父元素

jQuery.children(expr) //返回所有子节点，这个方法只会返回直接的孩子节点，不会返回所有的子孙节点

jQuery.contents() //返回下面的所有内容，包括节点和文本。这个方法和children()的区别就在于，包括空白文本，也会被作为一个jQuery对象返回，children()则只会返回节点

jQuery.prev() //返回上一个兄弟节点，不是所有的兄弟节点

jQuery.prevAll() //返回所有之前的兄弟节点

jQuery.next() //返回下一个兄弟节点，不是所有的兄弟节点

jQuery.nextAll() //返回所有之后的兄弟节点

jQuery.siblings() //返回兄弟姐妹节点，不分前后

jQuery.find(expr)  //跟jQuery.filter(expr)完全不一样。jQuery.filter()是从初始的jQuery对象集合中筛选出一部分，而jQuery.find()的返回结果，不会有初始集合中的内容，比如$("p"),find("span"),是从p元素开始找,等同于$("p span").
/*--------------------- 
作者：那年今日、 
来源：CSDN 
原文：https://blog.csdn.net/u013718845/article/details/84924865 
版权声明：本文为博主原创文章，转载请附上博文链接！*/
