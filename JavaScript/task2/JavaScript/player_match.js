//关闭按钮    //没定义

var     myfallback = document.getElementById("fallback");        // 获取返回链接
       myterminate = document.getElementById("terminate");     //关闭按钮    //没定义
           mysubmi = document.getElementById("submi");            // 提交按
              text = document.getElementById("input_text");       // 输入人数
             range = document.getElementById("input_range");      // 滑动条
             myadd = document.getElementById("add");              // 加
        myreducing = document.getElementById("reducing");         // 减
          mykiller = document.getElementById("killer");           // 杀手
       mycivilians = document.getElementById("civilians");        // 平民

window.onload = function() {
           text.addEventListener("change",myfun1);    // 改变输入框内容  自动判断
          range.addEventListener("change",myfun2);    // 滑动条
          myadd.addEventListener("click",myfun3);     // 加
     myreducing.addEventListener("click",myfun4);     // 减
        mysubmi.addEventListener("click",mykillers);  //本地储存
        mysubmi.addEventListener("click",stores);     //本地储存

    text.addEventListener("change", mykillers);
    range.addEventListener("change", mykillers);
    myadd.addEventListener("click",mykillers);
myreducing.addEventListener("click",mykillers);
}
function myfun1() {
    if (isNaN( text ) && text.value >= 4 && text.value <= 18){
        range.value = text.value;      // 改变输入框内容  自动判断
    } else {
        alert("请输入正确玩家人数");
    }
}
function myfun2() {
    text.value = range.value;          // 滑动条
} 
function myfun3() {
    range.value++;
    if( text.value >= 18 ){
        alert("请输入正确玩家人数");
    } else {
        text.value = range.value;     // 加
    };
}
function myfun4() {
    range.value--;
    if( text.value <= 4 ){
        alert("请输入正确玩家人数");
    } else {
        text.value = range.value;      // 减
    }
}
function mykillers(){
    var killer = Math.round((text.value)*23/100);      //获取杀手人数
        civilians = text.value - killer;               //获取平民人数
    mykiller.innerHTML = killer;                       //输出杀手数量
 mycivilians.innerHTML =  civilians;                   //输出平民数量
var  mynumber = [];                                    //人数排序
var reordering = [];                                   //重新排序
    for (var i = 0; i < range.value; i++){
        mynumber.push(0);                               //平民用数字“ 0 ” 代替
    };
    for (var a = 0; a < killer; a++) {                  //替换前“ N ”平民为杀手
        mynumber[a] = 1;                                //杀手用数字“ 1 ” 代替
    }
for ( var b = 0; b < text.value; b++ ) {
    var aaa = Math.floor(Math.random()*(mynumber.length - b));
    reordering.push(mynumber[aaa]);
    mynumber[aaa] = mynumber[mynumber.length - b - 1];
}
return reordering
}
        myfallback.onclick = function() {                             
    window.location.href = "../html/home.html";}       // 返回主页
function stores() {
    var sss = JSON.stringify(mykillers());             //转换为字符串
        localStorage.setItem("myreordering",sss)       //存入
    window.location.href = "../html/licensing.html";   //发牌
}




// function mykillers() {
//     if(Text.value >= 4 && myInputText.value <= 6){
//         mykiller.innerHTML = "1";
//         mycivilians.innerHTML = myInputText.value - 1;
//     } else if(myInputText.value >= 7 && myInputText.value <= 10){
//         mykiller.innerHTML = "2";
//         mycivilians.innerHTML = myInputText.value - 2;
//     } else if(myInputText.value >= 11 && myInputText.value <= 15){
//         mykiller.innerHTML = "3";
//         mycivilians.innerHTML = myInputText.value - 3;
//     } else if(myInputText.value >= 16 && myInputText.value <= 18){
//         mykiller.innerHTML = "4";
//         mycivilians.innerHTML = myInputText.value - 4;
//     }
// }






