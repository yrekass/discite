'use strict';
/*global Courses:true*/
/*global Conferences:true*/
/*global Quizzs:true*/
/*global Forums:true*/
/**
 * Client routing
 */
Router.route('/', function () {
    this.render('homepageTpl');
});

Router.route('/login');

Router.route('/course/list/', function () {
    this.render('courseListTpl');
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

Router.route('/quizz/create/:idCourse', function () {
    this.render('quizzCreateTpl');
}, {
        name: 'quizz.create'
});

Router.route('/quizz/list/', function () {
    this.render('quizzListTpl');
});

Router.route('/quizz/:_id', function () {
    var quizz = Quizzs.findOne({_id: this.params._id});
    this.render('quizzTpl', {data: quizz});
}, {
    name: 'quizz.view'
});

Router.route('/forum/create/:idCourse', function () {
    this.render('forumCreateTpl');
} , {
        name: 'forum.create'
});

Router.route('/forum/list/', function () {
    this.render('forumListTpl');
});

Router.route('/forum/:_id', function () {
    var forum = Forums.findOne({_id: this.params._id});
    this.render('messageForumTpl', {data: forum});
}, {
    name: 'forum.view'
});