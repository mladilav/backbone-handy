window.App = {
            Views: {},
            Models: {},
            Collections : {},
            Router: {}
        };

window.template = function(id) {
    return _.template( $('#' + id).html() );
};

App.Router = Backbone.Router.extend({
    routes: {
        ''     : 'index',
        'bio'  : 'bio',
        'main' : 'main',
        '404'  : 'p404'
    },
    index: function () {
        location.href = '/#main';
        var indexView = new IndexView();
        var person = new Person();
        $(document).on('click', '#fileupload', function () {
            $(this).fileupload({
                dataType: 'json',
                done: function (e, data) {
                    $.each(data.result.files, function (index, file) {
                        $('body').append('<img id="proxi" src="/server/php/files/' 
                                + file.name + '" />');
                        $('#avatar').attr('src','/server/php/files/thumbnail/' 
                                + file.name);
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
        });
    },
    bio: function () {
        var user = JSON.parse(localStorage.getItem('user'));
        //alert(typeof(user) + ' ' + user);
        //console.log(user);
        if( !user) {
            location.href = "/#404";
        }
        //$( ".select-bio" ).selectmenu({ change: function( event, ui ) { alert('x'); }});
        
        //alert(localStorage.getItem('user'));
        //localStorage.removeItem('user');
        $('body').html('');
        var page = new BioView();
    },
    main: function () {
        $('body').html('');
        var page = new MainView ();
    },
    
    p404: function () {
        $('body').html('');
        alert('404');
    }
    
    
    });
    
    $( document ).ready(function() {
        new App.Router();
        Backbone.history.start();
    });