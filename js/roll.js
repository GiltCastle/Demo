var $li = $(".b_list ul li");//获取.b_list里面的所有li，放到$li这个变量里面
var len = $li.length-1;
var _index = 0;//li的索引
var $img = $(".faded .rap");//同上
var $btn = $(".b_btn div");

var timer = null;

//  alert(typeof timer); timer是一个对象

$li.hover(function(){
    $(this).addClass("l_hover");//指向li添加样式
},function(){
    $(this).removeClass("l_hover");//指向li删除样式
});


//点击事件
$li.click(function(){
    _index = $(this).index();
    //获取li的下标，改变样式
    //$li.eq(_index).addClass("l_click").siblings().removeClass("l_click");
    //获取图片的下标，实现淡入淡出
    //$img.eq(_index).fadeIn().siblings().fadeOut();
    play();
});

//封装函数
function play(){
    //获取li的下标，改变样式
    $li.eq(_index).addClass("l_click").siblings().removeClass("l_click");
    //获取图片的下标，实现淡入淡出
    $img.eq(_index).fadeIn().siblings().fadeOut();
}
//定时轮播
function auto(){
    //把定时器放进timer这个对象里面
    timer = setInterval(function(){
        _index++;
        if(_index > len){
            _index = 0;
        }
        play();
    },1000);
}
auto();

//当我移上d_main的时候停止轮播
$(".faded").hover(function(){
    clearInterval(timer);
},function(){
    //移开重新调用播放
    auto();
});

$(".banner").hover(function(){
   $('.b_left,.b_right').css('display','block')
},function(){
    $('.b_left,.b_right').css('display','none')
});
