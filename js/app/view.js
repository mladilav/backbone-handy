TemplateManager = {
    templates: {},

    get: function(id, callback){
        var template = this.templates[id];

        if (template) {
            callback(template);
        } else {
            var that = this;
            $.get("/templates/" + id + ".html", function(template){
                var $tmpl = $(template);
                that.templates[id] = $tmpl;
                callback($tmpl);
            });
        }
    }
}

var lastScrollTop = 0;
var currentPosition = 0;
var scrollFlag = 1;

var IndexView = Backbone.View.extend({
    template: 'page-index',
    events : {
            'click #loginBtn' : 'loginPopUp',
            'mousewheel' : 'animation'
        },

    initialize: function() {
        this.render();
    },

    render: function(){
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').html(that.$el);
        });
        return this;
    },

    loginPopUp: function () {
        var loginWindow = new LoginView();
        $(this.el).append(loginWindow.el);
        loginWindow.show ();
    },

    animation: function (event) {
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
                }
            }

            if (scrollFlag) {
                if (currentPosition == 3350) {
                    $("body,html").animate({
                        scrollTop: 3500
                    }, 400);

                    scrollFlag = 0;
                    currentPosition = 3500;
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
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
                    setTimeout(this.second_passed, 500)
                }
            }
        }
    },
    second_passed: function(){
        scrollFlag = 1;
    }

});

