// skipNavi
var $skip_a = $("#skipNavi a");

$skip_a.on("focusin", function () {
    $(this).css({ top: 0 });
});

$skip_a.on("focusout", function () {
    $(this).css({ top: -40 });
});

//gbn menu

var $header = $("#header");
var $gnb = $("#gnb");
var $gnb_li = $gnb.children("li");
var $gnb_li_ul = $gnb_li.children("ul");
var speed = 500;
var ht_max = 0;


getSubMaxHeight();

function getSubMaxHeight() {
    $gnb_li.each(function (index) {
        var current_ht = $(this).find("ul").height();
        ht_max = Math.max(ht_max, current_ht);
    });
}
$header.on("mouseenter", openSub);
$header.on("mouseleave", closeSub);

function openSub() {
    $header.prepend(
        $("<div class='bgGnb'>").css({
            width: "100%",
            height: ht_max,
            position: "absolute",
            top: 76,
            left: 0,
            backgroundColor: '#fff',
            zIndex: 2,
            display: 'none'
        })
    );

    $(".bgGnb").stop().slideDown(speed);
    $gnb_li_ul.stop().slideDown(speed);

}

function closeSub() {
    $(".bgGnb").stop().slideUp(speed, function () {
        $(this).remove();
    });
    $gnb_li_ul.stop().slideUp(speed);
}

//2depth메뉴에 마우스 이동시 1depth메뉴 활성화 유지
$gnb_li.on("mouseenter", function () {
    $(this).children("a").addClass("on");
});

$gnb_li.on("mouseleave", function () {
    $(this).children("a").removeClass("on");
});

// tab menu start
var $btn = $("#tab dt");
var $box = $("#tab dd")

$btn.on("click", function (e) {
    e.preventDefault();

    var target = $(this).children("a").attr("href");
    var isOn = $(this).children("a").hasClass("active");

    if (isOn) return;

    $("#tab dt a").removeClass("active")
    $(this).children("a").addClass("active");
    $box.hide();
    $(target).show();
});
//tab menu end

var btnCall = document.querySelector(".btnCall");
var menuMo = document.querySelector(".menuMo");
btnCall.onclick = function () {
    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
};
//menuMo end


//#fnq text underline 
$("#fnq .text li").on("click", function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");


})
//F&Q slide menu start
var $frame = $("#fnq .wrap dl");
var $btns = $frame.find("dt");
var $boxs = $frame.find("dd");
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
