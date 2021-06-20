var $frame = $("#fnq .inner .wrap");
var $btns = $frame.find("dt");
var speed = 500;
var enableClick = true;

$btns.on("click", function (e) {
    e.preventDefault();
    if (enableClick) {
        activation(this);
        enableClick = false;
    }

});

function activation(el) {
    var isOn = $(el).hasClass("on");

    if (isOn) {
        $(el).siblings().removeClass("on");
        $(el).next("dd").slideUp(speed, function () {
            enableClick = true;
        });
    } else {
        $(el).addClass("on");
        $(el).next("dd").slideDown(speed, function () {
            enableClick = true;
        });
    }
}