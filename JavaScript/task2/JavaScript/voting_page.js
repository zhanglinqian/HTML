//关闭按钮    //没定义      

// var    myfallback = document.getElementById("fallback");       // 获取返回链接
//     myterminate = document.getElementById("terminate");     //关闭按钮      //没定义

//  2019年8月10号 晚上十点12分  任务进行到可以 判断玩家状态 杀手平民  还没做实时渲染玩家状态 投票阶段和没做。
/*******************投票页*********************/

//天数为循环递增 初始 为  0;


// days: '',      记录天数
// id: [0 ~ N],    ID编号
// name: '平民',   身份     平民 或 杀手
// state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生 
// HowToDie:''    出局方式  被杀死 || 被投死
//  { days: '', id: i, name: '平民', state: '1' ,HowToDie:''}



var killer = [];              //  玩家 身份证
var INDEX = [];               //  结果 索引 数组
var killerNumber = 0;         //  杀手 人数
var civiliansNumber = 0;      //  平民 人数
var days = 1 ;                //  日期 天数

var state = localStorage.getItem( "state" );    //判断是投票阶段还是杀人阶段 'Kill'杀手杀人   //'Vote'投票表决

var myreordering = localStorage.getItem( "myreordering" );  //读取 身份 
    reordering = JSON.parse( myreordering );             
var rgl = reordering.length; //读取 身份 数组长度
    for( var i = 0; i < rgl; i++ ){
        killer.push( reordering[i] )
        }; 
var mydays = localStorage.getItem( "days" );                //读取 日期  
    myDays = JSON.parse( mydays )
    if ( myDays > days ){ days = myDays };                  

var myKILLER = localStorage.getItem( "killer" );            //读取 玩家状态
    mykiller = JSON.parse( myKILLER )                        
    if ( mykiller != null ){                                //判断 玩家状态 数组 是否为 空  
        for( var i = 0; i < mykiller.length; i++ ){
        killer[i] = mykiller[i] 
        }; 
    };
var MYINDEX = localStorage.getItem( "INDEX" );            //读取 结果索引
    myINDEX = JSON.parse( MYINDEX )                        
    if ( myINDEX != null ){                                //判断 结果索引 数组 是否为 空  
        for( var i = 0; i < myINDEX.length; i++ ){
            INDEX.push( myINDEX[i] ) 
        }; 
    };

function stores() {    //  储存  数据        
    var aaa = JSON.stringify(days);
    localStorage.setItem("days", aaa)                   //存入  天数

    var bbb = JSON.stringify(killer);
    localStorage.setItem("killer", bbb)                 //存入  玩家状态

    var ccc = JSON.stringify(killerNumber);
    localStorage.setItem("killerNumber", ccc)           //存入  杀手人数

    var ddd = JSON.stringify(civiliansNumber);
    localStorage.setItem("civiliansNumber", ddd)        //存入  平民人数

    var eee = JSON.stringify(INDEX);
    localStorage.setItem("INDEX", eee)                  //存入  结果索引
}