var BioView = Backbone.View.extend({
    template: 'page-bio',
    events : {
            'click .work-schedule-next' : 'workScheduleNext',
            'click .job-details-next' : 'jobDetailsNext',
            'click .work-schedule-back' : 'workScheduleBack',
            'click .bio-back' : 'bioBack',
            'click .category-jobs-item':'getJobInfo',
            'click .calendar-days-item': 'setSchedule',
            'click ul.calendar-week li': 'getDayOfWeek',
            'click .calendar-custom ul.calendar-month li': 'getCustomMonth',
            'click .calendar-custom ul.calendar-day li': 'getCustomDay'
            //'click .login' : 'test'
        },

    initialize: function() {
        this.render();
        this.customCurrentDate = {'month': '1', 'day': '1'};
    },

    render: function() {
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);

            var storeUser = JSON.parse(localStorage.getItem('user'));
            var user = new Person();
            storeUser = user.getInfo(storeUser.id);
            $('#username').html(storeUser.firstName + ' ' + storeUser.lastName);
            $('.userId').html('#'+storeUser.id);
            $('.currentAvatars').attr('src',storeUser.logo);

            var res = $.ajax({
                type: "POST",
                url: "http://maps.googleapis.com/maps/api/geocode/json?latlng="
                    + storeUser.latitude
                    + ","
                    +storeUser.longitude
                    +"&sensor=true_or_false",
                async: false,
                success: function(msg){

                }
            }).responseText;
            res = JSON.parse(res);
            if (res.results[0]){
                $('.address').html(res.results[0].formatted_address);
            }
            $('').click(function(){
                console.log( $(this) );
                
                return false;
            });
            that.currentDay = 2;
            var scheduleModel = new Schedule();
            scheduleModel.getByDay(2, 1, false, function(schedule){
                for (i in schedule){
                    if (schedule[i]==0){
                        $('.calendar .calendar-days-item:eq('+i+')').removeClass('active');
                    }else{
                        $('.calendar .calendar-days-item:eq('+i+')').addClass('active');
                    }
                }
            });

            
            

            if(storeUser.serviceId != null){

            }
            var jobs = new Job();
            var JobListArray = jobs.getJobsList();

           for(var i=0;i<10;i++){
               var job = JSON.parse(JobListArray[i]);
               var icon = JSON.parse(job.icon);
                var img = document.createElement("img");
                img.setAttribute('src',"http://142.4.217.86"+icon.NA);
                img.setAttribute('data-click-src',"http://142.4.217.86"+icon.A);
                img.setAttribute('data-src',"http://142.4.217.86"+icon.NA);
                img.setAttribute('class',"category-jobs-item");
                img.setAttribute('data-id',job.id);
                img.setAttribute('data-license',job.license);
                $('.category-jobs').append(img);

            }


            //localStorage.setItem('user', JSON.stringify(storeUser));

            $(that.$el).find(".select-bio").selectmenu({ width: 650, change: function( event, ui ) {
                localStorage.setItem($(this).attr('rel'), $(this).val());
            }




        });
        });

        $('body').html(this.$el);
        /*$( ".select-bio" ).selectmenu({ width: 650, change: function( event, ui ) {
            localStorage.setItem($(this).attr('rel'), $(this).val());
            }
        });*/
        //$( ".select-2" ).selectmenu({ width: 225 });
        //return this;
    },
    hideAccordion: function(){
        $('.inner-body').animate({height: "hide"}, 500);
        $('.inner-body').removeClass("open");
        $('.accordion-title').removeClass('active');
        $('.accordion-title').children('b').remove();
        $('.accordion-title').children('span').before("<b>+</b>");
    },

    displayJobDetails:function(){

        this.hideAccordion()
        $('#job-details').children('b').remove();
        $('#job-details').next('.inner-body').animate({height: "toggle"}, 1000);
        $('#job-details').next('.inner-body').addClass("open");
        $('#job-details').children('span').before("<b>-</b>");
        $('#job-details').addClass('active');
    },
    displayWorkSchedule: function(){

        this.hideAccordion()
        $('#work-schedule').children('b').remove();
        $('#work-schedule').next('.inner-body').animate({height: "toggle"}, 1000);
        $('#work-schedule').next('.inner-body').addClass("open");
        $('#work-schedule').children('span').before("<b>-</b>");
        $('#work-schedule').addClass('active');
    },
    displayBio: function(){

        this.hideAccordion()
        $('#edit-bio').children('b').remove();
        $('#edit-bio').next('.inner-body').animate({height: "toggle"}, 1000);
        $('#edit-bio').next('.inner-body').addClass("open");
        $('#edit-bio').children('span').before("<b>-</b>");
        $('#edit-bio').addClass('active');
    },

    workScheduleNext: function () {
        /*
        Display next steps
         */
        $('.work-schedule-next').addClass('job-details-next');
        $('.job-details-next').removeClass('work-schedule-next');
        $('.job-details-next').html('Job Details<i class="icon-arrow-next"></i>');
        $('.edit-back').addClass('bio-back');
        this.displayWorkSchedule();
        /*
         end
         */
        if($('.searchProfile').val().length != ' '){
            $('.searchStatus').css('font-family','OpenSansBold');
            var width = $('.stepsSlide').width();
            $('.stepsSlide').width(width+10);
        }


            $('.bioStatus').css('font-family','OpenSansBold');
            var width = $('.stepsSlide').width();
            $('.stepsSlide').width(width+30);

    },
    jobDetailsNext: function(){
        $('.job-details-next').addClass('finish');
        $('.finish').removeClass('job-details-next');
        $('.edit-back').removeClass('bio-back');
        $('.edit-back').addClass('work-schedule-back');
        $('.finish').html('Finish<i class="icon-arrow-next"></i>');
        this.displayJobDetails();

            $('.scheduleStatus').css('font-family','OpenSansBold');
            var width = $('.stepsSlide').width();
            $('.stepsSlide').width(width+40);

    },
    workScheduleBack:function(){
        $('.work-schedule-back').addClass('bio-back');
        $('.bio-back').removeClass('work-schedule-back');
        $('.finish').addClass('job-details-next');
        $('.job-details-next').removeClass('finish');
        $('.job-details-next').html('Job Details<i class="icon-arrow-next"></i>');
        this.displayWorkSchedule();
    },
    bioBack:function(){
        $('.job-details-next').addClass('work-schedule-next');
        $('.edit-back').removeClass('bio-back');
        $('.work-schedule-next').removeClass('job-details-next');
        $('.work-schedule-next').html('Work Schedule<i class="icon-arrow-next"></i>');
        this.displayBio();
    },
    getJobInfo:function(events){
        if($(events.currentTarget).hasClass('active')){
            $(events.currentTarget).removeClass('active');
            $(events.currentTarget).attr('src',$(events.currentTarget).attr('data-src'));
            var id = $(events.currentTarget).attr('data-id');
            $('div.job-'+id).remove();
        } else {

            $(events.currentTarget).addClass('active');
            $(events.currentTarget).attr('src',$(events.currentTarget).attr('data-click-src'));

            var jobModel = new Job();
            jobModel.getJob($(events.currentTarget).attr('data-id'));
            var job = new JobView({model:jobModel});
        }
    },
        setSchedule:function(el){
        var scheduleModel = new Schedule();
        if ($(el.currentTarget).parent().parent().hasClass('calendar-custom')){
            scheduleModel.pressHrs( $('.calendar-days')[1], this.currentDay, true );
        }else{
            scheduleModel.pressHrs( $('.calendar-days')[0], this.currentDay, false );
        }        
        
        
    },
    getDayOfWeek: function(el){
        day = parseInt($('a', $(el.currentTarget)).attr('rel')) ;
        this.currentDay = day;
        var scheduleModel = new Schedule;
        scheduleModel.getByDay(day, 1, false, function(schedule){
            for (i in schedule){
                if (schedule[i]==0){
                    $('.calendar .calendar-days-item:eq('+i+')').removeClass('active');
                }else{
                    $('.calendar .calendar-days-item:eq('+i+')').addClass('active');
                }
            }
        });
        $('li', $(el.currentTarget).parent()).removeClass('active');
        $(el.currentTarget).addClass('active');
        
        return false;
    },
    getCustomMonth: function(el){
        var monthes = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        e = $('a', $(el.currentTarget));
        if (e.attr('rel')=='n'){
            current = $('li:eq(5) a', e.parent().parent()).attr('rel');
            if (++current>12) current = 1;
            e.parent().before('<li><a href="" rel="'+current+'">'+monthes[current-1]+'</a></li>');
            $('li:eq(1)', e.parent().parent()).remove();
            if ($('li:eq(2)', e.parent().parent()).hasClass('active')){
                $('li', $(el.currentTarget).parent()).removeClass('active');
                $('li:eq(3)', e.parent().parent()).addClass('active');
            }
        }else if(e.attr('rel')=='p'){
            current = $('li:eq(1) a', e.parent().parent()).attr('rel');
            if (--current==0) current = 12;
            e.parent().after('<li><a href="" rel="'+current+'">'+monthes[current-1]+'</a></li>');
            $('li:eq(6)', e.parent().parent()).remove();
            if ($('li:eq(4)', e.parent().parent()).hasClass('active')){
                $('li', $(el.currentTarget).parent()).removeClass('active');
                $('li:eq(3)', e.parent().parent()).addClass('active');
            }
        }else{
            $('li', $(el.currentTarget).parent()).removeClass('active');
            $(el.currentTarget).addClass('active');
        }
        //load day schedule
        this.customCurrentDate['month'] = parseInt($('li.active a', $(el.currentTarget).parent()).attr('rel')) ;
        var scheduleModel = new Schedule;
        scheduleModel.getByDay(this.customCurrentDate, 1, true, function(schedule){
            for (i in schedule){
                if (schedule[i]==0){
                    $('.calendar-custom .calendar-days-item:eq('+i+')').removeClass('active');
                }else{
                    $('.calendar-custom .calendar-days-item:eq('+i+')').addClass('active');
                }
            }
        });
        return false;
    },
    getCustomDay: function(el){
        var e = $('a', $(el.currentTarget));
        var daysInMonth = this._getMonthDaysCount($('.calendar-month li.active a').attr('rel'));
        if (e.attr('rel')=='n'){
            current = $('li:eq(7) a', e.parent().parent()).html();
            if (++current>daysInMonth) {
                current = 1;
            }
            if ($('li.active a', e.parent().parent()).html()=='1'){
                //change month (inc)
                //$('.calendar-custom ul.calendar-month li.calendar-next').click();
            }
            e.parent().before('<li><a href="">'+current+'</a></li>');
            $('li:eq(1)', e.parent().parent()).remove();
            if ($('li:eq(3)', e.parent().parent()).hasClass('active')){
                $('li', $(el.currentTarget).parent()).removeClass('active');
                $('li:eq(4)', e.parent().parent()).addClass('active');
            }
        }else if(e.attr('rel')=='p'){
            current = $('li:eq(1) a', e.parent().parent()).html();
            if (--current==0){
                var currMonth = $('.calendar-month li.acitve a').attr('rel');
                if (--currMonth <= 0) currMonth = 12;
                current = this._getMonthDaysCount(currMonth);
            }
            if ($('li.active a', e.parent().parent()).html()==daysInMonth){
                //change month (dec)
                //$('.calendar-custom ul.calendar-month li.calendar-prev').click();
            }
            e.parent().after('<li><a href="" >'+current+'</a></li>');
            $('li:eq(7)', e.parent().parent()).remove();
            if ($('li:eq(5)', e.parent().parent()).hasClass('active')){
                $('li', $(el.currentTarget).parent()).removeClass('active');
                $('li:eq(4)', e.parent().parent()).addClass('active');
            }
        }else{
            $('li', $(el.currentTarget).parent()).removeClass('active');
            $(el.currentTarget).addClass('active');
        }
        //load day schedule
        
        this.customCurrentDate['day'] = parseInt($('li.active a', $(el.currentTarget).parent()).html()) ;
        var scheduleModel = new Schedule;
        scheduleModel.getByDay(this.customCurrentDate, 1, true, function(schedule){
            for (i in schedule){
                if (schedule[i]==0){
                    $('.calendar-custom .calendar-days-item:eq('+i+')').removeClass('active');
                }else{
                    $('.calendar-custom .calendar-days-item:eq('+i+')').addClass('active');
                }
            }
        });
        return false;
    },
    _getMonthDaysCount: function(month){
        switch (month){
            case '1':
            case '3':
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                return 31;
                break;
            case '4':
            case '6':
            case '10':
            case '1':
                return 30;
                break;
            case '2':
                return 28;
                break;
            default:
                return 31;
                
        }
    }
});

