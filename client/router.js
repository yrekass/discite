/**
 * Client routing
 */
Router.route('/', function () {
    this.render('homepageTpl');
});

Router.route('/login');

Router.route('/course/list/', function () {
    this.render('courseListTpl');
    //TODO: waitOn...
});

Router.route('/course/create/', function () {
    this.render('courseCreateTpl');
});

Router.route('/course/:_id', function () {
    var course = Courses.findOne({_id: this.params._id});
    this.render('courseTpl', {data: course});
}, {
    name: 'course.view'
});


Router.route('/conference/list/', function () {
    this.render('conferenceListTpl');
});

Router.route('/conference/create/', function () {
    this.render('conferenceCreateTpl');
});

Router.route('/conference/:_id', function () {
    var conference = Conferences.findOne({_id: this.params._id});
    this.render('conferenceTpl', {data: conference});
}, {
    name: 'conference.view'
});

/**
 * Redirect if not login
 */
Router.onBeforeAction(function() {
    if (!Meteor.user() && this.ready()){
        return this.redirect('/login');
    } else {
        this.next();
    }
}, {except: ['login']});
