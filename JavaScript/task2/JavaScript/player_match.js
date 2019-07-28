var myback_to_home = document.getElementById("back_to_home");     //获取返回链接
    myback_to_home.onclick = function() {                             
        window.location.href = "../html/home.html"; //页面跳转
}
var  myInputText = document.getElementById("input_text");       //输入人数
    myInputRange = document.getElementById("input_range");      //滑动条
           myadd = document.getElementById("add");              //加
      myreducing = document.getElementById("reducing");         //减
         mysubmi = document.getElementById("submi");            //提交按钮
        mykiller = document.getElementById("killer");           //杀手
     mycivilians = document.getElementById("civilians");        //平民
window.onload = function() {
    myInputText.addEventListener("change",myfun1);    //改变输入框内容时自动判断
   myInputRange.addEventListener("input",myfun2);     //滑动条
          myadd.addEventListener("click",myfun3);     //加
     myreducing.addEventListener("click",myfun4);     //减
}
function myfun1() {
    if (isNaN(myInputText) && myInputText.value >=4 && myInputText.value <=18){
       myInputRange.value = myInputText.value;     //点击判断
        console.log(myInputRange.value)
    } else {
        alert("请输入玩家人数");
    }
}
function myfun2() {
    myInputText.value = myInputRange.value;  //同步滑动条和输入框
}
function myfun3() {
    myInputRange.value++;
    if(isNaN(myInputText) && myInputText.value >= 18 ){
        alert("请输入玩家人数");
    }else {
        myInputText.value = myInputRange.value;//同步滑动条和输入框
    };
}
function myfun4() {
    myInputRange.value--;
    if(isNaN(myInputText) && myInputText.value <= 4 ){
        alert("请输入玩家人数");
    } else {
        myInputText.value = myInputRange.value;//同步滑动条和输入框
    }
}
myInputText.addEventListener("change", function(){
    if(myInputText.value >= 4 && myInputText.value <= 6){
        mykiller.innerHTML = "1";
        mycivilians.innerHTML = myInputText.value - 1;
    } else if(myInputText.value >= 7 && myInputText.value <= 10) {
        mykiller.innerHTML = "2";
        mycivilians.innerHTML = myInputText.value - 2;
    } else if(myInputText.value >= 11 && myInputText.value <= 15) {
        mykiller.innerHTML = "3";
        mycivilians.innerHTML = myInputText.value - 3;
    } else if(myInputText.value >= 16 && myInputText.value <= 18) {
        mykiller.innerHTML = "4";
        mycivilians.innerHTML = myInputText.value - 4;
    }
});
document.addEventListener("click", function(){
    if(myInputText.value >= 4 && myInputText.value <= 6){
        mykiller.innerHTML = "1";
        mycivilians.innerHTML = myInputText.value - 1;
    } else if(myInputText.value >= 7 && myInputText.value <= 10) {
        mykiller.innerHTML = "2";
        mycivilians.innerHTML = myInputText.value - 2;
    } else if(myInputText.value >= 11 && myInputText.value <= 15) {
        mykiller.innerHTML = "3";
        mycivilians.innerHTML = myInputText.value - 3;
    } else if(myInputText.value >= 16 && myInputText.value <= 18) {
        mykiller.innerHTML = "4";
        mycivilians.innerHTML = myInputText.value - 4;
    }
});









console.log(killer);
console.log(civilians);




/*mysubmit.onclick = function() {
    var  number = [];//人数排序
    for (var i = 0; i < myInputText; i++){
        number.push(i);
    };
console.log(number)
    var mynumber = []//乱序人数排序
    for (var a = 0; a < number.length; a++) {
        var ran = Math.floor(Math.random()*( myInputText- a));
        mynumber.push(number[ran]);
        number[ran] = number[number.length - a - 1];
    }
console.log(mynumber)
}*/






