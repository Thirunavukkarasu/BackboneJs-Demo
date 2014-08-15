var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "contact"           : "contact",		
        "about"             : "about"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    },
	
    contact: function (id) {
        if (!this.contactView) {
            this.contactView = new ContactView();
        }
        $('#content').html(this.contactView.el);
        this.headerView.selectMenuItem('contact-menu');
    },	

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    }

});

utils.loadTemplate(['HomeView', 'HeaderView','ContactView', 'AboutView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});