function animation2 () {
    //console.log('animation 2');
    var lastScrollTop = 0;
    var currentPosition = 0;
    var scrollFlag = 1;
    $(window).on('mousewheel', function (event) {

        var st = event.deltaY;

        if (st < lastScrollTop) {
            if (scrollFlag) {
                if (currentPosition == 0) {
                    $("body,html").animate({
                        scrollTop: 800
                    }, 400);

                    $('.textAnimationOne').delay(300).addClass('textAnimations-1');
                    $('.what-is-handyboy').delay(300).addClass('secondImageAnimation');
                    scrollFlag = 0;
                    currentPosition = 800;
                    setTimeout(second_passed, 500)
                }

            }

            if (scrollFlag) {
                if (currentPosition == 800) {
                    $("body,html").animate({
                        scrollTop: 1600
                    }, 400);

                    $('.textAnimationTwo').delay(300).addClass('textAnimationTwo-1');
                    $('.textTwo').delay(400).addClass('textTwo-1');
                    $('.why-join').delay(400).addClass('why-join-1');


                    scrollFlag = 0;
                    currentPosition = 1600;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 1600) {
                    $("body,html").animate({
                        scrollTop: 2250
                    }, 400);
                    $('.formAnimation').delay(300).addClass('formAnimation-1');
                    scrollFlag = 0;
                    currentPosition = 2250;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 2250) {
                    $("body,html").animate({
                        scrollTop: 3000
                    }, 400);
                    $('.frequently').delay(300).addClass('frequently-1');
                    scrollFlag = 0;
                    currentPosition = 3000;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3000) {
                    $("body,html").animate({
                        scrollTop: 3350
                    }, 400);

                    scrollFlag = 0;
                    currentPosition = 3350;
                    setTimeout(second_passed, 500)
                }
            }



        } else {
            if (scrollFlag) {
                if (currentPosition == 800) {
                    $("body,html").animate({
                        scrollTop: 0
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 0;
                    setTimeout(second_passed, 500)
                }
            }
            if (scrollFlag) {
                if (currentPosition == 1600) {
                    $("body,html").animate({
                        scrollTop: 800
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 800;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 2250) {
                    $("body,html").animate({
                        scrollTop: 1600
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 1600;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3000) {
                    $("body,html").animate({
                        scrollTop: 2250
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 2250;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3350) {
                    $("body,html").animate({
                        scrollTop: 3000
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 3000;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3500) {
                    $("body,html").animate({
                        scrollTop: 3350
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 3350;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }
        }



    });
    function second_passed() {
        scrollFlag = 1;
    }
}