var LoginView = Backbone.View.extend({
  template: 'login-template',
  className: 'lDialog',
  events: {
    'click #clLogin': 'login',
    'click .close-icon': 'close',
    'click .fbBtn':'facebookAuth',
    'click #createAc': 'registerView'
  },

  initialize: function () {
    this.render();
  },
  render: function () {
    var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').append(that.$el);
            $(".back").removeClass("hide");
        });
        return this;
  },

  show: function () {

  },
  close: function () {
      $('.lDialog').remove();
      $('.ui-dialog').remove();
      $(".back").addClass("hide");
  },
  login: function () {
      var user = new Person ();
      var email = $('#emails').val();
      var pass = $('#passwords').val();
      var res = user.login(email, pass);
      if (res == true) {
          //setCookie('auth', 'true');
            //console.log(localStorage.getItem('user'));
            $('.signIn').html('<i class="icon-lock-small"></i>Logout');
            $('.signIn').addClass('logOut');
            $('.logOut').removeClass('signIn');
            location.href="/#bio";
      }
  },
  registerView: function () {

      this.close();
      this.scrollDown();

  },
  facebookAuth: function(){
      checkLoginState();
      this.close();
      this.scrollDown();

  },
    scrollDown: function(){
        $('.textAnimationOne').delay(300).addClass('textAnimations-1');
        $('.what-is-handyboy').delay(300).addClass('secondImageAnimation');
        $('.textAnimationTwo').delay(300).addClass('textAnimationTwo-1');
        $('.textTwo').delay(400).addClass('textTwo-1');
        $('.why-join').delay(400).addClass('why-join-1');
        $("body,html").animate({
            scrollTop: 2250
        }, 400);
        $('.formAnimation').delay(300).addClass('formAnimation-1');
        scrollFlag = 0;
        currentPosition = 2250;
        setTimeout(this.second_passed, 100)
    },
    second_passed: function(){
        scrollFlag = 1;
    }


});

