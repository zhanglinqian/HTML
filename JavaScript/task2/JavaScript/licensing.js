
 //关闭按钮    //没定义

var myfallback = document.getElementById("fallback");     // 获取返回链接
        mypage = document.getElementById("page");         // 翻页按钮
   myterminate = document.getElementById("terminate");    //关闭按钮    //没定义
var mysort = document.getElementById("sort");             // 身份排序
   mymask0 = document.getElementById("mask0");            // 遮罩
   mymask1 = document.getElementById("mask1");            // 身份展示卡片
myidentity = document.getElementById("identity");         // 身份展示详细

myfallback.onclick = function () { 
    window.location.href = "../html/player_match.html";   // 返回主页
}  
window.onload = function () {
    mypage.addEventListener("click", page);                //点击翻页
};                 

    // days: '',      记录天数
    // id: [0 ~ N],    ID编号
    // name: '平民',   身份     平民 或 杀手
    // state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生 
    // HowToDie:''    出局方式  被杀死 || 被投死

var myreordering = localStorage.getItem("myreordering");  //读取
    reordering = JSON.parse(myreordering);              //重新转换为数组
var rgl = reordering.length;
console.log(reordering )
console.log(rgl)


var identity = [];
$(function () {
    for (var i = 0; i < rgl; i++) {
        identity.push( reordering[i].name );
    };
    console.log(identity)
});

    var k = 1;     //点击计数
    var j = 0;     //身份计数
function page() {
    // let k = 1;     //点击计数
    // let j = 0;     //身份计数
    
    if (k <= rgl * 2 - 1) {
        mysort.innerHTML = j + 1;
        if (k % 2 === 1) {
            mymask0.style.display = "none";   // 遮罩
            mymask1.style.display = "block";  // 身份展示卡片
                 mypage.innerHTML = "查看下一位"
             myidentity.innerHTML = identity[j];    // 身份展示详细
            j++   //身份计数
        } else {
            mymask0.style.display = "block";   // 遮罩
            mymask1.style.display = "none";    // 身份展示卡片
                 mypage.innerHTML = "查看" + (j + 1) + "号身份";
        }
        k++      //点击计数
    }
    if (k === rgl*2 ) {
        mypage.innerHTML = "法官查看";
          mypage.onclick = function () {
    window.location.href = "../html/voting_page.html";   // 翻页按钮
        }
    }
}







//console.log(reordering)
//console.log(reordering.length)
//console.log(typeof reordering)






