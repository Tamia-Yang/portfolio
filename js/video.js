

function Youtube() {
    this.frame = $("#vidGallery .inner");
    this.key = "AIzaSyBweqMsDwEm6U8Hr2AxrAWwcB27pRbwsDY";
    this.playList = "PLCLKoygJfCLo08VXJ3EHeVdTl_TSkVII8";
    this.count = 9

    this.bindingEvent();
}

Youtube.prototype.bindingEvent = function () {
    this.callData();
    this.pop();
    this.closeBtn();
}

Youtube.prototype.pop = function () {
    $("body").on("click", "article a", function (e) {
        e.preventDefault();
        var vidIdd = $(this).attr("href");
        this.cratePop({
            width: "100%",
            height: "100vh",
            bg: "rgba(0,0,0,0.7)",
            vidIdd: vidIdd
        });
        $("body").css({ overflow: "hidden" });

    }.bind(this));
}

Youtube.prototype.closeBtn = function () {
    $("body").on("click", ".pop .close", function (e) {
        e.preventDefault();
        $(this).parent(".pop").remove();
        $("body").css({ overflow: "auto" });
    })

}

Youtube.prototype.cratePop = function (opt) {

    $("body").append(
        $("<aside class='pop'>").css({
            width: opt.width,
            height: opt.height,
            background: opt.bg,
            position: "fixed",
            padding: 100,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            boxSizing: "border-box",

        }).append(
            $("<a class='close'>").css({
                color: "#fff",
                position: "absolute",
                top: 20,
                right: 20
            }).text("close"),
            $("<img src='img/loading.gif'>").css({
                width: 400,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
            }),
            $("<div class='con'>").css({
                width: "100%",
                height: "100%",
                position: "relative",
                display: "none"
            }).append(
                $("<iframe>").attr({
                    src: "https://www.youtube.com/embed/" + opt.vidIdd,
                    frameborder: 0,
                    allowfullscreen: true,
                    width: "100%",
                    height: 600
                })
            )
        )
    )
    setTimeout(function () {
        $(".pop .con").fadeIn(500, function () {
            $(this).prev().remove();
        });
    }, 1000)
}

Youtube.prototype.callData = function () {
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/playlistItems",
        dataType: "jsonp",
        data: {
            part: "snippet",
            key: this.key,
            playlistId: this.playList,
            maxResults: this.count
        }
    })

        .success(function (data) {
            var items = data.items;
            this.crateList(items);
        }.bind(this))

        .error(function (err) {
            console.log(err);
        })

}


Youtube.prototype.crateList = function (items) {
    $(items).each(function (index, data) {

        var tit = data.snippet.title;
        var txt = data.snippet.description;
        var date = data.snippet.publishedAt.split("T")[0];
        var imgSrc = data.snippet.thumbnails.high.url;
        var vidId = data.snippet.resourceId.videoId;

        if (txt.length > 100) { txt = txt.substr(0, 100) + "..."; }
        if (tit.length > 14) { tit = tit.substr(0, 14) + "..."; }
        this.frame.append(
            $("<article>")
                .append(
                    $("<a class='pic'>")
                        .attr({ href: vidId })
                        .css({ backgroundImage: "url(" + imgSrc + ")" }),
                )
                .append(
                    $("<h2>").text(tit)
                        .css({ paddingBottom: "22px" }),
                    $("<p>").text(txt),

                )
                .append(
                    $("<div class='deco'>"),
                    $("<h3>").text("Real story").css({
                        transform: "rotate(90deg)",
                        position: "absolute",
                        right: "-2%",
                        top: "100px",
                        fontSize: "15px",
                        letterSpacing: "12px",
                        fontFamily: 'Hammersmith One'
                    })

                )
        )

    }.bind(this))
}

