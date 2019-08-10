//关闭按钮    //没定义

    $('#terminate').click(function () {});        //关闭按钮    //没定义
    $('#fallback').click(function () {
        window.location.href ="../html/voting_page.html"   // 返回法官台本
    });

    // var myreordering = localStorage.getItem("myreordering");  //读取
    // reordering = JSON.parse(myreordering);              //重新转换为数组
/********************法官台本************************/




var sss = '<div class="days">'+
                '<div class="days-top box-rgba">'+
                    '<p>第一天</p>'+
                '</div>'+
                '<div class="days-bottom box-rgba">' +
                    '<div class="days-bottom-left">'+
                        '<div></div>'+
                        '<div><img src="../image/月.png"></div>'+
                        '<div><img src="../image/日.png"></div>'+
                    '</div>'+
                    '<div class="days-bottom-right">'+
                    '<div>'+
                        '<div class="days-triangle"></div>'+
                        '<p id="options01">杀手杀人</p>'+
                    '</div>'+
                    '<div>'+[1]+'号被杀手杀死，真实身份是平民</div>'+
                    '<div>'+
                        '<div class="days-triangle"></div>'+
                        '<p id="options02">亡灵发表遗言</p>'+
                    '</div>'+
                    '<div>'+
                        '<div class="days-triangle"></div>'+
                        '<p id="options03">玩家依次发言</p>'+
                    '</div>'+
                    '<div>'+
                        '<div class="days-triangle"></div>'+
                        '<p id="options04">全民投票</p>'+
                    '</div>'+
                '</div>'+
            '</div>'
    $('.box').append(sss);//通过append将盒子一个一个的往文档里面装

$('#options01').click(function () {
    localStorage.setItem("state",'Kill')        //存入  玩家状态
    window.location.href = "../html/voting_page_main.html"
});

$('#options04').click(function () {
    //var sss = JSON.stringify('Vote');             
    localStorage.setItem("state",'Vote')        //存入  玩家状态
    window.location.href = "../html/voting_page_main.html"
});


