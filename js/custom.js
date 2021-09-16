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
            top: 70,
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

//Number Count start

const counters = document.querySelectorAll('.counter')


counters.forEach(counter => {
    counter.innerText = '0'

    const
        updateCounter = () => {
            const target = +counter.getAttribute("data-link");
            const c = +counter.innerText
            const increment = target / 400

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter, 1)
            } else {
                counter.innerText = target
            }
        }


    updateCounter()
})


// Text animation

// const title = document.getElementById("title")
// const text = 'Paint your portrait'
// let idx = 1
// let speedEl = 90

// function writeText() {
//     title.innerText = text.slice(0, idx)

//     idx++

//     if (idx > text.length) {
//         idx = 30
//     }

//     setTimeout(writeText, speedEl)
// }

// writeText()

// Text animation end

//dance-picture animation



