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
        'terms' : 'terms',
        'contract' : 'contract',
        'privacy' : 'privacy',
        '404'  : 'p404'
    },
    index: function () {
        location.href = '/#main';
        var indexView = new IndexView();


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
    contract: function(){
        $('body').html('');
        var page = new ContractView ();
    },
    terms: function () {
        $('body').html('');
        var page = new TermsView ();
    },
    privacy: function () {
        $('body').html('');
        var page = new PrivacyView ();
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