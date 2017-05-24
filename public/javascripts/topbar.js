//点击菜单栏
// 1、菜单栏变成红色
// 2、弹出模态框cover-part 有由大变小效果
// 3、ct背景 opacity 变成0.1  z-index变成-2
var $menuIcon = $(".menu-icon"), $coverPart = $(".cover-part"), $wrap = $(".wrap");
function doNotCover() {
    $menuIcon.removeClass("menu-change");
    $coverPart.removeClass("cover-part-change");
    $wrap.removeClass("ct-change");
}
$menuIcon.on("click", function () {
    function goToCover() {
        $menuIcon.addClass("menu-change");
        $coverPart.addClass("cover-part-change");
        $wrap.addClass("ct-change");
    }
    if ($menuIcon.hasClass("menu-change")) {
        doNotCover();
    } else {
        goToCover();
    }

});
$coverPart.on("click",function () {
    if ( !($menuIcon.hasClass("menu-change"))) {
       return ;
    }else {
        doNotCover();
    }
})

$(".go-back-icon").on("click", function () {
    window.history.go(-1);
});