
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
//  DOM   
var a = document.getElementById("dom");          //id 获取  
var box = document.getElementsByClassName("box");  //类名获取
var b = document.getElementsByTagName("div")     //标签名 
//不推荐使用 HTML 元素中可以添加事件属性 的方式来添加属性。
//例子：

//<button onclick ="getElementById('demo').innerHTML=Date()">现在的时间是? </button>

//因为遵从“高内聚，低耦合”的编程原则。
/*  高内聚是说模块内部要高度聚合，低耦合是说模块与模块之间的藕合度要尽量低。
    前者是说模块内部的关系，后者是说模块与模块间的关系。*/
//很形象的比拟：严于律己，宽以待人。
//添加事件句柄实例：

//<input id="test" type="button" value="提交"/>

window.onload = function () {
    var test = document.getElementById("test");
    test.addEventListener("click", myfun2);
    test.addEventListener("click", myfun1);
}
function myfun1() {
    alert("你好1");
}
function myfun2() {
    alert("你好2");
}
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
}//为div赋值颜色
document.getElementById("d1").style.background = colors[0];
document.getElementById("d2").style.background = colors[1];
document.getElementById("d3").style.background = colors[2];
//
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
//     11111
var color3 = "#" + ("00000" + (Math.floor(Math.random() * 16777216)).toString(16)).slice(-6);
//     22222
// 0xffffff  换算成十进制  16777215  Math.random()只会产生 0~1 之间随机数不包括一 （1） 
//乘以0xffffff 变成[0, 0xffffff)这样会产生一个bug, 因为0xffffff 不会产生    
//所以 最好使用上面的方法来生产随机颜色。
for (var i = 0; i < 3; i++) {
    var bgc = '#' + ('000000' + (Math.random() * 0xffffff << 0).toString(16)).slice(-6);
    bgcNew.push(bgc);
};
//下面两种有一点问题 ： 会生成一个五位数的颜色值 #12345  导致浏览器无法识别。
var a = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
var b = '#' + (Math.random() * 0xffffff << 0).toString(16);
////////////////////////////////////////////////////////////////////////////////////////

//js中的tostring()方法
//toString()方法，在JS中，定义的所有对象都具有toString()方法。
//Number类型的toString()方法比较特殊，
//有默认模式       基模式两种。
//默认模式的例子：无论你用什么表示法声明数字，默认模式只是按十进制返回。
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
//
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
//
var timer = null;
obtn1.onclick = function () {
    timer = setInterval(function ()   //开启循环：每秒出现一次提示框
    {
        alert('a');
    }, 1000);
}
obtn2.onclick = function () {
    clearInterval(timer);        //关闭循环

}
//
var swi = "off";
var Start = function () {
    if (swi === "off") {    // 判断开关状态，关着的话可以点击开始闪烁
        init = setInterval("flashing()", 1000);
    }
    swi = "on";    // 打开开关
};

var Stop = function () {
    clearInterval(init);     // 清除定时器
    for (var i = 0; i < box.length; i++) {    // 循环遍历每个盒子，将背景颜色清除
        box[i].style.backgroundColor = "";
    }
    swi = "off";    // 关闭开关
};