var RegisterView = Backbone.View.extend({
  template: 'registration-template1',
  className: 'rDialog',
  events: {
    'click .ui-dialog-titlebar-close': 'close',
    'mouseover .ui-dialog-titlebar-close': 'showText',
    'mouseout .ui-dialog-titlebar-close': 'hideText',
    'blur .month': 'dateValid',
    'blur .day': 'dateValid',
    'blur .year': 'dateValid',
    'blur #phone': 'phoneValid',
    'blur #userCode': 'showLastStep',
    'click #sendVerification': 'phoneVerification',
    'click #regSubmit': 'registerUser',
    'click #fileupload': 'uploadAvatar'

  },

  initialize: function () {
    this.render();
  },
  render: function () {

    var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $(".back").removeClass("hide");
            $(that.$el).find("#jobList").html(that.getJobsList());
            $( ".select" ).selectmenu({ width: 305 });
            //$("#phone").mask("999-999-9999",{placeholder:"X"});

            var geocoder = new google.maps.Geocoder();
            $("#zipCode").autocomplete({
                source: function(request, response) {
                    geocoder.geocode( {'address': request.term}, function(results, status) {
                        response($.map(results, function(item) {
                            //alert(item.formatted_address);
                            return {
                                label:  item.formatted_address,
                                value: item.formatted_address,
                                latitude: item.geometry.location.lat(),
                                longitude: item.geometry.location.lng()
                            }
                        }));
                    });
                },
                select: function(event, ui) {
                    //alert(ui.item.latitude + ' ' + ui.item.longitude);
                    var storeUser = JSON.parse(localStorage.getItem('user'));
                    storeUser.latitude = ui.item.latitude;
                    storeUser.longitude = ui.item.longitude;
                    localStorage.setItem('user', JSON.stringify(storeUser));
                    $("#zipCode").removeClass('empty');
                },
                appendTo: '#menu-container'
            });
        });


    $('body').append(this.$el);
    return this;
  },

  show: function () {
      $( "#dialog" ).dialog({ minWidth: 760, minHeight: 1050 });
      },
  close: function () {
      $('.rDialog').remove();
      $(".back").addClass("hide");
  },
  showText: function(){
      $('.hoverText').show();
  },
  hideText: function(){
      $('.hoverText').hide();
    },
  login: function () {
      console.log('login');
  },
  getJobsList: function () {
      var job = new Job ();
      return job.getJobs();
  },
  dateValid: function(){
     $('.month').addClass('error');
     var month = $('.month').val();
     var day = $('.day').val();
     var year = $('.year').val();
     $('.abs').show();

     if(month*day*year > 0){
         var dateObj = new Date();

         if((dateObj.getFullYear() - year) > 100){
             return;
         }
         if((dateObj.getFullYear() - year) > 20){
             $('.abs').hide();
             $(".date-of-birth").removeClass('empty');
             return;
         }

         if((dateObj.getFullYear() - year) > 19){
             if((dateObj.getMonth() - month) > 0)
                {
                    $('.abs').hide();
                    $(".date-of-birth").removeClass('empty');
                    return;
                }

             if((dateObj.getMonth() - month) == 0)
             {
                 if((dateObj.getDate() - day) >= 0)
                 {
                     $('.abs').hide();
                     $(".date-of-birth").removeClass('empty');
                     return;
                 }
            }
         }

         return;
     }
  },
  monthValid: function () {
      var person = new Person();
      if(!person.monthValid ($('.month').val())) {
            var p = new PopUpLage;
                p.set({'header':'Error',
                    'body':'It is not a month inset corret month'});
            var pop = new popUpLageView({ model: p });
            $(pop.el).addClass('abs');
            $('#DOB').html(pop.el);
            $('.month').addClass('error');
        } else {
            $('#DOB').html('');
        }
  },
  dayValid: function () {
      var person = new Person();
      if(!person.dayValid ($('.day').val())) {
            var p = new PopUpLage;
                p.set({'header':'Error',
                    'body':'It is not a day inset corret day'});
            var pop = new popUpLageView({ model: p });
            $(pop.el).addClass('abs');
            $('#DOB').html(pop.el);
            $('.day').addClass('error');
        } else {
            $('#DOB').html('');
        }
  },
  yearValid: function () {
      var person = new Person();
      if(!person.yearValid ($('.year').val())) {
            var p = new PopUpLage;
                p.set({'header':'Error',
                    'body':'It is not a year inset corret year'});
            var pop = new popUpLageView({ model: p });
            $(pop.el).addClass('abs');
            $('#DOB').html(pop.el);
            $('.year').addClass('error');
        } else {
            $('#').html('');
        }
  },
  phoneValid: function () {
      var person = new Person();

      var val = $('#phone').val();
      if(!person.phoneValid(val)) {
            var p = new PopUpLage;
                p.set({'header':'Error',
                    'body':'It is not a phone inset corret phone'});
            var pop = new popUpLageView({ model: p });
            $(pop.el).addClass('distance');
            $('.phoneNumber').html(pop.el);
            $('#phone').addClass('error');
        } else {
            $('.phoneNumber').hide();
            $('#phone').removeClass('error');
            $('#phone').removeClass('empty');
        }
  },
  phoneVerification: function () {
      var user = new Person();
      var res = user.sendMessage($('#phone').val());

      $('#code').attr('value',res);
      $('.steps-2').animate({height: 52}, 1000);
      return false;
  },
    showLastStep:function(){
        $('.steps-3').animate({height: 52}, 1000);
    },
  registerUser: function () {
      var userCode = $('#userCode').val();
      var serverCode = '1234';
      if (userCode != serverCode) {
          alert('Code is not correct');
          return false;
      }
      this.monthValid();
      this.dayValid();
      this.yearValid();
      var error = $('.empty').val();
      if (typeof(error) != 'undefined') {
          return false;
      }

        var storeUser = JSON.parse(localStorage.getItem('user'));
        var date = $('.year').val() + ',' + $('.month').val() + ',' + $('.day').val();
        date = new Date(date);
        var dob = date.getTime();
        storeUser.phoneNumber = $('#phone').val();
        storeUser.dob = dob;
        storeUser.job = $(".select").val();
        var user = new Person();
        var res = user.register(storeUser);
        console.log(res);
          if(res){
              storeUser.id = res;
              localStorage.setItem('user', JSON.stringify(storeUser));
        location.href="/#bio";
        this.close();}
  },
    uploadAvatar:function(){
        var person = new Person();
        $('#fileupload').fileupload({
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('body').append('<img id="proxi" src="/server/php/files/'
                        + file.name + '" />');
                    $('#avatar').attr('src','/server/php/files/thumbnail/'
                        + file.name);

                    var storeUser = JSON.parse(localStorage.getItem('user'));
                    storeUser.logo = '/server/php/files/thumbnail/'
                        + file.name;
                    localStorage.setItem('user', JSON.stringify(storeUser));

                    imgData = 0;

                    $("#proxi").load(function() {
                        var res = [];
                        res.height = $(this).height();
                        res.width = $(this).width();
                        $("#proxi").remove();
                        var PopUpLight = new popUpLight();
                        if (person.imgValid (res) ===  true) {
                            $('#imgMessages').html(PopUpLight.render().el);
                        } else {
                            var p = new PopUpLage;
                            p.set({'header':'Well this is akward',
                                'body':'Something went wrong! Could you try again?'});
                            var pop = new popUpLageView({ model: p });
                            $('#imgMessages').html(pop.el);
                        }
                    });
                });
            }
        });
    }
});

