
FB.init({appId: '296177443921857', status: true, cookie: true, xfbml: true});
FB.getLoginStatus(checkLoginStatus);
FB.Event.subscribe('auth.authResponseChange', auth_response_change_callback);
FB.Event.subscribe('auth.statusChange', auth_status_change_callback);



function checkLoginStatus(response) {
    }



$(document).on('click','.fbBtn', function() {
    FB.login(function(response) {
    }, {scope: 'email,user_likes'});

    FB.api('/me', {fields: 'last_name,first_name,id'}, function(response) {
        console.log(response);});
});

var auth_response_change_callback = function(response) {
    console.log("auth_response_change_callback");
    console.log(response);
}

var auth_status_change_callback = function(response) {
    console.log("auth_status_change_callback: " + response);
}