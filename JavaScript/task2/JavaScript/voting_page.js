var myfallback = document.getElementById("fallback");
    myfallback.onclick = function() {
        window.location.href = "../html/licensing.html";
    }
var myreordering = localStorage.getItem("myreordering");  //读取
      reordering = JSON.parse(myreordering);              //重新转换为数组
var rgl = reordering.length;
var identity = [];                                        //遍历成身份数组
$(function () {
    for (var i = 0; i < rgl; i++) {
        if (reordering[i] === 0) {
            identity.push( "平民" );
        } else {
            identity.push( "杀手" );
        }
    };
});
$(function(){
    for (i = 0; i < rgl; i++) {
        var box =  '<div class=\"content-items\">\n'+
                '<div>\n'+
                    '<div>\n'+
                        '<p>'+ identity[i] + '</p>\n'+
                        '<p>'+ (i+1) +'号' + '</p>\n'+
                    '</div>\n'+
                    '<div>'+
                        '<img src=\"../image/刀.png\" width=\"25px\">'
                    '</div>\n'+
                '</div>'
            '</div>'
        $('.content').append(box);//通过append将盒子一个一个的往文档里面装
}
})
