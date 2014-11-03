var Index = Backbone.Model.extend({
    defaults: {
        name: 'index'
    }
});

var PopUpLage = Backbone.Model.extend({
    defaults: {
        header: 'header',
        body: 'body'
    }
});


var User = Backbone.Model.extend ({
    defaults: {
        id: 'undefined',
        firstName: 'undefined',
        lastName: 'undefined',
        password: 'undefined',
        email: 'undefined'
    },
    validate: function(attribs){
        if(attribs.firstName == '')
            {
                $("#firstName").addClass('requed');
                return 'First name is empty!';}
        if(attribs.lastName == '')
        {
            $("#lastName").addClass('requed');
            return 'Last name is empty!';}

        if(attribs.email == '')
        {
            $("#email").addClass('requed');
            return 'Email is empty!';}

        var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
        if(!pattern.test(attribs.email)){
            return 'Incorrect email address!';
        }

        if(attribs.password == '')
        {
            $("#password").addClass('requed');
            return 'Password is empty!';}

        if(attribs.password.length < 6)
        {
            $("#password").addClass('requed');
            return 'Password is small!';}
    },

    initialize: function(attribs){
        this.on("invalid",function(model,error){
            $(".errorsRegistration").show();
            $(".errorsRegistration").html(error);
        });
    }
});

var Person = Backbone.Model.extend ({
    defaults: {
        id: 'undefined',
        firstName: 'undefined',
        lastName: 'undefined',
        logo: 'undefined',
        facebookUid: 'undefined',
        password: 'undefined',
        email: 'undefined',
        phoneNumber: 'undefined',
        dob: 'undefined',
        serviceId: 'undefined',
        role: 'undefined',
        latitude: 'undefined',
        longitude: 'undefined'
    },
    login: function (email, password) {

        var res = $.ajax({
                        type: "POST",
                        url: "/proxi/index.php",
                        data: "url=user/auth&email="
                                + email
                                + "&password="
                                + password,
                        async: false,
                        success: function(msg){

                        }
                    }).responseText;
        
       
        res = JSON.parse(res);
        if (res.status === 'HTTP/1.1 200 OK') {
            this.setFilds(res.object);
            localStorage.setItem('user', JSON.stringify(this));
            return true;
        } else {
            alert(res.parameters);
        }
    },
    fbLogin: function (uid) {
        var res = $.ajax({
                    type: "POST",
                    url: "/proxi/index.php",
                    data: "url=/user/authfb&facebookUid=" + uid,
                    async: false,
                    success: function(msg){

                    }
                }).responseText;
        if (res.indexOf('404') !== -1) {
            return false;
        }
    },
    logOut: function() {
        deleteCookie('auth');
        $('.logOut').html('<i class="icon-lock-small"></i>Sing in');
        $('.logOut').addClass('signIn');
        $('.signIn').removeClass('logOut');
    },
    setFilds: function (obj) {
        obj = JSON.parse(obj);
        for(var p in obj) {
            if(typeof(this.get(p)) === 'string') {
                this.set(p, obj[p]);
            }
        }
    }, 
    
    imgValid: function (obj) {
     if (obj.height > 199 && obj.width > 199) {
         return true;
     }
     return false;
    },
    sendMessage: function (number) {
        bodyContent = $.ajax({
                        url: "/twilio/index.php?number="+ number,
                        async: false,
                        type: "GET",
                        success: function(msg){
                        }
                     }
                    ).responseText;
        return bodyContent;
    },
    register: function (attribs) {
        var res = $.ajax({
            type: "POST",
            url: "/proxi/index.php",
            data: "url=user/registration&firstName="
                + attribs.firstName
                + "&lastName="
                + attribs.lastName
                + "&logo="
                + attribs.logo
                + "&password="
                + attribs.password
                + "&email="
                + attribs.email
                + "&phoneNumber="
                + attribs.phoneNumber
                + "&dob="
                + attribs.dob
                + "&latitude="
                + attribs.latitude
                + "&longitude="
                + attribs.longitude
                + "&facebookUid="
                + attribs.facebookUid
            ,
            async: false,
            success: function(msg){

            }
        }).responseText;


        res = JSON.parse(res);
        if (res.status === 'HTTP/1.1 200 OK') {
            this.setFilds(res.object);
            localStorage.setItem('user', JSON.stringify(this));
            return true;
        } else {
            alert(res.parameters);
        }
    }
});

var Service = Backbone.Model.extend ({
    defaults: {
        jobList: 'undefined'
    },
    
    getJobs: function () {
        bodyContent = $.ajax({
                        url: "/proxi/index.php?url=/typejob",
                        async: false,
                        type: "GET",
                        dataType: "JSON",
                        success: function(msg){
                        }
                     }
                    ).responseText;
        bodyContent = JSON.parse(bodyContent);
        var bufer = '';
        var str = '<select class="select"><option value="0">Click for a dropdown of jobs...</option>';
        for (var i in bodyContent.list) {
            bufer = JSON.parse(bodyContent.list[i]);
            str += '<option value="' 
                    + bufer.id 
                    + '">' 
                    + bufer.name
                    + '</option>';
        }
        str += '</select>'; 
        return str;
    },
    
    monthValid: function (val) {
        if (!parseInt(val)) {
            return false;
        }
        
        if (parseInt(val) < 0 || parseInt(val) === 0 || parseInt(val) > 12) {
            return false;
        }
        
        return true;
    },
    
    dayValid: function (val) {
        if (!parseInt(val)) {
             return false;
        }

        if (parseInt(val) < 0 || parseInt(val) === 0 || parseInt(val) > 31) {
             return false;
        }

        return true; 
    },
    yearValid: function (val) {
        if (!parseInt(val)) {
             return false;
        }

        if (parseInt(val) < 1900) {
             return false;
        }

        return true;
    },
    phoneValid: function (val) {
        var reg = "(\\+[0-9]+[\\- \\.]*)?"
                + "(\\([0-9]+\\)[\\- \\.]*)?"
                + "([0-9][0-9\\- \\.]+[0-9])";
        var arr = val.match(reg);
        
        if(arr == null) {
            return false;
        }
        
        //alert(arr[0] + '==' + arr[arr.length -1]);
        if (arr[0] === arr[arr.length -1]) {
            return true;
        }
        return false;
    }
});




























































//otherLogick
////////////////////////////////////////////////////////////////////////////////

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires === "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires*1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) { 
  	options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for(var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];    
    if (propValue !== true) { 
      updatedCookie += "=" + propValue;
     }
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, "", { expires: -1 });
}
