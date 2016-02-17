'use strict';
/*global Conferences:true*/
/*global Courses:true*/

Template.conferenceListTpl.helpers({
    conferences: function () {
        Meteor.subscribe('conferences');
        Meteor.subscribe('courses');
        var countCourse = Courses.find(Router.current().params._id).count();
        if (countCourse >= 1) {
            return Conferences.find({courseId: Router.current().params._id}, {sort: {createdAt: -1}});
        } else {
            return Conferences.find({courseId: {$exists: false}}, {sort: {createdAt: -1}});
        }
    },
    isCourseContext: () => {
        return Router.current().location.get().path.split('/')[1] === 'course';
    },
    isNotCourseContext: ()=> {
        return Router.current().location.get().path.split('/')[1] !== 'course';
    }
});

Template.conferenceListTpl.rendered = function () {
    const getContext = () => {
        return Router.current().location.get().path.split('/')[1] ;
    };

    const context = getContext();

    if (context === 'course') {
        Session.set('courseId', Router.current().params._id);
    }
};