var popUpLight = Backbone.View.extend({
  className: 'popup',

  initialize: function () {
    this.template = $('#page-popUpLight').html();
  },

  render: function () {
    $(this.el).html(_.template(this.template));
    return this;
  },

  show: function () {
   //$('#imgMessages').html();
  }
});

var popUpLageView = Backbone.View.extend({
    className: 'myPopUp Lage',
    template: '#page-popUp',

    initialize: function() {
        this.render();
    },

    render: function() {
        var template = _.template( $(this.template).html() );
        this.$el.html(template( this.model.toJSON() ));
    }
});

var MainView = Backbone.View.extend({
    template: 'page-main',
    events : {
            'click .signIn' : 'loginPopUp',
            'click #registration' : 'regPopUp',
            'click .become-handyboy-button' : 'scrollDown',
            'click .play-button' : 'playVideo',
            'click .terms' : 'terms',
            'click .privacy' : 'privacy',
            'click .services-contract' : 'servicesContract',
            'mousewheel':'animation'

        },
  initialize: function () {
    this.render();
  },

  render: function () {
    var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').html(that.$el);

        });
        return this;
  },

  show: function () {
   //$('#imgMessages').html();
  },
  loginPopUp: function () {
    var loginWindow = new LoginView();
    loginWindow.show ();
  },
  regPopUp: function () {

      var errorsPassword = true;
      $('form input').removeClass('requed');
      $(".errorsRegistration").hide();

      if($('#password').val() != $('#passwordConfirm').val()){
          $("#password").addClass('requed');
          $("#passwordConfirm").addClass('requed');
          $(".errorsRegistration").show();
          $(".errorsRegistration").html("Different password!");
          errorsPassword = false;
      }

      var users = new User();
      var attribs = {
          firstName: $('#firstName').val(),
          lastName:  $('#lastName').val(),
          email: $('#email').val(),
          password: $('#password').val()
      };

      var sender = users.set(attribs,{validate: true});

      if((errorsPassword)&&(sender)){
          var rv = new RegisterView();
          var storeUser = JSON.parse(localStorage.getItem('user'));
          storeUser.email = attribs.email;
          storeUser.password = attribs.password;
          storeUser.firstName = attribs.firstName;
          storeUser.lastName = attribs.lastName;
          storeUser.facebookUid = $('#facebookId').val();
          localStorage.setItem('user', JSON.stringify(storeUser));
          rv.show();
      }
  },

    scrollDown: function(){
        $('.textAnimationOne').delay(300).addClass('textAnimations-1');
        $('.what-is-handyboy').delay(300).addClass('secondImageAnimation');
        $('.textAnimationTwo').delay(300).addClass('textAnimationTwo-1');
        $('.textTwo').delay(400).addClass('textTwo-1');
        $('.why-join').delay(400).addClass('why-join-1');
        $("body,html").animate({
            scrollTop: 2250
        }, 400);
        $('.formAnimation').delay(300).addClass('formAnimation-1');
        scrollFlag = 0;
        currentPosition = 2250;
        setTimeout(this.second_passed, 500)
    },

   animation: function(event){
      var scrollTop = $(window).scrollTop();
            if(scrollTop > 200){
                $('.textAnimationOne').addClass('textAnimations-1');
                $('.what-is-handyboy').addClass('secondImageAnimation');
                $('.play-button').addClass('play-button-1');
            }

       if(scrollTop > 1000){
           $('.textAnimationTwo').delay(300).addClass('textAnimationTwo-1');
           $('.textTwo').delay(400).addClass('textTwo-1');
           $('.image-phone').delay(400).addClass('image-phone-1');
          setTimeout(function(){
           $('.image-phone').delay(800).addClass('image-phone-2');},400);
           $('.why-join').delay(400).addClass('why-join-1');
       }
       if(scrollTop > 1500){
           $('.formAnimation').delay(300).addClass('formAnimation-1');
       }
       if(scrollTop > 2000){
           $('.frequently').delay(300).addClass('frequently-1');
       }
   },
    second_passed: function(){
        scrollFlag = 1;
    },
    playVideo: function(){
        var video = new VideoView();
        video.show();
    },
    terms:function(){
        var termsV = new TermsView();
        location.href="/#terms";
    },
    servicesContract: function(){
        var contract = new ContractView();
        location.href="/#contract";
    },
    privacy: function(){
        var privacy = new PrivacyView();
        location.href="/#privacy";
    }


});