$(function () {               //  动态生成玩家
    var identity = undefined;
    var empty = undefined;
    for (var i = 0; i < rgl; i++) {
        //killer.push(reordering[i])
        identity = reordering[i].name;
        if(reordering[i].name === '平民'){
            civiliansNumber++
        } else if (reordering[i].name === '杀手'){
            killerNumber++
        };
        if( killer[i].state === '1' ){
            empty = '';
        } else if (killer[i].state === '0'){
            empty = 'content-color';
        };
        var box =   '<div class="content-items ' + empty + '" id="box-'+[i]+'">' +
                        '<div>' +
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
var kNumber = localStorage.getItem("killerNumber");          
var cNumber = localStorage.getItem("civiliansNumber");      
if ( kNumber !== null && cNumber !== null){
killerNumber =  Number (kNumber)          // 杀手 人数
civiliansNumber = Number(cNumber)        //  平民 人数
    };
});

var id = undefined;    //储存玩家身份 ID
$(function () {
    $(".content-items").click(function (event) {
        var target = $(event.target);
        var Id = $(target).parent().parent().parent().attr('id');   //读取 ID 序号
        id = Id;
        console.log(id)
    });
});

var control = undefined;            //  控制页面跳转  off 为不能跳转  ON 为能跳转   判断条件为 杀人 后能跳转
$('#but').click(function () {       //  确定按钮
    control = 'off';
    if (id != undefined) {
        var a = id;
        var test = /\d+/g;
        var t = a.match(test);   //检索玩家ID返回其中的的  数字
        var b = Number(t[0]);
        switch (state) {
            case 'Kill':
                kill(b)  // 杀手杀人阶段
                break;
            case 'Vote':
                vote(b)  // 投票表决阶段
                break;
            default: alert('系统崩溃')
        }

    console.log('天数：' + days)
    console.log('平民人数：' + civiliansNumber)
    console.log('杀手人数：'+ killerNumber)

    stores()        //储存数据
    gameStatus ()   //判断游戏是否结束
    };
});

function kill(b) {     // 'Kill'   杀手杀人
    if ( killer[b].state === '0') {
        alert ('本人已死有事烧香')
    } else if (killer[b].name === '杀手'){
        alert('大哥，自己人。')
    } else if( killer[b].state === '1' && killer[b].name === '平民' ){
        killer[b].days = days
        killer[b].state = '0';
        killer[b].HowToDie = '杀死';
        civiliansNumber--;
        control = 'ON';
        INDEX.push(b)
    } else{
        alert ('系统崩溃')
    }
}
function vote(b) {     // 'Vote'    投票表决
    if (killer[b].state === '0') {
        alert('本人已死有事烧香')
    } else if (killer[b].state === '1' && killer[b].name === '杀手') {
        killer[b].days = days
        killer[b].state = '0';
        killer[b].HowToDie = '投死';
        killerNumber--;
        control = 'ON';
        days++
        INDEX.push(b)
    } else if (killer[b].state === '1' && killer[b].name === '平民') {
        killer[b].days = days
        killer[b].state = '0';
        killer[b].HowToDie = '投死';
        civiliansNumber--;
        control = 'ON';
        INDEX.push(b)
        days++
    } else {
        alert('系统崩溃')
    }
}

function gameStatus () {        //判断游戏是否结束
    if ( killerNumber === 0 ) {                       
        window.location.href = "../html/end.html"           // 页面跳转  结束页  平民获胜
    } else if( killerNumber >= civiliansNumber ) {
        window.location.href = "../html/end.html"           // 页面跳转  结束页   杀手获胜
    } else if( control === 'ON' ) {
        window.location.href = "../html/Judge_taiben.html"  // 页面跳转 法官台本 继续游戏
    }
}








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

// var name = killer[b].name
// var state = killer[b].state



// var fm = new StateMachine({
//     init: 'live',
//     transitions: [
//         { name: 'melt',     from: 'live',  to: 'die' },
//     ],
//     methods: {
//         onMelt:     function() { console.log('I melted')    },
//     }
// });


// var name = killer[b].name
// var state = killer[b].state
//     switch (name, state) {
//         case '平民' ,'1': 
//             killer[b].days = days
//             killer[b].state = '0';
//             killer[b].HowToDie = '杀死';
//             civiliansNumber --;
//             control = 'ON';
//             days++
//         break;
//         case '杀手' , '1':
//             alert('大哥，自己人。')
//         break;
//         case '平民'||'杀手' ,'0'  : //'杀手'
//             alert('本人已死有事烧香')
//         default: 
//         alert('系统崩溃')
//     }




    // switch (name,state) {
    //     case '杀手' ,'1': 
    //         killer[b].days = days
    //         killer[b].state = '0';
    //         killer[b].HowToDie = '投死';
    //         killerNumber--;
    //         control = 'ON';
    //         days++
    //     break;
    //     case '平民' , '1':
    //         killer[b].days = days
    //         killer[b].state = '0';
    //         killer[b].HowToDie = '投死';
    //         civiliansNumber --;
    //         control = 'ON';
    //         days++
    //     break;
    //     case '平民'||'杀手','0':
    //         alert('本人已死有事烧香')
    //     default: 
    //     alert('系统崩溃')
    // }


