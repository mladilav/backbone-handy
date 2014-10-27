$(document).ready(function () {
    /* animation */

    $(document).on('click','.work-schedule-next',function(){
        $(this).removeClass('work-schedule-next');
        $(this).addClass('job-details-next');
        $(this).html('Job Details<i class="icon-arrow-next"></i>');
        $('.edit-back').addClass('bio-back');
        displayWorkSchedule();
    });




    $(document).on('click','.job-details-next',function(){
        $(this).removeClass('job-details-next');
        $(this).addClass('finish');
        $('.edit-back').removeClass('bio-back');
        $('.edit-back').addClass('work-schedule-back');
        $(this).html('Finish<i class="icon-arrow-next"></i>');
        displayJobDetails();
    });

    $(document).on('click','.work-schedule-back',function(){
        $(this).removeClass('work-schedule-back');
        $(this).addClass('bio-back');
        $('.finish').addClass('job-details-next');
        $('.job-details-next').removeClass('finish');
        $('.job-details-next').html('Job Details<i class="icon-arrow-next"></i>');
        displayWorkSchedule();
    });

    $(document).on('click','.bio-back',function(){
        $(this).removeClass('bio-back');
        $('.job-details-next').addClass('work-schedule-next');
        $('.work-schedule-next').removeClass('job-details-next');
        $('.work-schedule-next').html('Work Schedule<i class="icon-arrow-next"></i>');
        displayBio();
    });

    $(".slider").slider({
        range: "min",
        min: 1,
        max: 500,
        value: 37,
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.value );
        }
    });

});

function displayBio(){

    hideAccordion()

    $('#edit-bio').children('b').remove();
    $('#edit-bio').next('.inner-body').animate({height: "toggle"}, 1000);
    $('#edit-bio').next('.inner-body').addClass("open");
    $('#edit-bio').children('span').before("<b>-</b>");
    $('#edit-bio').addClass('active');
};


function displayWorkSchedule(){

    hideAccordion()

    $('#work-schedule').children('b').remove();
    $('#work-schedule').next('.inner-body').animate({height: "toggle"}, 1000);
    $('#work-schedule').next('.inner-body').addClass("open");
    $('#work-schedule').children('span').before("<b>-</b>");
    $('#work-schedule').addClass('active');
};

function displayJobDetails(){

    hideAccordion()
    $('#job-details').children('b').remove();
    $('#job-details').next('.inner-body').animate({height: "toggle"}, 1000);
    $('#job-details').next('.inner-body').addClass("open");
    $('#job-details').children('span').before("<b>-</b>");
    $('#job-details').addClass('active');
}

function hideAccordion(){
    $('.inner-body').animate({height: "hide"}, 500);
    $('.inner-body').removeClass("open");
    $('.accordion-title').removeClass('active');
    $('.accordion-title').children('b').remove();
    $('.accordion-title').children('span').before("<b>+</b>");
}