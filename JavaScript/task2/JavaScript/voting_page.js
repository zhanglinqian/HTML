//关闭按钮    //没定义      

// var    myfallback = document.getElementById("fallback");       // 获取返回链接
//     myterminate = document.getElementById("terminate");     //关闭按钮      //没定义


/*******************投票页*********************/

//天数为循环递增 初始 为  0;


// days: '',      记录天数
// id: [0 ~ N],    ID编号
// name: '平民',   身份     平民 或 杀手
// state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生 
// HowToDie:''    出局方式  被杀死 || 被投死
//  { days: '', id: i, name: '平民', state: '1' ,HowToDie:''}

var killer = [];              //  玩家 身份证
    killerNumber = 0;         //  杀手 人数
    civiliansNumber = 0;      //  平民 人数
var days = 0 ;                //  日期 天数
var control = 'off';          //  控制页面跳转  off 为不能跳转  ON 为能跳转   判断条件为 杀人 后能跳转
var myreordering = localStorage.getItem("myreordering");  //读取 身份 字符串
    reordering = JSON.parse(myreordering);                //转取 身份 字符串换为  数组
var mydays = localStorage.getItem("days");                //读取 日期  字符串
      days =  0 || JSON.parse(mydays)                     //转取 日期   字符串换为  数字

var myKILLER = localStorage.getItem("killer");            //读取 玩家状态 字符串
    mykiller = JSON.parse(myKILLER)                       //转取 玩家状态   字符串换为  数组   
    if (mykiller != null){                                //判断 玩家状态 数组 是否为 空  
        var plays = mykiller.length
        for(var i = 0; i < plays; i++ ){
        killer.push(mykiller[i])
        }; 
    };

//  2019年8月10号 晚上十点12分  任务进行到可以 判断玩家状态 杀手平民  还没做实时渲染玩家状态 投票阶段和没做。


var rgl = reordering.length; //读取 身份 数组长度
$(function () {               //  动态生成玩家
    var identity = undefined;
    var empty = '';
    for (var i = 0; i < rgl; i++) {
        identity = reordering[i].name;
        if(reordering[i].name === '平民'){
            civiliansNumber++
        } else if (reordering[i].name === '杀手'){
            killerNumber++
        };
        if(reordering[i].state === 0){
            empty = 'content-color';
        };
        var box =   '<div class="content-items' + empty + '">' +
                        '<div id="box-'+[i]+'">' +
                            '<div>' +
                                '<p>' + identity + '</p>' +
                                '<p>' + (i + 1) + '号' + '</p>' +
                            '</div>' +
                            '<div>' +
                                '<img src="../image/刀.png" width="25px">' +
                            '</div>' +
                        '</div>' +
                    '</div>'
        $('.content').append(box);    //   通过 append 添加盒子
    };
});

function kill(b) {     // 'Kill'   杀手杀人
    if( reordering[b].state === '1'&& reordering[b].name !== '杀手' ){     
        killer.push({ days: '', id: b[0], name: '平民', state: '0' ,HowToDie:'杀手杀死'})
        control = 'ON';
    }else if(reordering[b].name === '杀手'){
        alert('大哥，自己人。')
    }else if(reordering[b].state === '0'){
        alert('本人已死有事烧香')
    }else {
        alert('系统崩溃')
    }
}

function vote(b) {     // 'Vote'    投票表决
    // if( reordering[b].state === '1' ){
    //     killer.push({ days: '', id: b, name: '平民', state: '1' ,HowToDie:'投死'})
    // } else if (reordering[b].state === '1'){
    //     killer.push({ days: '', id: b, name: '平民', state: '1' ,HowToDie:'投死'})
    // } else if (reordering[b].state === '0' ){
    //     alert('本人已死有事烧香')
    // } else {
    //     alert('系统崩溃')
    // }
    switch (reordering[b].state) {
        case '1': 
        if(reordering[b].name === '杀手'){
            killer.push({ days: '', id: b[0], name: '杀手', state: '0' ,HowToDie:'投死'})
            control = 'ON';
            days++
        } else if(reordering[b].name === '平民'){
            killer.push({ days: '', id: b[0], name: '平民', state: '0' ,HowToDie:'投死'})
            control = 'ON';
            days++
        };
        break;
        case '0': alert('本人已死有事烧香')
        break;
        default: alert('系统崩溃')
    }
}

function stores() {    //玩家状态 储存数据localStorage.setItem("days",aaa)       
    var aaa = JSON.stringify(days); 
        localStorage.setItem("days",aaa)          //存入  天数
    var sss = JSON.stringify(killer);             
        localStorage.setItem("killer",sss)        //存入  玩家状态
}

var id = undefined;    //储存玩家身份 ID
$(function () {
    $(".content-items").click(function (event) {
        var target = $(event.target);
        var Id = $(target).parent().parent().attr('id');   //读取 ID 序号
        id = Id;
    });
});


var state = localStorage.getItem("state");    //判断是投票阶段还是杀人阶段 'Kill'杀手杀人   //'Vote'投票表决
$('#but').click(function () {   //  确定按钮
    if (id != undefined) {
        var a = id;
        var test = /\d+/g;
        var t = a.match(test);   //检索玩家ID返回其中的的  数字
        var b = t
        switch (state) {
            case 'Kill':
                kill(b)  // 杀手杀人阶段
                break;
            case 'Vote':
                vote(b)  // 投票表决阶段
                break;
            default: alert('系统崩溃')
        }
        if (killerNumber >= civiliansNumber) {                  //判断游戏是否结束
            window.location.href = "../html/end.html"           // 页面跳转  结束页
        } else if(control === 'ON') {
            window.location.href = "../html/Judge_taiben.html" 
        }
    stores()  //储存数据
    } else {
        console.log('读取的ID为'+ id)
    };
    console.log('天数：' + days)
    console.log('死亡：'+ killer)
    console.log(state)
});

















$(document).ready(function () {
    // 执行代码
});
//或者
$(function () {
    // 执行代码
});

//入口函数:
//JavaScript 
window.onload = function () {
    // 执行代码
}
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
$("table").on("click", "td", function () {
    $(this).toggleClass("click");
});

//如果要取消事件的绑定，就使用off()方法。
$(document).off("click", "td");





// var fm = new StateMachine({
//     init: 'live',
//     transitions: [
//         { name: 'melt',     from: 'live',  to: 'die' },
//     ],
//     methods: {
//         onMelt:     function() { console.log('I melted')    },
//     }
// });