var JobView = Backbone.View.extend({
    template: 'job-template',
    events : {
        'click .distance':'distance'
    },

    initialize: function() {
        this.render();
    },

    render: function(){
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            var obj = that.model.toJSON();

            $(html[0]).html(obj.name);
            $(html[8]).addClass('slider-'+obj.id);

            $(html[4]).html(obj.description);

            $(html[10]).find(".minCost").html(obj.minCost+'$');
            $(html[10]).find(".maxCost").html(obj.maxCost+'$');
            $(html[12]).addClass('job-distance-'+obj.id);
            that.$el.html(html);
            that.$el.attr('data-id',obj.id);
            that.$el.addClass('job-'+obj.id);
            $('#listOfJobs').append(that.$el);
            $('.slider-'+obj.id).slider({
                range: "min",
                min: 1*obj.minCost,
                max: 1*obj.maxCost,
                value: (1*obj.maxCost-1*obj.minCost)/2,
                slide: function( event, ui ) {
                   // $( ".job-details-info-price-big" ).html( ui.value + "$");
                    $(html[6]).find("#price").html(ui.value + "$");
                }
            });
            if((obj.id == '1')||(obj.id == '2')){
                $('.personal-trainer').attr("style","display:block;");
            }

        });
        return this;
    },
    distance: function(){
        if($('.distance:checked').val() == 'on'){
            var obj = this.model.toJSON();
           // $('.job-distance-'+obj.id).find('.job-details-info-price-distance').show();
            $('.slider-distance').addClass('slider-distance-'+obj.id);
            $('.slider-distance-'+obj.id).slider({
                range: "min",
                min: 1*obj.minCostDistance,
                max: 1*obj.maxCostDistance,
                value: (1*obj.maxCostDistance-1*obj.minCostDistance)/2,
                slide: function( event, ui ) {
                    $('.slider-distance-'+obj.id).siblings('.job-details-info').find('.job-details-info-price-big').html( ui.value + "$");
                }
            });
            /*var addons = new Addons();
            var addonsArray = addons.getAddonsByTypeJob(obj.id);
            for(var i = 0;i < addonsArray.length;i++){
                var addonModel = new Addons(addonsArray[i]);
                var addonView = new AddonsView({model:addonModel});
            }*/

        }
    }

})
var VideoView = Backbone.View.extend({
    template: 'video-template',
    className: 'lDialog',

    events : {

        'click .close-icon':'close',
        'mouseover .close-icon':'hoverText',
        'mouseout .close-icon':'HideHoverText'
    },
    initialize: function() {
        this.render();
    },

    render: function(){
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').append(that.$el);
            $(".back").removeClass("hide");
        });
    },
    show: function () {
        $( "#dialog" ).dialog({ minWidth: 800, minHeight: 200 });
    },
    close: function () {

        $('.lDialog').remove();
        $(".back").addClass("hide");
        $('#dialog').dialog('close');
    },
    hoverText:function(){
        $('.hoverText').show();
    },
    HideHoverText: function(){
        $('.hoverText').hide();
    }
})
var TermsView = Backbone.View.extend({
    template: 'page-terms',
    events :{
        'click .terms' : 'terms',
        'click .privacy' : 'privacy',
        'click .services-contract' : 'servicesContract'
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').html(that.$el);

        });
        return this;
    },
    terms:function(){
        var termsV = new TermsView();
        location.href="/#terms";
    },
    servicesContract: function(){
        var contract = new ContractView();
        location.href="/#contract";
    },
    privacy: function(){
        var privacy = new PrivacyView();
        location.href="/#privacy";
    }

});

var ContractView = Backbone.View.extend({
    template: 'page-services-contract',
    events :{
        'click .terms' : 'terms',
        'click .privacy' : 'privacy',
        'click .services-contract' : 'servicesContract'
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').html(that.$el);

        });
        return this;
    },
    terms:function(){
        var termsV = new TermsView();
        location.href="/#terms";
    },
    servicesContract: function(){
        var contract = new ContractView();
        location.href="/#contract";
    },
    privacy: function(){
        var privacy = new PrivacyView();
        location.href="/#privacy";
    }

});
var PrivacyView = Backbone.View.extend({
    template: 'page-privacy',
    events :{
        'click .terms' : 'terms',
        'click .privacy' : 'privacy',
        'click .services-contract' : 'servicesContract'
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $('body').html(that.$el);

        });
        return this;
    },
    terms:function(){
        var termsV = new TermsView();
        location.href="/#terms";
    },
    servicesContract: function(){
        var contract = new ContractView();
        location.href="/#contract";
    },
    privacy: function(){
        var privacy = new PrivacyView();
        location.href="/#privacy";
    }

});


