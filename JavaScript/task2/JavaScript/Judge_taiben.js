//关闭按钮    //没定义

    $('#terminate').click(function () {});        //关闭按钮    //没定义
    $('#fallback').click(function () {
        window.location.href ="../html/voting_page.html"   // 返回法官台本
    });

    // var myreordering = localStorage.getItem("myreordering");  //读取
    // reordering = JSON.parse(myreordering);              //重新转换为数组
/********************法官台本************************/


var killer = [];              //  玩家 身份证
// days: '',       天数    
// id: [0 ~ N],    ID 编号
// name: '平民',   身份     平民 或 杀手
// state: '' ,    生死状态  用  ‘ 0 ’ || ‘ 1 ’ 代替  0为死，1为生 
// HowToDie:''    出局方式  被杀死 || 被投死
//  { days: '', id: i, name: '平民', state: '1' ,HowToDie:''}
var INDEX = [];               //  结果 索引 数组
var days = 1 ;                //  日期 天数
var mystyle = [];             //  列表显示样式  原始数据
//var style = [];               //  列表显示样式  修改样式
// id: [0 ~ N],    ID编号
// one :  0  ||  1  ;  记录是杀人阶段盒子 的 高亮  变色   
// state: '' ,    状态  用  ‘ 0 ’ || ‘ 1 ’   判断 一轮游戏是否结束  结束全部变色  且 不能点击 。
//  { id: [0 ~ N], one: '0',  state: '0' }    // 初始状态


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
var STYLE = localStorage.getItem( "style" );            //读取 列表样式
    mySTYLE = JSON.parse( STYLE );

    if ( mySTYLE != null  ){
        for ( var i = 0; i < mySTYLE.length; i++ ) {
            mystyle.push(mySTYLE[i])
        }
    };
    if (mySTYLE == null){
        mystyle.push({ id:'初始版', one:'0',  state:'0' });
    }
function stores() {    //  储存  数据  
    var aaa = JSON.stringify(mystyle);
    localStorage.setItem("style", aaa)                   //存入  列表样式
}
//var mystyle = [];               //  列表显示样式  修改样式
// id: [0 ~ N],    ID编号
// one :  0  ||  1  ;  记录是杀人阶段盒子 的 高亮  变色   
// state: '' ,    状态  用  ‘ 0 ’ || ‘ 1 ’   判断 一轮游戏是否结束  结束全部变色  且 不能点击 。
//  { id: [0 ~ N], one: '0',  state: '0' }    // 初始状态

$(function(){
    var Digital = ['零','一','二','三','四','五','六','七','八','九','十']
    for ( var i = 0; i < days ; i ++) {
        var listBox = '<div class="days">'+
                '<div class="days-top box-rgba">'+
                    '<p>第'+ Digital[i+1] +'天</p>'+
                '</div>'+
                '<div class="days-bottom box-rgba">' +
                    '<div class="days-bottom-left">'+
                        '<div></div>'+
                        '<div><img src="../image/月.png"></div>'+
                        '<div><img src="../image/日.png"></div>'+
                    '</div>'+
                    '<div class="days-bottom-right"  id="options-' + [ i ] + '">'+
                        //
                        '<div>'+     
                            '<p class="days-triangle"></p>'+
                            '<p class="Kill">杀手杀人</p>'+
                        '</div>'+
              /* 1 */   '<div>'+[1]+'号被杀手杀死，真实身份是平民</div>'+ 
                        //
                        '<div>'+
                            '<p class="days-triangle"></p>'+
                            '<p >亡灵发表遗言</p>'+
                        '</div>'+
                        //
                        '<div>'+
                            '<p class="days-triangle"></p>'+
                            '<p>玩家依次发言</p>'+
                        '</div>'+
                        //
                        '<div>'+
                            '<p class="days-triangle"></p>'+
                            '<p class="Vote">全民投票</p>'+
                        '</div>'+
              /* 2 */   '<div>'+[1]+'号被杀手杀死，真实身份是平民</div>'+
                    '</div>'+
                '</div>'
            '</div>'+
    $('.box').append(listBox);   //通过append将盒子一个一个的往文档里面装
var ccc = '#options-'+[i]
var ddd = $(ccc).find('p').click(function(){});
var aaa = mystyle[i].one;
var bbb = mystyle[i].state;
    if ( aaa == '1') {
        var color = $( ccc ).find('div').first('div');
        color.find('p:odd').css("background-color","#147086");  // 用这个来循环 变色。
        color.find('p:even').css("border-right-color","#147086")
    };
    if ( bbb == '1') {
        var colo = $( ccc ).find('div');
            colo.find('p:odd').css("background-color","#147086");  // 用这个来循环 变色。
            colo.find('p:even').css("border-right-color","#147086")
    };
    }
});



var id = undefined;    //储存玩家身份 ID
$(function () {
    $(".days-bottom-right").click(function (event) {
        var target = $(event.target);
        var Id = $(target).parent().parent().attr('id');   //读取 ID 序号
        var id = Id;

        $('#'+id).find('p').click(function () {
            $(this).parent().find('p:odd').css("background-color", "#147086");    // 点击改变当前元素
            $(this).parent().find('p:even').css("border-right-color", "#147086")// 用这个来循环 变色
        });

        console.log(id)
    });
});

// $(function(){
// $('#'+id).find('p').click(function () {
//     $(this).parent().find('p:odd').css("background-color", "#147086");    // 点击改变当前元素
//     $(this).parent().find('p:even').css("border-right-color", "#147086")// 用这个来循环 变色
// });
// })


$(function () {
    //需求：鼠标点击span，让他下面的div显示出来。让其他的div隐藏。
    $(".days-top > p").click(function () {
            // $(this).next().show();
            // 让其他的隐藏
            // 点击的span的父亲li，的所有的兄弟元素li，的孩子元素div全部隐藏。
            // $(this).parent("li").siblings("li").children("div").hide();
            // 连式编程
        $(this).parent().next().show().parent().siblings("div").find(".days-bottom").hide();
    });
})



$(function(){
    $('.Kill').click(function () {    //  杀手杀人
        var id = $(event.target).parent().parent().attr('id');   //读取 ID 序号
        var t = id.match(/\d+/g);   //检索玩家ID返回其中的的  数字
        mystyle[days-1 ].id = t[0];
        mystyle[days-1 ].one = "1";
        console.log("id: "+ mystyle[days-1].id)
        stores()//存入  玩家状态
        console.log(id)
        localStorage.setItem("state",'Kill')
        window.location.href = "../html/voting_page_main.html"
    });
    $('.Vote').click(function () {         //  投票
        mystyle[days-1].state = "1";
        mystyle.push({ id:'', one:'0',  state:'0' });
        stores()//存入  玩家状态            
        localStorage.setItem("state",'Vote')   
        window.location.href = "../html/voting_page_main.html"
    });
})








// $(".days-top > p").click(function () {
// $(this).parent().find("p").css("background-color","yellow");   // 点击改变当前元素
// });
// $("p").eq(1).css("background-color","yellow");  // 用这个来循环 变色。









