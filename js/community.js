

//#fnq text underline 
$("#fnq .text li").on("click", function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");


})
//F&Q slide menu start
var $frames = $("#fnq .wrap dl");
var $btns = $frames.find("dt");
var $boxs = $frames.find("dd");
var speed = 500;
var enableClick = true;

$btns.on("click", function (e) {
    e.preventDefault();
    activation(this);
});

function activation(self) {
    var isOn = $(self).hasClass("on");

    $btns.removeClass("on");
    $boxs.slideUp(speed);

    if (isOn) {
        $(self).removeClass("on");
        $(self).stop().next().slideUp(speed, function () {
            enableClick = true;
        });
    } else {
        $(self).addClass("on");
        $(self).stop().next().slideDown(speed, function () {
            enableClick = true;
        });
    }
}
