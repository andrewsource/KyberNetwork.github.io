$(document).ready(function() {
    $(".section-link a").click(function(e) {
    	//get id
    	var id = $(e.target).attr("href-data");
        $('html, body').animate({
            scrollTop: $("#"+id).offset().top
        }, 800);
    });

    $("#to-top-btn").on('click', function() {
        var body = $("html, body");
        body.animate({ scrollTop: 0 }, 500, 'swing');
    })

    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if ((st < lastScrollTop) && (st > 50)) {
            document.getElementById("to-top-btn").style.display = "block";
        } else {
            document.getElementById("to-top-btn").style.display = "none";
        }
        lastScrollTop = st;
    });
})
