activeNavigation = '';

$(document).ready(function () {
    //jquery bouncing element 
    setTimeout('topArrow()');
});

function topArrow() {
    $('#topArrow').animate({
        top: '-=50px'
    }, 1300).animate({
        top: '+=50px'
    }, 1300);
    setTimeout('topArrow()', 2600);
}

$(".landingpage").click(function () {
    $(".logo").css("display", "block");

    $(".landingpage").hide("drop", {
        direction: "up"
    }, 2000);

    setTimeout(function () {
        $(".logo").css("opacity", "1");

    }, 2000);
});

$("#story").click(function () {
    $("#story").css("width", "100%");
    $("#story").css("height", "100%");
    $("#story").css("overflow", "auto");
    $("#highlight").css("width", "0%");
    $("#testimonial").css("width", "0%");
    $("#sponsorship").css("width", "0%");
    $(".logo").css("top", "150%");
    $(".logo").css("left", "150%");

    $("#story .header-left").css("width", "50%");
    $("#story .header-right").css("width", "50%");
    $("#story .header-right").css("display", "block");

    $(".close-button").css("display", "block");

    activeNavigation = jQuery(this).attr('id');
    console.log(activeNavigation);

    setTimeout(function () {
        $(".close-button").css("opacity", "1");
    }, 500);
});

$("#highlight").click(function () {
    $("#highlight").css("width", "100%");
    $("#highlight").css("height", "100%");
    $("#highlight").css("overflow", "auto");
    $("#story").css("width", "0%");
    $("#testimonial").css("width", "0%");
    $("#sponsorship").css("width", "0%");
    $(".logo").css("top", "150%");
    $(".logo").css("left", "-50%");

    $("#highlight .header-left").css("width", "50%");
    $("#highlight .header-right").css("width", "50%");
    $("#highlight .header-right").css("display", "block");

    $(".close-button").css("display", "block");

    activeNavigation = jQuery(this).attr('id');
    console.log(activeNavigation);

    setTimeout(function () {
        $(".close-button").css("opacity", "1");
    }, 500);
});

$("#testimonial").click(function () {
    $("#testimonial").css("width", "100%");
    $("#testimonial").css("height", "100%");
    $("#testimonial").css("overflow", "auto");
    $("#highlight").css("width", "0%");
    $("#story").css("width", "0%");
    $("#sponsorship").css("width", "0%");
    $(".logo").css("top", "-50%");
    $(".logo").css("left", "150%");

    $("#testimonial .header-left").css("width", "50%");
    $("#testimonial .header-right").css("width", "50%");
    $("#testimonial .header-right").css("display", "block");

    $(".close-button").css("display", "block");

    activeNavigation = jQuery(this).attr('id');
    console.log(activeNavigation);

    setTimeout(function () {
        $(".close-button").css("opacity", "1");
    }, 500);
});

$("#sponsorship").click(function () {
    $("#sponsorship").css("width", "100%");
    $("#sponsorship").css("height", "100%");
    $("#sponsorship").css("overflow", "auto");
    $("#highlight").css("width", "0%");
    $("#testimonial").css("width", "0%");
    $("#story").css("width", "0%");
    $(".logo").css("top", "-50%");
    $(".logo").css("left", "-50%");

    $("#sponsorship .header-left").css("width", "50%");
    $("#sponsorship .header-right").css("width", "50%");
    $("#sponsorship .header-right").css("display", "block");

    $(".close-button").css("display", "block");

    activeNavigation = jQuery(this).attr('id');
    console.log(activeNavigation);

    setTimeout(function () {
        $(".close-button").css("opacity", "1");
    }, 500);
});

$(".close-button").click(function () {
    closeFunction();
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeFunction();
    }
});

$('.count').each(function () {
    $(this).prop('Counter', 10).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

var closeFunction = function () {
    if (activeNavigation == 'story') {
        document.getElementById('top1').scrollIntoView();
    } else if (activeNavigation == 'highlight') {
        document.getElementById('top2').scrollIntoView();
    } else if (activeNavigation == 'testimonial') {
        document.getElementById('top3').scrollIntoView();
    } else if (activeNavigation == 'sponsorship') {
        document.getElementById('top4').scrollIntoView();
    }

    activeNavigation = '';

    $("#story").css("width", "50%");
    $("#highlight").css("width", "50%");
    $("#testimonial").css("width", "50%");
    $("#sponsorship").css("width", "50%");
    $("#story").css("height", "50%");
    $("#highlight").css("height", "50%");
    $("#testimonial").css("height", "50%");
    $("#sponsorship").css("height", "50%");

    $(".logo").css("top", "50%");
    $(".logo").css("left", "50%");
    $(".close-button").css("display", "none");

    $(".header-left").css("width", "100%");
    $(".header-right").css("width", "0%");
    $(".header-right").css("display", "none");

    $("#story").css("overflow", "hidden");
    $("#highlight").css("overflow", "hidden");
    $("#testimonial").css("overflow", "hidden");
    $("#sponsorship").css("overflow", "hidden");

    setTimeout(function () {
        $(".close-button").css("opacity", "0");
    }, 500);
}

activeTestimonial = "testimonial-1";

//Testimonial functionality
$(".member").mouseenter(function () {
    if (jQuery(this).attr("id") == "testimonial-1") {
        $("#testimonial-1").addClass("testimonial-active");
        $("#testimonial-2").removeClass("testimonial-active");
        $("#testimonial-3").removeClass("testimonial-active");

        if (activeTestimonial != 'testimonial-1') {
            $(".testimonial-para").css("opacity", "0");
            setTimeout(function () {
                $(".testimonial-para").css("opacity", "1");
                $(".testimonial-para").text("Meta Camp 2017 was a blast! I had a great time making new friends within the SIS community, with amazing facilitators that hyped up the mood and helped our group bond. I really enjoyed all the games and activities during the camp, especially Beach Day at Sentosa on Day 2 of Meta Camp.");
            }, 500);
        }

        activeTestimonial = "testimonial-1";

    } else if (jQuery(this).attr("id") == "testimonial-2") {
        $("#testimonial-1").removeClass("testimonial-active");
        $("#testimonial-2").addClass("testimonial-active");
        $("#testimonial-3").removeClass("testimonial-active");

        if (activeTestimonial != 'testimonial-2') {
            $(".testimonial-para").css("opacity", "0");
            setTimeout(function () {
                $(".testimonial-para").css("opacity", "1");
                $(".testimonial-para").text("I vividly recall the late-night bonding sessions, along with a thoughtful pair of facilitators who gave me tips to adapt into University life. The games allowed me to immerse myself in one of the best camp experience I had, and forge bonds with friends I look forward to seeing every day. All in all, if you are freshmen from IS looking for a great time and possible lifelong friendships, join Meta 2018!!");
            }, 500);
        }
        activeTestimonial = "testimonial-2";

    } else if (jQuery(this).attr("id") == "testimonial-3") {
        $("#testimonial-1").removeClass("testimonial-active");
        $("#testimonial-2").removeClass("testimonial-active");
        $("#testimonial-3").addClass("testimonial-active");

        if (activeTestimonial != 'testimonial-3') {
            $(".testimonial-para").css("opacity", "0");
            setTimeout(function () {
                $(".testimonial-para").css("opacity", "1");
                $(".testimonial-para").text("Meta camp was where I met my first group of SIS friends :) With my amazing facilitators coupled with the fun games, my group managed to bond in no time. Be it the times spent in Sentosa having a water bomb battle, or in school just chilling over supper, there was never once a dull moment!");
            }, 500);
        }
        activeTestimonial = "testimonial-3";

    }
});