//获取rgb的随机颜色
function color() {
    var rgb;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    rgb = "rgb(" + r + "," + g + "," + b + ")"
    console.log(rgb);
    return rgb;
}
//获取三个随机盒子
function box() {
    //当第一个盒子和第二个盒子相同的时候，或者第……，会重新获取三个盒子
    while (first == second || second == third || first == third) {
        var first = Math.floor(Math.random() * 9);
        var second = Math.floor(Math.random() * 9);
        var third = Math.floor(Math.random() * 9);
        console.log(first, second, third);
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
var div = document.getElementById('a');
var ul = div.childNodes.item(0);
var lis = ul.childNodes;
for (var i = 0; i < lis.length; i++) {
    alert("Item " + i + ": " + lis.item(i).innerHTML);
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

//<input type="range" min="0" max="100" step="1" value="10">

//js代码监听效果，需要绑定监听事件，代码如下：
var elem = document.querySelector('input[type="range"]');

//获取一个想显示值的标签，并且初始化默认值
var target = document.querySelector('.value');
target.innerHTML = elem.value;

var rangeValue = function () {
    var newValue = elem.value;
    target.innerHTML = newValue;
}
//绑定input监听事件
elem.addEventListener("input", rangeValue);

//现在实现的效果为左小右大，如果要实现左大右小的事件，可以这样写
//<input class="speed_input" type="range" min="-100" max="0" step="1" value="-10">
//最小为-100，最大为0，默认值为-10，
//js代码监听效果，需要绑定监听事件，代码如下：

var elem = document.querySelector('input[type="range"]');
//获取一个想显示值的标签，并且初始化默认值
var target = document.querySelector('.value');
target.innerHTML = Math.abs(elem.value);

var rangeValue = function () {
    var newValue = Math.abs(elem.value);     //把获取到的值转化为正整数，
    target.innerHTML = newValue;
}
//绑定input监听事件

//</input>elem.addEventListener("input", rangeValue);


function myFunction() {
    var x, text;

    // 获取 id="numb" 的值
    x = document.getElementById("numb").value;

    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "输入错误";
    } else {
        text = "输入正确";
    }
    document.getElementById("demo").innerHTML = text;
}




/*<div class="bottom-box">
    <input type="button" class="img7" onclick="btLeft()">
    <input type="range" id="rangeNumber" oninput="change()" name="change" value="4" min="4" max="18" step="1" >
    <input type="button" class="img8" onclick="btRight()">
</div>*/
var inputNumber = document.getElementById("inputNumber");

var rangeNumber = document.getElementById("rangeNumber");

//玩家人数的输入框与滚动条同步
function getNumber() {
    if (inputNumber.value >= 4 && inputerNumber.value <= 18) {
        inputNumber.value = rangeNumber.value;
    }
    else {
        alert("请输入玩家人数");
    }
}
//滚动条改变玩家人数随着改变
function change() {
    inputNumber.value = rangeNumber.value;
}

//减号按钮与滚动条同步
function btLeft() {
    rangeNumber.value--;
    if (inputNumber.value <= 4) {
        alert("人数不足，请凑好再来");
    }
    else {
        inputNumber.value = rangeNumber.value;
    }
}
//加号按钮与滚动条同步
function btRight() {
    rangeNumber.value++;
    if (inputNumber.value >= 18) {
        alert("人数太多，请分开游戏");
    }
    else {
        inputNumber.value = rangeNumber.value;
    }
}

//count 数组的总长度    randomCount 随机显示的数量 

var selRandomNum = function (count, randomCount) {
    var count = count || 10;              //原始 数组长度
    var randomCount = randomCount || 3;   //需要随机抽取的数量
    var totalArray = [],     //原始数组
        randomArray = [];    //从原始数组中随机抽取的数 生成的新数组。
    for (var i = 0, l = count; i < l; i++) {
        totalArray.push(i);    // 生成原始数组
    }
    for (var i = 0, l = randomCount; i < l; i++) {
        var randomIndex = Math.floor(Math.random() * totalArray.length);
        var selectIndex = totalArray.splice(randomIndex, 1)[0];   //检索原始数组
        randomArray.push(selectIndex);
    }
    console.log(totalArray + '-----' + randomArray);
}
selRandomNum();




// window.location.href="../html/task234-peibi.html";  //不停的重复跳转
// window.open('../html/task234-peibi.html');


var txt2 = document.getElementsByTagName('input')[2];//玩家人数显示框
var txt3 = document.getElementsByTagName('input')[3];//滚动条滚动数值
var less = document.getElementsByTagName('button')[0];//按钮一,递减;
var plus = document.getElementsByTagName('button')[1];//按钮二,递增;
var set = document.getElementById('click-set')//文本:点击设置

set.onclick = function set() {       //给文本绑定点击事件
    num1 = Math.floor(txt2.value / 3);//杀手数量
    num2 = txt2.value - num1;         //平民数量

    var sha = Array(num1);            //杀手数组
    var pin = Array(num2);            //平民数组

    for (i = 0; i < num1; i++) {      //历遍杀手数组
        sha[i] = "<li><img src='../images/13.png'> 杀手1人</li>";
    }
    //历遍平民数组
    for (i = 0; i < num2; i++) {
        pin[i] = "<li><img src='../images/14.png'> 平民1人</li>";
    }
    //合并杀手和平民数组
    var allplayer = sha.concat(pin);
    //玩家数组乱序输出
    for (var i = 0; i < txt2.value; i++) {
        var all = i + Math.floor(Math.random() * (txt2.value - i));
        var temp = allplayer[i];
        allplayer[i] = allplayer[all];
        allplayer[all] = temp;
    }
    //输出杀手和平民数组到HTML,并取消分隔符
    document.getElementsByTagName("ul")[0].innerHTML = allplayer.join("");
}

//当输入框数字修改时,滑动块也跟着改变;
txt2.onchange = function changenumber() {
    if (txt2.value <= 16 && txt2.value >= 4) {
        txt3.value = txt2.value;
    }
    else {
        alert("请保证玩家人数在4~16之间");
    }
}

//当滑动条改变时,输入框数字也跟着改变;
txt3.oninput = function changethumb() {
    txt2.value = txt3.value;
}

//右边加号按钮,点击实现递增;
plus.onclick = function () {
    if (txt3.value < 16) {
        txt3.value++;
        txt2.value = txt3.value;
    }
    else {
        alert("玩家人数已经满啦!");
    }
    //滑动块所在的值距最左边的长度占滑动条总长度的百分比
    var suibian = (txt2.value - 4) / 12 * 100 + '%';
    console.log(suibian);
    txt3.style.backgroundSize = suibian;//给滑动条添加属性(驼峰法)
}
//左边减号按钮,点击实现递减;
less.onclick = function () {
    if (txt3.value > 4) {
        txt3.value--;
        txt2.value = txt3.value;
    }
    else {
        alert("玩家人数不能再少啦!");
    }
    //滑动块所在的值距最左边的长度占滑动条总长度的百分比
    var suibian = (txt2.value - 4) / 12 * 100 + '%';
    txt3.style.backgroundSize = suibian;//给滑动条添加属性(驼峰法)
}


//跳转至玩家配比页面
function peibi() {
    window.location.href = "../html/task234-peibi.html";
}
//跳转至上一个页面
function backto() {
    window.location.href = "../html/task234-01.html";
}
//在鼠标指针移动到元素上时触发。
txt3.onmousemove = function () {
    //滑动块所在的值距最左边的长度占滑动条总长度的百分比
    var suibian = (txt2.value - 4) / 12 * 100 + '%';
    console.log(suibian);
    txt3.style.backgroundSize = suibian;//给滑动条添加属性(驼峰法)
}
//元素上发生鼠标点击时触发。
txt3.onclick = function () {
    //滑动块所在的值距最左边的长度占滑动条总长度的百分比
    var suibian = (txt2.value - 4) / 12 * 100 + '%';
    txt3.style.backgroundSize = suibian;//给滑动条添加属性(驼峰法)
}
//设置 "去发牌"点击事件,页面跳转至查看身份页面;
document.getElementsByTagName("button")[2].onclick = function () {
    window.location.href = "../html/task234-watch.html";
}




Array.prototype.distinct = function () {
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length;

    for (i = 0; i < len; i++) {

        for (j = i + 1; j < len; j++) {

            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}
var arr = [1, 2, 3].distinct();

//原文：https://blog.csdn.net/lilinoscar/article/details/79866167 

Array.prototype.deleteEle = function () {
    var newArr = this;
    for (var i = newArr.length - 1; i >= 0; i--) {
        var targetNode = newArr[i];
        for (var j = 0; j < i; j++) {
            if (targetNode == newArr[j]) {
                newArr.splice(i, 1);
                break;
            }
        }
    }
    return newArr;
}
var arr = ["a", "b", "c", "c", "ab", "d", "ab", "d", "c"];
console.log(arr.deleteEle());

//*******************/
var a = [5, 4, 3, 2, 1, 2, 3, 2, 1,];
Array.prototype.duplicate = function () {
    var tmp = [];
    this.concat().sort().sort(function (a, b) {
        if (a == b && tmp.indexOf(a) === -1) tmp.push(a);
    });
    return tmp;
}
console.log(a.duplicate())

//方法三 
//思路：把原数组打散，然后再依次输出， 这样也可以做到随机永不重复，且效率更高。 

var count = 3000;
var originalArray = new Array;  //原数组 

for (var i = 0; i < count; i++) {    //给原数组originalArray赋值 
    originalArray[i] = i + 1;
}

var d1 = new Date().getTime();

originalArray.sort(function () { return 0.5 - Math.random(); });
for (var i = 0; i < count; i++) {
    document.write(originalArray[i] + " , ");
}

var d2 = new Date().getTime();
document.write("运算耗时" + (d2 - d1));




var data = [1, 2, 3, 4];//这是一个数组

var send = JSON.stringify(data);//转换为字符串

sessionStorage.data = send;//存入

var get = sessionStorage.data;//读取

var newa = JSON.parse(get);//重新转换为数组


//正则表达式表单验证实例：

/*是否带有小数*/
function isDecimal(strValue) {
    var objRegExp = /^\d+\.\d+$/;
    return objRegExp.test(strValue);
}

/*校验是否中文名称组成 */
function ischina(str) {
    var reg = /^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验是否全由8位数字组成 */
function isStudentNo(str) {
    var reg = /^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验电话码格式 */
function isTelCode(str) {
    var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return reg.test(str);
}

//判断jQuery 是否引入成功
$(function () {
    alert("加载完成");
});


//1.文档加载完毕，图片不加载的时候，就可以执行这个函数。
$(document).ready(function () {
    alert(1);
})
//上面的简洁版
//2.文档加载完毕，图片不加载的时候，就可以执行这个函数。
$(function () {
    alert(1);
});
//3.文档加载完毕，图片也加载完毕的时候，在执行这个函数。
$(window).ready(function () {
    alert(1);
})

//通过原生 js 获取这些元素节点的方式是
var myBox = document.getElementById("box");           //通过 id 获取单个元素
var boxArr = document.getElementsByClassName("box");  //通过 class 获取的是数组
var divArr = document.getElementsByTagName("div");    //通过标签获取的是数组
//
//通过 jQuery 获取这些元素节点的方式是：（获取的都是数组）
//获取的是数组，里面包含着原生 JS 中的DOM对象。
var jqBox1 = $("#box");   //通过 id 获取单个元素
var jqBox2 = $(".box");   //通过 class 获取的是数组
var jqBox3 = $("div");    // 获取所有的div标签元素
//
//二者的相互转换
//1、 DOM 对象 转为 jQuery对象：

    $(js对象);
//举例：（拿上一段的代码举例）

    //转换。
    jqBox1 = $(myBox);
    jqBox2 = $(boxArr);
    jqBox3 = $(divArr);
//DOM 对象转换成了 jquery 对象之后，皮上面的功能可以直接调用。

//2、jQuery对象 转为 DOM 对象：
    jquery对象[index];      //方式1（推荐）

    jquery对象.get(index);  //方式2
//jQuery对象转换成了 DOM 对象之后，可以直接调用 DOM 提供的一些功能。如：

//jquery对象转换成 DOM 对象之后
    jqBox3[0].style.backgroundColor = "black";
    jqBox3.get(4).style.backgroundColor = "pink";
//总结：如果想要用哪种方式设置属性或方法，必须转换成该类型。



//1.文档加载完毕，图片不加载的时候，就可以执行这个函数。
$(document).ready(function () { })
//上面的简洁版
//2.文档加载完毕，图片不加载的时候，就可以执行这个函数。
$(function () { });
//3.文档加载完毕，图片也加载完毕的时候，在执行这个函数。
$(window).ready(function () { })



//html：
//<!--<div class="content-box">-->
//           <!--<div class="content-top">-->
//               <!--<div class="career"></div>-->
//                <!--<div class="number"></div>-->
//            <!--</div>-->
//        <!--<div class="content-bottom"></div>-->
//    <!--</div>-->
//js:
var inBox = '<div class=\"content-box\">\n'+//var个变量存储写进文档的标签代码，记住要转义字符

            '<div class=\"content-top\">\n'+
            '<div class=\"career\">\n'+ player[i] +
            '</div>\n'+
            '<div class=\"number\">\n'+ num +
            '</div>\n'+
            '</div>\n'+
            '<div class=\"content-bottom\">\n'+
            '</div>\n'+
            '</div>';
        $('.main-box').append(inBox);//通过append将盒子一个一个的往文档里面装





var Switch = function ($elem) {

    var log = function (fsm, previousState) {
        console.log('currentState is : ' + fsm.currentState + ((previousState || '') && (' , and previous state is : ' + previousState)));
    };

    return {
        currentState: 'off',
        states: {
            'on': {
                to: 'off',
                action: 'turnOff'
            },
            'off': {
                to: 'on',
                action: 'turnOn'
            }
        },
        init: function () {
            var self = this;
            $elem.on('click', (function () {
                var args = arguments;
                return function () {
                    self.transition(args);
                }
            })());
            log(this);
        },
        transition: function (e) {
            var old = this.currentState;
            this.currentState = this.states[old].to;
            var action = this.states[old].action;
            (action in this) && this[action](old);
        },
        turnOn: function (fromState) {
            $elem.addClass('on');
            log(this, fromState);
        },
        turnOff: function (fromState) {
            $elem.removeClass('on');
            log(this, fromState);
        }
    }

};



//我们希望每个stu拥有属于自己的name和age属性
function Student(name, age) {
    this.name = name;
    this.age = age;
}

//所有的stu应该共享一个alertName()方法
Student.prototype = {
    constructor: Student,
    alertName: function () {
        alert(this.name);
    }
}

var stu1 = new Student("Jim", 20);
var stu2 = new Student("Tom", 21);

stu1.alertName();  //Jim  实例属性
stu2.alertName();  //Tom  实例属性

alert(stu1.alertName == stu2.alertName);  //true  共享函数




// 5. 做好缓存

// 选中某一个网页元素，是开销很大的步骤。所以，使用选择器的次数应该越少越好，
//并且尽可能缓存选中的结果，便于以后反复使用。

// 比如，下面这样的写法就是糟糕的写法：

　　jQuery('#top').find('p.classA');

　　jQuery('#top').find('p.classB');

//更好的写法是：

　　var cached = jQuery('#top');

　　cached.find('p.classA');

　　cached.find('p.classB');


// 6. 使用链式写法

// jQuery的一大特点，就是允许使用链式写法。

　　$('div').find('h3').eq(2).html('Hello');



//7. 事件的委托处理（Event Delegation）
　　$("table").on("click", "td", function(){

    　　　　$(this).toggleClass("click");
    
    　　});
    //如果要取消事件的绑定，就使用off()方法。

    　　$(document).off("click", "td");

//8. 少改动DOM结构

// （1）改动DOM结构开销很大，因此不要频繁使用.append()、.insertBefore()和.insetAfter()这样的方法。

// 如果要插入多个元素，就先把它们合并，然后再一次性插入。根据测试，合并插入比不合并插入，快了将近10倍。

// （2）如果你要对一个DOM元素进行大量处理，应该先用.detach()方法，把这个元素从DOM中取出来，处理完毕以后，再重新插回文档。根据测试，使用.detach()方法比不使用时，快了60%。

// （3）如果你要在DOM元素上储存数据，不要写成下面这样：

　　var elem = $('#elem');

　　elem.data(key,value);

//而要写成

　　var elem = $('#elem');

　　$.data(elem[0],key,value);

//根据测试，后一种写法要比前一种写法，快了将近10倍。因为elem.data()方法是定义在jQuery函数的prototype对象上面的，
//而$.data()方法是定义jQuery函数上面的，调用的时候不从复杂的jQuery对象上调用，所以速度快得多。（此处可以参阅下面第10点。）



// 10. 尽量少生成jQuery对象

// 每当你使用一次选择器（比如$('#id')），就会生成一个jQuery对象。jQuery对象是一个很庞大的对象，
//带有很多属性和方法，会占用不少资源。所以，尽量少生成jQuery对象。

// 举例来说，许多jQuery方法都有两个版本，一个是供jQuery对象使用的版本，
//另一个是供jQuery函数使用的版本。下面两个例子，都是取出一个元素的文本，使用的都是text()方法。

// 你既可以使用针对jQuery对象的版本：

 　　var $text = $("#text");

 　　var $ts = $text.text();

// 也可以使用针对jQuery函数的版本：

 　　var $text = $("#text");

 　　var $ts = $.text($text);

// 由于后一种针对jQuery函数的版本不通过jQuery对象操作，所以相对开销较小，速度比较快。

// 11. 选择作用域链最短的方法

// 严格地说，这一条原则对所有Javascript编程都适用，而不仅仅针对jQuery。

// 我们知道，Javascript的变量采用链式作用域。读取变量的时候，先在当前作用域寻找该变量，如果找不到，就前往上一层的作用域寻找该变量。这样的设计，使得读取局部变量比读取全局变量快得多。

// 请看下面两段代码，第一段代码是读取全局变量：

 　　var a = 0;

　　function x(){
　　　　a += 1;

　　}

// 第二段代码是读取局部变量：

 　　function y(){

 　　　　var a = 0;

 　　　　a += 1;

 　　}

// 第二段代码读取变量a的时候，不用前往上一层作用域，所以要比第一段代码快五六倍。

// 同理，在调用对象方法的时候，closure模式要比prototype模式更快。

 //prototype模式：

　　var X = function(name){ this.name = name; }

// 　　X.prototype.get_name = function() { return this.name; };

//closure模式：

 　　var Y = function(name) {

 　　　　var y = { name: name };

 　　　　return { 'get_name': function() { return y.name; } };

 　　};

// 同样是get_name()方法，closure模式更快。

// 12. 使用Pub/Sub模式管理事件

// 当发生某个事件后，如果要连续执行多个操作，最好不要写成下面这样：

　　function doSomthing {

　　　　doSomethingElse();

　　　　doOneMoreThing();

　　};

// 而要改用事件触发的形式：

　　function doSomething{

　　　　$.trigger("DO_SOMETHING_DONE");

　　};

　　$(document).on("DO_SOMETHING_DONE", function(){

　　　　doSomethingElse(); }

　　);

// 还可以考虑使用deferred对象。

　　function doSomething(){

　　　　var dfd = new $.Deferred();

　　　　//Do something async, then... 
　　　　//dfd.resolve();

　　　　return dfd.promise();

　　};

　　function doSomethingElse(){

　　　　$.when(doSomething()).then(//The next thing);

　　}



    // 获取父节点，并为它注册click事件。 false 表示事件在冒泡阶段触发（默认）
    document.getElementById("parent-list").addEventListener("click", function (e) {
        // event.target 代表的是子元素。toUpperCase 指的是转换为大写字母
        if (e.target && e.target.nodeName.toUpperCase == "LI") {
            // 真正的处理过程在这里
            console.log("List item ", e.target.id, " was clicked!");
        }
    }, false);



// 上方代码，为父节点注册click事件，当子节点被点击的时候，
// click事件会从子节点开始向上冒泡。父节点捕获到事件之后，
// 开始执行方法体里的内容：通过判断 e.target 拿到了被点击的子节点li。
// 从而可以获取到相应的信息，并作处理。

// 换而言之，事件是在父节点上注册的，参数为false，
// 说明事件是在冒泡阶段触发（往上传递），那就只有父节点能拿到事件，子节点是不可能拿到事件的。

function play() {
    let audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();//audio.play();// 播放
    }
    else {
        audio.pause();// 暂停
    }
}//之前写的控制radio的函数；

//div的onmouseover事件里
div.onmouseover=function(){
alert(this.id);//为什么你们都不喜欢用this?
};



{/* </script>
</head>
<body>
<ul class="parentWrap">
    <li class="menuGroup">
        <span class="groupTitle">标题1</span>
        <div>我是弹出来的div1</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题2</span>
        <div>我是弹出来的div2</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题3</span>
        <div>我是弹出来的div3</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题4</span>
        <div>我是弹出来的div4</div>
    </li>
</ul> */}


$(function () {
    //需求：鼠标点击span，让他下面的div显示出来。让其他的div隐藏。
    $(".parentWrap span").click(function () {
        $(this).next().show().parent("li").siblings("li").find("div").hide();

        // $(this).next().show();
        //让其他的隐藏
        //点击的span的父亲li，的所有的兄弟元素li，的孩子元素div全部隐藏。
        //$(this).parent("li").siblings("li").children("div").hide();
        //连式编程        
    });
})


var oForm = document.getElementById('login');
var oMsg = document.getElementById('msg');
var oBtn = document.getElementById('btn');


oBtn.onclick = function(event) {
    event.preventDefault();

    var data = new FormData(oForm);
    var oAjax = new XMLHttpRequest();

    oAjax.onreadystatechange = function() {

        if (oAjax.readyState == 4 && oAjax.status == 200) {
            var resdata = JSON.parse(oAjax.responseText);
            //console.log(data.get('name')); //IE不支持FormData的get方法
            //console.log(data.get('pwd'));
            console.log(resdata);
            if (resdata.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
                clearInterval(timer);
                oMsg.innerHTML = resdata.message;
                timer = setTimeout(function() {
                    oMsg.innerHTML = '';
                }, 3000)
            }
        }
    }


    oAjax.open('POST', '/carrots-admin-ajax/a/login', true);

    oAjax.send(data);
}


var xhr = new XMLHttpRequest();
xhr.open("post","login");
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send(formData);


//IE9+
var aValue = document.getElementsByTagName('input');
var oMsg = document.getElementById('msg');
var oBtn = document.getElementById('btn');
var timer = null;

oBtn.onclick = function(event) {
    event.preventDefault();

    var name = aValue[0].value;
    var pwd = aValue[1].value;
    var data = "name=" + name + "&pwd=" + pwd;
    var oAjax = new XMLHttpRequest();

    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4 && oAjax.status == 200) {
            var resdata = JSON.parse(oAjax.responseText);
            console.log(name);
            console.log(pwd);
            console.log(resdata);
            if (resdata.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
                clearInterval(timer);
                oMsg.innerHTML = resdata.message;
                timer = setTimeout(function() {
                    oMsg.innerHTML = '';
                }, 3000)
            }
        }
    }

    oAjax.open('POST', '/carrots-admin-ajax/a/login', true);

    oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    oAjax.send(data);
}



//IE10+
var oForm = document.getElementById('login');
var oMsg = document.getElementById('msg');
var oBtn = document.getElementById('btn');
var timer = null;

oBtn.onclick = function(event) {
    event.preventDefault();

    var data = new FormData(oForm);
    var oAjax = new XMLHttpRequest();

    oAjax.onreadystatechange = function() {

        if (oAjax.readyState == 4 && oAjax.status == 200) {
            var resdata = JSON.parse(oAjax.responseText);
            //console.log(data.get('name')); //IE不支持FormData的get方法
            //console.log(data.get('pwd'));
            console.log(resdata);
            if (resdata.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
                clearInterval(timer);
                oMsg.innerHTML = resdata.message;
                timer = setTimeout(function() {
                    oMsg.innerHTML = '';
                }, 3000)
            }
        }
    }

    oAjax.open('POST', '/carrots-admin-ajax/a/login', true);

    oAjax.send(data);
}

function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}



function loadXMLDoc() {
    var xmlhttp;
    var txt, x, i;

    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            xmlDoc = xmlhttp.responseXML;
            txt = "";
            x = xmlDoc.getElementsByTagName("ARTIST");
            for (i = 0; i < x.length; i++) {
                txt = txt + x[i].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("myDiv").innerHTML = txt;
        }
    }
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
}

