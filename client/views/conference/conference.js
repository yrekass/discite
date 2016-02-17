'use strict';
/*global Conferences:true*/

Template.conferenceTpl.helpers({
    conferences: function () {
        Meteor.subscribe('conferences');
        return Conferences.find({courseId: {$exists: false}});
    },
    isCourseContext: () => {
        return Router.current().location.get().path.split('/')[1] === 'course';
    },
    isNotCourseContext: ()=> {
        return Router.current().location.get().path.split('/')[1] !== 'course';
    }
});

Template.conferenceTpl.rendered = function () {
    const getContext = () => {
        return Router.current().location.get().path.split('/')[1];
    };

    const context = getContext();

    if (context === 'course') {
        Session.set('courseId', Router.current().params._id);
    }
};