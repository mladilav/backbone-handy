function animation1 () {
    //console.log('animation 1');
    var lastScrollTop = 0;
    var currentPosition = 0;
    var scrollFlag = 1;
    $(window).on('mousewheel', function (event) {

        var st = event.deltaY;

        if (st < lastScrollTop) {
            if (scrollFlag) {
                if (currentPosition == 0) {
                    $("body,html").animate({
                        scrollTop: 630
                    }, 400);

                    $('.captionLight').delay(300).addClass('captionLightAnimation');
                    $('.firstImage').delay(300).addClass('imageAnimation');

                    scrollFlag = 0;
                    currentPosition = 630;
                    setTimeout(second_passed, 500)
                }

            }

            if (scrollFlag) {
                if (currentPosition == 630) {
                    $("body,html").animate({
                        scrollTop: 1400
                    }, 400);

                    $('.textAnimationOne').delay(300).addClass('textAnimations-1');
                    $('.secondImage').delay(300).addClass('secondImageAnimation');
                    scrollFlag = 0;
                    currentPosition = 1400;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 1400) {
                    $("body,html").animate({
                        scrollTop: 2000
                    }, 400);
                    $('.thirdImage').delay(300).addClass('thirdImageAnimations');
                    $('.blockAnimate-1').delay(350).addClass('blockAnimations');
                    $('.blockAnimate-2').delay(400).addClass('blockAnimations');
                    $('.blockAnimate-3').delay(450).addClass('blockAnimations');
                    scrollFlag = 0;
                    currentPosition = 2000;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 2000) {
                    $("body,html").animate({
                        scrollTop: 2600
                    }, 400);
                    $('.textAnimationTwo').delay(300).addClass('textAnimationTwo-1');
                    $('.screen-six').delay(350).addClass('screen-sixAnimation');
                    scrollFlag = 0;
                    currentPosition = 2600;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 2600) {
                    $("body,html").animate({
                        scrollTop: 3350
                    }, 400);
                    $('.sixImage').delay(300).addClass('sixImageAnimation');
                    $('.partAnimation').delay(300).addClass('partAnimations');
                    scrollFlag = 0;
                    currentPosition = 3350;
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3350) {
                    $("body,html").animate({
                        scrollTop: 3500
                    }, 400);

                    scrollFlag = 0;
                    currentPosition = 3500;
                    setTimeout(second_passed, 500)
                }
            }

        } else {
            if (scrollFlag) {
                if (currentPosition == 630) {
                    $("body,html").animate({
                        scrollTop: 0
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 0;
                    setTimeout(second_passed, 500)
                }
            }
            if (scrollFlag) {
                if (currentPosition == 1400) {
                    $("body,html").animate({
                        scrollTop: 630
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 630;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 2000) {
                    $("body,html").animate({
                        scrollTop: 1400
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 1400;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 2600) {
                    $("body,html").animate({
                        scrollTop: 2000
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 2000;
                    st = $("body,html").scrollTop();
                    setTimeout(second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3350) {
                    $("body,html").animate({
                        scrollTop: 2600
                    }, 400);
                    scrollFlag = 0;
                    currentPosition = 2600;
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