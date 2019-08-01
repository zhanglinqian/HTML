var myfallback = document.getElementById("fallback");      // 获取返回链接
        mypage = document.getElementById("page");          // 翻页按钮
myfallback.onclick = function () {                     // 返回主页
    window.location.href = "../html/player_match.html";
}
var myreordering = localStorage.getItem("myreordering");  //读取
reordering = JSON.parse(myreordering);              //重新转换为数组

var mysort = document.getElementById("sort");             // 身份排序
mymask0 = document.getElementById("mask0");            // 遮罩
mymask1 = document.getElementById("mask1");            // 身份展示卡片
myidentity = document.getElementById("identity");         // 身份展示详细
/*//////*/
window.onload = function () {
    mypage.addEventListener("click", page);             //点击翻页
}

var rgl = reordering.length;
var identity = [];
$(function () {
    for (var i = 0; i < rgl; i++) {
        if (reordering[i] === 0) {
            identity.push("平民");
        } else {
            identity.push("杀手");
        }
    };
});

var k = 1;
var j = 0
function page() {
    if (k <= rgl * 2 - 1) {
        mysort.innerHTML = j + 1;
        if (k % 2 === 1) {
            mymask0.style.display = "none";   // 遮罩
            mymask1.style.display = "block";  // 身份展示卡片
            mypage.innerHTML = "查看下一位"
            myidentity.innerHTML = identity[j];    // 身份展示详细
            j++
            console.log(j)
        } else {
            mymask0.style.display = "block";   // 遮罩
            mymask1.style.display = "none";    // 身份展示卡片
            mypage.innerHTML = "查看" + (j + 1) + "号身份";
        }
        k++
    }
    if (j === rgl ) {
        mypage.onclick = function () {
            mypage.innerHTML = "进入投票页";
            //window.location.href = "../html/voting_page.html";// 翻页按钮
        }
    }

    console.log(k)
}







//console.log(reordering)
//console.log(reordering.length)
//console.log(typeof reordering)






