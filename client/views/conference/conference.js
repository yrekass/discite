'use strict';
/*global Conferences:true*/
/*global Courses:true*/


Template.conferenceTpl.helpers({
    conferences: function(){
        Meteor.subscribe('conferences');
        return Conferences.find({ courseId: { $exists:false}});
    }
});

Template.conferenceTpl.rendered = function(){
    var countCourse = Courses.find(Router.current().params._id).count();
    if(countCourse >= 1){
        Session.set("courseId", Router.current().params._id);
    }

    Template.registerHelper('isNotCourseContext', function() {
        var countCourse = Courses.find(Router.current().params._id).count();
        return countCourse < 1;
    });
    Template.registerHelper('isCourseContext', function() {
        var countCourse = Courses.find(Router.current().params._id).count();
        return countCourse >= 1;
    });
};