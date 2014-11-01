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
            //animation1 ();
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
            'click .bio-back' : 'bioBack'
            //'click .login' : 'test'
        },
 
    initialize: function() {
        this.render();
    },
 
    render: function() {
        var that = this;
        TemplateManager.get(this.template, function(template){
            var html = $(template).tmpl();
            that.$el.html(html);
            $(".slider").slider({
                range: "min",
                min: 1,
                max: 500,
                value: 37,
                slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.value );
                }
            });
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
        $('.work-schedule-next').addClass('job-details-next');
        $('.job-details-next').removeClass('work-schedule-next');
        $('.job-details-next').html('Job Details<i class="icon-arrow-next"></i>');
        $('.edit-back').addClass('bio-back');
        this.displayWorkSchedule();
    },
    jobDetailsNext: function(){
        $('.job-details-next').addClass('finish');
        $('.finish').removeClass('job-details-next');
        $('.edit-back').removeClass('bio-back');
        $('.edit-back').addClass('work-schedule-back');
        $('.finish').html('Finish<i class="icon-arrow-next"></i>');
        this.displayJobDetails();
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
    }
});

var LoginView = Backbone.View.extend({
  template: 'login-template',
  className: 'lDialog',
  events: {
    'click #clLogin': 'login',
    'click .ui-dialog-titlebar-close': 'close',
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

      $( "#dialog" ).dialog({ minWidth: 450, minHeight: 717 });



  },
  close: function () {
      //$('#dialog').dialog('close');
      $('.lDialog').remove();
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
      var rv = new RegisterView();
      this.close();
  },
  facebookAuth: function(){



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
    'click .ui-menu-item': 'jobValid',
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
      var service = new Service ();
      return service.getJobs();
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
      var service = new Service();
      if(!service.monthValid ($('.month').val())) {
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
      var service = new Service();
      if(!service.dayValid ($('.day').val())) {
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
      var service = new Service();
      if(!service.yearValid ($('.year').val())) {
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
      var service = new Service();

      var val = $('#phone').val();
      if(!service.phoneValid(val)) {
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

  jobValid:function(){
      $('#jobValidate').show();
      var val = $('.select').val();
      console.log(val);
      if (val!=0){
          $('#jobValidate').hide();
          return;
      }

  },
  phoneVerification: function () {
      var user = new Person();
      var res = user.sendMessage($('#phone').val());
      
      $('#code').attr('value',res);
      return false;
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
        console.log(error);
        var storeUser = JSON.parse(localStorage.getItem('user'));
        var date = $('.year').val() + ',' + $('.month').val() + ',' + $('.day').val();
        date = new Date(date);
        var dob = date.getTime();
        storeUser.phoneNumber = $('#phone').val();
        storeUser.dob = dob;
        storeUser.job = $(".ui-selectmenu-text").html();
        localStorage.setItem('user', JSON.stringify(storeUser));
        var user = new Person();
        user.register(storeUser);
        location.href="/#bio";
        this.close();
        return false;


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
    //$(this.el).append(loginWindow.el);
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
       var st = event.deltaY;
       if (st < lastScrollTop) {
           if (scrollFlag) {
               if (currentPosition == 0) {
                   $("body,html").animate({
                       scrollTop: 800
                   }, 400);

                   $('.textAnimationOne').delay(300).addClass('textAnimations-1');
                   $('.what-is-handyboy').delay(300).addClass('secondImageAnimation');
                   $('.play-button').delay(300).addClass('play-button-1');
                   scrollFlag = 0;
                   currentPosition = 800;
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
               }
           }

           if (scrollFlag) {
               if (currentPosition == 3000) {
                   $("body,html").animate({
                       scrollTop: 3350
                   }, 400);

                   scrollFlag = 0;
                   currentPosition = 3350;
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
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
                   setTimeout(this.second_passed, 100)
               }
           }
       }

   },
    second_passed: function(){
        scrollFlag = 1;
    }
});